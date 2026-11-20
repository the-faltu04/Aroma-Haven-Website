# Aroma Haven Café — Image & Media Library

Images are optional. The application must remain complete and visually intentional when no photography has been uploaded.

## Add or replace an image now (no code changes in the page)

1. Put an optimized image in `public/media/` (WebP or AVIF preferred; JPEG/PNG accepted).
2. Use a clear filename, for example `home-hero.webp` or `cappuccino.webp`.
3. Open `src/data/site-media.ts` and set the matching slot's `src` to `/media/home-hero.webp`.
4. Adjust `focalPoint` if the subject needs a different crop, e.g. `50% 35%`.

The page components refer to stable slot names, not filenames. Replacing the file or changing one slot does not require redesigning a page. Empty slots display a designed fallback and preserve the image aspect ratio.

The renderer can optionally resolve the current assignment from PostgreSQL (`MEDIA_LIBRARY_FROM_DATABASE=true`). When enabled, it reads `SiteMediaSlot` and its assigned `MediaAsset`; otherwise it uses the local slot catalogue. A database read failure falls back to the local visual rather than breaking the page.

## Image slots

| Slot | Recommended asset | Suggested shape |
|---|---|---|
| `home.hero` | Main café/coffee hero photograph | 4:5 or 16:9 |
| `home.signature.cappuccino` | Cappuccino product image | 4:5 |
| `home.signature.hazelnut-latte` | Latte product image | 4:5 |
| `home.signature.masala-chai` | Chai product image | 4:5 |
| `cafe.exterior` | Authentic café exterior | 16:9 |
| `cafe.interior` | Café interior | 16:9 |
| `cafe.gallery.01`–`03` | Lifestyle and café detail images | 4:5 or 3:2 |

## Product images

The `Product.imagePath` field already stores the public path for each menu item. A future authenticated Admin Media Library will let an authorized user upload an asset once, preview it, choose a product or site slot, add alt text, adjust its focal point, and replace it later. Products will continue to use their saved image paths; changing one image will not require editing the product layout.

## Storage and deployment

`public/media/` is the simple starter workflow and is appropriate for the first local build. A deployed service must use persistent storage or an object-storage provider for uploads: an ephemeral application filesystem can lose uploaded files during redeploys. The final upload endpoint must be enabled only after the Owner/Manager authorization layer and file validation are in place. It must validate file type and size, generate safe object names, and never allow arbitrary executable uploads.

## Image quality guidance

- Use one consistent warm editorial grade: espresso brown, warm cream, natural highlights and restrained copper.
- Prefer WebP/AVIF and sensible dimensions; avoid huge originals.
- Write real, useful alt text; do not stuff keywords into it.
- Do not present generated concept photography as a documentary photograph of the real café.
- Add genuine café photographs later without changing the components or page structure.
