/**
 * Converts WhatsApp project photos → SEO-optimised WebP gallery images.
 * Run: node scripts/process-gallery.mjs
 */
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const SRC1 = 'C:/Users/Asif Computers/Downloads/WhatsApp Unknown 2026-09-13 at 10.53.25 PM'
const SRC2 = 'C:/Users/Asif Computers/Downloads/WhatsApp Unknown 2026-09-13 at 10.53.34 PM'
const DEST = 'D:/bluerose/public/images/gallery'

// Map: [source folder, source filename] → output filename
const IMAGES = [
  // ── Maserati Levante ─────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.28 AM.jpeg',
         'auto-detailing-maserati-levante-black-suv-exterior-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.28 AM (6).jpeg',
         'auto-detailing-maserati-levante-foam-wash-springfield-or.webp'],

  // ── Ford Transit Custom Van ───────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM.jpeg',
         'auto-detailing-ford-transit-custom-van-garage-springfield-or.webp'],

  // ── VW Golf R ────────────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM (1).jpeg',
         'auto-detailing-vw-golf-r-black-exterior-detail-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM (2).jpeg',
         'auto-detailing-vw-golf-r-full-detail-after-springfield-or.webp'],

  // ── Audi A3 ──────────────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM (3).jpeg',
         'auto-detailing-audi-a3-black-exterior-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM (4).jpeg',
         'interior-detail-audi-a3-steering-wheel-clean-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM (5).jpeg',
         'auto-detailing-audi-a3-alloy-wheel-clean-springfield-or.webp'],

  // ── BMW 3 Series ─────────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.29 AM (6).jpeg',
         'auto-detailing-bmw-3-series-black-exterior-springfield-or.webp'],

  // ── BMW X5 Interior ──────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.30 AM.jpeg',
         'interior-detail-bmw-x5-beige-leather-dashboard-springfield-or.webp'],

  // ── Mercedes-Benz GLC ────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.30 AM (1).jpeg',
         'auto-detailing-mercedes-glc-black-exterior-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.30 AM (2).jpeg',
         'auto-detailing-mercedes-gla-black-rear-exterior-springfield-or.webp'],

  // ── Mercedes-Benz GLA / GLS Wheels ───────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM.jpeg',
         'ceramic-coating-mercedes-glc-wheel-red-brake-caliper-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM (3).jpeg',
         'ceramic-coating-mercedes-gls-amg-wheel-red-caliper-springfield-or.webp'],

  // ── Mercedes-Benz GLA Interior ───────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM (1).jpeg',
         'interior-detail-mercedes-gla-steering-wheel-springfield-or.webp'],

  // ── Mercedes-Benz GLA Exterior / Garage ──────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM (2).jpeg',
         'auto-detailing-mercedes-gla-black-exterior-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM (5).jpeg',
         'auto-detailing-mercedes-gla-full-detail-inside-garage-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM (6).jpeg',
         'auto-detailing-mercedes-gla-shop-springfield-or.webp'],
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.31 AM (7).jpeg',
         'auto-detailing-mercedes-gla-snow-foam-wash-springfield-or.webp'],

  // ── Audi Q7 Foam Wash ────────────────────────────────────────────────────
  [SRC1, 'WhatsApp Image 2026-09-07 at 10.19.32 AM.jpeg',
         'auto-detailing-audi-q7-snow-foam-wash-springfield-or.webp'],

  // ── Land Rover Defender (Paint Correction + Ceramic Coating job) ──────────
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.03 AM.jpeg',
         'paint-correction-land-rover-defender-blue-garage-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.03 AM (1).jpeg',
         'paint-correction-land-rover-defender-gloss-panel-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.04 AM.jpeg',
         'paint-correction-land-rover-defender-door-mirror-gloss-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.05 AM.jpeg',
         'ceramic-coating-land-rover-defender-sill-reflection-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.05 AM (1).jpeg',
         'paint-correction-land-rover-defender-gloss-finish-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.06 AM.jpeg',
         'auto-detailing-land-rover-defender-blue-exterior-rear-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.08 AM.jpeg',
         'auto-detailing-land-rover-defender-blue-exterior-side-springfield-or.webp'],
  [SRC2, 'WhatsApp Image 2026-09-07 at 10.17.10 AM.jpeg',
         'ceramic-coating-land-rover-defender-water-beading-paint-springfield-or.webp'],
]

async function run() {
  if (!existsSync(DEST)) await mkdir(DEST, { recursive: true })

  let ok = 0, fail = 0
  for (const [srcDir, srcFile, outFile] of IMAGES) {
    const srcPath = path.join(srcDir, srcFile)
    const outPath = path.join(DEST, outFile)
    try {
      await sharp(srcPath)
        .rotate()                    // auto-rotate from EXIF
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outPath)
      console.log(`✓ ${outFile}`)
      ok++
    } catch (e) {
      console.error(`✗ ${srcFile}: ${e.message}`)
      fail++
    }
  }
  console.log(`\nDone: ${ok} converted, ${fail} failed`)
}

run()
