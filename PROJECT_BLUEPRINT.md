# Aroma Haven Café — Project Blueprint

## Brand experience
- Premium editorial direction: deep espresso, near-black, warm cream and muted copper.
- Hybrid logo: full wordmark plus compact monogram.
- Primary showcase: desktop/laptop, with carefully recomposed tablet/mobile layouts.
- 3D signature: cinematic coffee + café atmosphere + interactive product discovery. 3D is a progressive enhancement, never a dependency for ordering.
- Sound: optional ambience and coffee-machine/brewing textures, muted by default and controlled by the visitor.
- Generated photography: one consistent art direction, lighting and colour grade across café, menu, product and lifestyle scenes.

## Customer experience routes
- Home, Menu, Product Detail, About, Contact
- Search, Cart, Checkout, Order Confirmation, Order Tracking
- Login/Register, Account, Addresses, Favourites, My Orders, Order Detail
- Rewards (interface first; financial rules gated)
- Reviews (completed verified-order submissions only)
- Terms, Privacy, Cancellation/Refund, Delivery, Food/Allergen and grievance pages

## Operations routes
- Admin Login and role-aware Dashboard
- Orders and order details
- Kitchen display
- Menu/category/product editor
- Customers, tables and dine-in sessions
- Coupons, verified reviews and contact messages
- Analytics, availability, notifications and audit history
- Settings, permissions, tax/delivery/payment and legal content controls

## Roles
- **Owner:** complete access; manage staff, settings, integrations and financial/tax configuration.
- **Manager:** delegated operational access to orders, menu, availability, customers, reviews and reports.
- **Staff:** least-privilege operational access, primarily order and kitchen actions assigned by the owner.

All access decisions are checked server-side. Hiding a link is not authorization.

## Order lifecycle
`PENDING_REVIEW → ACCEPTED → PREPARING → QUALITY_CHECK → READY → COMPLETED`

Alternative branches: `REJECTED`, `CANCELLED`, and `OUT_FOR_DELIVERY` for delivery orders. Every status transition is recorded with timestamp and actor. Admin can select automatic or manual acceptance. Cancellation/refund decisions remain under Admin control.

## Launch gates
- Verify physical café hours, menu, prices, ingredients and allergens.
- Configure actual table labels/capacities and delivery service coverage.
- Confirm GST treatment and invoice rules with a qualified tax professional.
- Supply FSSAI/legal business identifiers and grievance contact.
- Approve refund/cancellation policy and loyalty rules.
- Select authentication/email providers and supply approved social links.
- Complete business-owner payment-provider onboarding before enabling real online payments.
- Connect the authorized repository and Render service; set production secrets.

The current milestone is the architecture and first public shell. Routes and service areas listed above are the target specification, not a claim that every workflow is already implemented.


## Image library and easy replacement
- Site-wide imagery uses stable named slots in `src/data/site-media.ts` (hero, signature products, café exterior/interior and gallery).
- Current images are deliberately optional; polished fallback treatments render without uploaded files.
- Product records already include an `imagePath`. The schema now also includes `MediaAsset` and `SiteMediaSlot` so the authenticated Admin media library can upload once, assign to a site slot/product, set alt text and focal point, and replace later.
- The first local asset workflow is documented in `docs/MEDIA_LIBRARY.md`; production uploads must use persistent storage or object storage and authenticated, validated upload endpoints.
