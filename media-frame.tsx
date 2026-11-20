import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteMediaSlot } from "@/data/site-media";
import { resolveSiteMedia } from "@/lib/media/resolve-site-media";

type MediaFrameProps = {
  slot: SiteMediaSlot;
  className?: string;
  alt?: string;
  priority?: boolean;
  children?: ReactNode;
};

/** Stable image slot with an intentional fallback until an asset is assigned. */
export async function MediaFrame({
  slot,
  className = "",
  alt,
  priority = false,
  children,
}: MediaFrameProps) {
  const media = await resolveSiteMedia(slot);
  const imageAlt = alt ?? media.alt;

  return (
    <div className={`media-frame ${className}`} data-media-slot={slot}>
      {media.src ? (
        <Image
          src={media.src}
          alt={imageAlt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 620px"
          style={{ objectPosition: media.focalPoint }}
        />
      ) : (
        <div className="media-frame-fallback" role="img" aria-label={imageAlt}>
          {children ?? (
            <span className="media-fallback-mark" aria-hidden="true">
              <span>AH</span>
              <small>{media.title}</small>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
