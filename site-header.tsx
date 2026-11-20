import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <BrandLockup />
        <nav aria-label="Main navigation" className="site-nav">
          <Link href="/menu">Menu</Link>
          <Link href="/#story">Our story</Link>
          <Link href="/contact">Visit us</Link>
        </nav>
        <Link className="header-cta" href="/menu">Explore the menu <span>↗</span></Link>
      </div>
    </header>
  );
}
