type SiteMediaDefinition = {
  title: string;
  alt: string;
  src: string | null;
  focalPoint: string;
};

const defineMedia = (entry: SiteMediaDefinition): SiteMediaDefinition => entry;

/**
 * Central catalogue for every brand/site image.
 *
 * Add a file under public/media, then set its public path here. The consuming
 * components never need to know where the file lives. When the authenticated
 * Admin media library is enabled, these records will be populated from the
 * SiteMediaSlot table instead of this static starter catalogue.
 */
export const siteMedia = {
  "home.hero": defineMedia({
    title: "Homepage hero",
    alt: "A signature Aroma Haven coffee scene",
    src: null,
    focalPoint: "50% 50%",
  }),
  "home.signature.cappuccino": defineMedia({
    title: "Signature cappuccino",
    alt: "Cappuccino served in a ceramic cup",
    src: null,
    focalPoint: "50% 50%",
  }),
  "home.signature.hazelnut-latte": defineMedia({
    title: "Hazelnut latte",
    alt: "Hazelnut latte with a delicate milk finish",
    src: null,
    focalPoint: "50% 50%",
  }),
  "home.signature.masala-chai": defineMedia({
    title: "Masala chai",
    alt: "A warm cup of masala chai",
    src: null,
    focalPoint: "50% 50%",
  }),
  "cafe.exterior": defineMedia({
    title: "Café exterior",
    alt: "Exterior of Aroma Haven Café in Motihari",
    src: null,
    focalPoint: "50% 50%",
  }),
  "cafe.interior": defineMedia({
    title: "Café interior",
    alt: "Warm, welcoming Aroma Haven Café interior",
    src: null,
    focalPoint: "50% 50%",
  }),
  "cafe.gallery.01": defineMedia({
    title: "Gallery image 01",
    alt: "A detail from the Aroma Haven café experience",
    src: null,
    focalPoint: "50% 50%",
  }),
  "cafe.gallery.02": defineMedia({
    title: "Gallery image 02",
    alt: "A detail from the Aroma Haven café experience",
    src: null,
    focalPoint: "50% 50%",
  }),
  "cafe.gallery.03": defineMedia({
    title: "Gallery image 03",
    alt: "A detail from the Aroma Haven café experience",
    src: null,
    focalPoint: "50% 50%",
  }),
};

export type SiteMediaSlot = keyof typeof siteMedia;
