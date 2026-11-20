# Aroma Haven Café

Premium café website and operations platform for Aroma Haven Café, Motihari, Bihar, India.

**Milestone:** Phase 1 architecture and initial public shell. This is not yet a production ordering system. Sample menu items and prices are explicitly provisional. Authentication, ordering APIs, payment processing, kitchen operations and legal policy publication are not enabled in this milestone.

## Stack
- Next.js App Router, React and TypeScript
- PostgreSQL with Prisma ORM 7
- React Three Fiber / Three.js reserved for a dynamically loaded 3D experience
- Render Node web service + Render Postgres target

## Local setup
Requirements: Node.js 22.12+ (Node 24 LTS is the planned target), npm and a PostgreSQL database.

1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `AUTH_SECRET`.
2. Install dependencies: `npm install`.
3. Generate the Prisma client: `npm run db:generate`.
4. Create/review migrations: `npm run db:migrate`.
5. Start the development server: `npm run dev`.
6. Open `http://localhost:3000`.

## Current routes
- `/` — initial premium landing page
- `/menu` — proposed opening menu concept with provisional prices
- `/contact` — supplied contact details and online-ordering hours
- `/admin` — setup notice; operational access is not enabled yet

## Documents
- `docs/ARCHITECTURE.md`
- `docs/BUSINESS_RULES.md`
- `docs/SECURITY.md`
- `docs/ROADMAP.md`
- `RENDER_DEPLOYMENT.md`

## Launch conditions
- Owner must review and publish each menu item and price.
- Physical café hours, actual delivery coverage and delivery prices must be verified.
- A qualified tax professional must confirm GST treatment before tax billing is enabled.
- Actual business identity, FSSAI and tax identifiers must be supplied and verified before legal pages are published.
- Live payments require the business operator's verified merchant account, live credentials, webhooks and explicit approval. Test mode cannot collect real money.
- Policies must be reviewed against the actual operator identity, workflows and current Indian law.

## Verification status
The project files have been authored, but npm registry access timed out in the execution environment. Dependency installation, `next build`, Prisma generation and automated tests have **not** been run. Run these checks in an internet-enabled development environment before continuing.


## Adding photography later
See [`docs/MEDIA_LIBRARY.md`](docs/MEDIA_LIBRARY.md). All site imagery is consumed through stable media slots, and all menu products already have an image-path field. Pages display designed fallbacks until images are assigned. The secured Admin upload/replace interface is part of the Admin implementation phase; no image assets are required to continue development.
