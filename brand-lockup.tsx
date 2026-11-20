import Link from "next/link";

export function BrandLockup() {
  return (
    <Link className="brand-lockup" href="/" aria-label="Aroma Haven Café home">
      <span className="brand-monogram" aria-hidden="true">AH</span>
      <span className="brand-wordmark"><span>AROMA HAVEN</span><small>CAFÉ · MOTIHARI</small></span>
    </Link>
  );
}
