import type { Metadata } from "next";
export const metadata: Metadata = { title: "Visit & Contact" };

export default function ContactPage() {
  return <div className="page"><div className="shell"><p className="eyebrow">A warm welcome awaits</p><div className="page-title"><h1>Meet us<br /><em>at the café.</em></h1><p>We are building a place for good coffee, thoughtful food and easy conversation in Motihari.</p></div>
    <div className="contact-grid"><section className="contact-panel"><p className="eyebrow">Find us</p><h2>Motihari</h2><p>Bihar, India</p><hr /><p className="eyebrow">Call or WhatsApp</p><a href="tel:+919229310610">+91 92293 10610</a><hr /><p className="eyebrow">Email</p><a href="mailto:Anubhavrajput@aromahavencafe.com">Anubhavrajput@aromahavencafe.com</a></section><section className="hours-panel"><p className="eyebrow">Ordering & opening</p><h2>Here when<br /><em>you need us.</em></h2><p className="online-hours">Online ordering · 24 × 7</p><p>Physical café hours differ from online ordering hours and will be added when confirmed by the owner. Please check published opening hours before visiting in person.</p></section></div>
  </div></div>;
}
