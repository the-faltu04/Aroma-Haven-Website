# Security Baseline

## Server authority
All price, discount, GST, delivery, product availability, coupon eligibility, payment state, order state and admin permissions must be computed or verified server-side. Ignore client-supplied totals and role claims.

## Authentication and sessions
- Keep the auth provider behind a provider-neutral adapter until the owner chooses sign-in methods.
- If passwords are enabled, use Argon2id or another current OWASP-recommended password hash.
- Store only hashed opaque session tokens; use Secure, HttpOnly and SameSite cookies in production.
- Rotate and revoke sessions; apply shorter expiry to privileged accounts.
- Add rate limiting and anti-enumeration responses to login and recovery flows.
- Guest checkout must not grant account or admin access.

## Authorization
- Owner, Manager and Staff checks happen on the server for every protected operation.
- Use a permission matrix, not merely hidden navigation.
- Role grants, sensitive financial settings and integration secrets are Owner-only by default.
- Staff receives least-privilege operational access.

## Orders and payments
- Use idempotency keys for order creation and payment initiation.
- Verify signatures/webhooks server-side; never trust a browser callback alone.
- Do not store PAN, CVV or other sensitive card data.
- Mark sandbox records as test transactions internally and visually.
- Preserve order/payment history and audit privileged changes.

## Application protections
- Validate all inputs at the route/service boundary.
- Add CSRF protection where cookie-authenticated state-changing requests require it.
- Configure secure headers and a Content Security Policy after asset requirements are known.
- Keep secrets in environment variables; never commit `.env`.
- Restrict upload MIME types, size, dimensions and storage permissions.
- Minimize personal data and define retention/deletion rules after legal review.

## Go-live blockers
Do not enable public admin accounts or live payment processing until owner-controlled accounts, merchant verification, domain, secrets, production database, legal disclosures and recovery procedures are reviewed.
