# Render Deployment Plan

1. Push the code to the café owner's authorized Git repository. No repository was supplied or connected in this milestone.
2. Create a Render Node web service from that repository.
3. Create a private Render PostgreSQL database and configure `DATABASE_URL` with the private connection string.
4. Configure all secrets in Render environment settings; never commit production secrets.
5. Build command: `npm ci && npx prisma generate && npm run build`.
6. Pre-deploy migration command: `npx prisma migrate deploy` after a reviewed initial migration exists.
7. Start command: `npm run start`.
8. Configure a health-check path and custom domain after service verification.
9. Configure persistent media storage (or S3-compatible object storage/CDN) before enabling Admin uploads. Do not rely on the web service's ephemeral filesystem for user-managed images. Set `MEDIA_LIBRARY_FROM_DATABASE=true` only after the media tables have been migrated and seeded.
10. Confirm backups, logs, alerting, restore procedure and dev/staging/production separation before accepting real orders.

Do not deploy this first shell as a production ordering system. The admin, customer, order/payment services and legal configuration are incomplete.
