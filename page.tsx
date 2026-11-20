import type { Metadata } from "next";
export const metadata: Metadata = { title: "Admin setup" };

export default function AdminSetupPage() {
  return <div className="page"><div className="shell admin-card"><p className="eyebrow">Aroma Haven · Operations</p><h1>Admin workspace<br /><em>foundation.</em></h1><p>This route is reserved for the owner, managers and authorized staff. Authentication and server-side permission checks must be completed before operational tools are enabled. No public demo credentials or fabricated business metrics are shown here.</p><ul><li>Owner / Manager / Staff roles planned</li><li>Server-side authorization required</li><li>In-dashboard order notifications planned</li><li>Media Library: upload, assign, crop position and replace site/product images</li><li>Audit trail required for sensitive changes</li></ul></div></div>;
}
