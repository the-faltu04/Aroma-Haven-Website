# Aroma Haven Café — Architecture (Phase 1)

## Product shape
A single Next.js application will serve the customer website, account areas, ordering APIs and owner/staff operations. Public pages use server rendering by default; interactive components are isolated as client components. Pricing, tax, delivery, availability, order transitions and permissions remain server-authoritative.

## Selected foundation
- **Web application:** Next.js App Router, React and TypeScript.
- **Database:** PostgreSQL, initially intended for Render Postgres.
- **Data layer:** Prisma ORM 7 with the PostgreSQL driver adapter.
- **Validation:** Zod at request boundaries.
- **3D:** Three.js and React Three Fiber inside a dynamically loaded client-only module, with a static/2D fallback.
- **Motion:** Motion library for restrained interface transitions.
- **Hosting:** Render Node web service plus managed PostgreSQL database.
- **Payments:** Provider adapter planned for Razorpay test mode. Live mode remains blocked until the adult business operator completes merchant onboarding, configures credentials and explicitly approves go-live.
- **Authentication:** Provider-neutral interface first. The owner asked to keep login choices extensible. Guest checkout remains in scope.

## Trust boundaries
1. Browser: presentation and input collection only.
2. Next.js server: authentication, permissions, validation, authoritative price/tax/coupon/delivery calculations, availability, order transitions and payment verification.
3. PostgreSQL: durable source of truth for catalogue, settings, orders, status history, payments, role assignments, reviews and audit events.
4. Payment provider: confirmation must be verified server-to-server; browser redirects alone are never proof of payment.

## Core domain modules
- Brand/content and public pages
- Categories, menu products, variants and add-ons
- Guest and registered customer checkout
- Cart, coupons and checkout totals
- Dine-in table management (50 initial table slots, expandable)
- Motihari delivery settings
- Manual/automatic order acceptance switch
- Kitchen display and order lifecycle
- Customer profiles, addresses and order history
- Completed verified-order reviews with moderation
- Loyalty interface only until financial rules are approved
- In-dashboard admin notifications
- Owner/Manager/Staff permissions
- Audit/activity history and contact messages
- Configurable policy content
- Media asset library with stable site-image slots, alt text and focal-point metadata

## Money and time conventions
- Monetary values are integer paise, never floating-point rupees.
- Currency is INR; timezone is Asia/Kolkata.
- Order lines preserve product name and price snapshots for historical invoices.
- Every order status transition is stored as an event.
- GST stays pending until the café's actual treatment is confirmed; the app must not infer its own classification.
- Delivery fee/free threshold are editable settings. Starter values ₹40 / ₹499 are recommendations, not final promises.

## Render deployment shape
- One Node web service for the Next.js server.
- One private managed PostgreSQL database.
- Secrets and environment settings stored in Render environment configuration.
- Apply reviewed Prisma migrations before traffic is served.
- Customer uploads should go to object storage/CDN, not the ephemeral app filesystem.
- Site media components resolve a stable slot from PostgreSQL when `MEDIA_LIBRARY_FROM_DATABASE=true`, and gracefully fall back to designed placeholders or the local manifest. The upload UI remains gated on authenticated Admin permissions.

## 3D performance rules
- Load the 3D hero after primary page content.
- Prefer demand-driven rendering when continuous motion is not necessary.
- Respect `prefers-reduced-motion` and provide an accessible fallback.
- Compress assets and reduce particle counts, texture resolution and rendering quality on lower-powered devices.
- Checkout and ordering must continue to work when WebGL is unavailable.
