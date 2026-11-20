import { siteMedia, type SiteMediaSlot } from "@/data/site-media";

/**
 * Resolve a slot from the optional database-backed media library, falling
 * back to the local catalogue when it is not configured or not yet available.
 */
export async function resolveSiteMedia(slotKey: SiteMediaSlot) {
  const fallback = siteMedia[slotKey];
  if (process.env.MEDIA_LIBRARY_FROM_DATABASE !== "true" || !process.env.DATABASE_URL) {
    return fallback;
  }

  try {
    const { prisma } = await import("@/lib/db");
    const slot = await prisma.siteMediaSlot.findUnique({
      where: { key: slotKey },
      include: { asset: true },
    });

    if (!slot) return fallback;
    return {
      title: slot.title || fallback.title,
      alt: slot.altText || fallback.alt,
      src: slot.asset?.publicUrl || fallback.src,
      focalPoint: `${slot.focalX}% ${slot.focalY}%`,
    };
  } catch (error) {
    // Media is a progressive enhancement: a database outage must not blank a page.
    console.warn(`Could not resolve media slot "${slotKey}"; using its fallback.`, error);
    return fallback;
  }
}
