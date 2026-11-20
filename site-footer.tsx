import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><BrandLockup /><p className="footer-note">A little pause. A little warmth. Something made with care.</p></div>
        <div className="footer-links"><span className="eyebrow">Explore</span><Link href="/menu">Menu</Link><Link href="/#story">Our story</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-links"><span className="eyebrow">Find us</span><span>Motihari, Bihar, India</span><a href="tel:+919229310610">+91 92293 10610</a><a href="mailto:Anubhavrajput@aromahavencafe.com">Email the café</a></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Aroma Haven Café</span><span>Served With Love &amp; Quality !!</span></div>
    </footer>
  );
}
