/**
 * Converts Google Business photos → SEO-optimised WebP gallery images.
 * Run: node scripts/process-google-gallery.mjs
 */
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const SRC = 'C:/Users/Asif Computers/Downloads'
const DEST = 'D:/bluerose/public/images/gallery'

// [source filename, output filename]
// unnamed (16) = generic stock red car — skipped
// unnamed (22) = car keys — skipped
const IMAGES = [
  ['unnamed.webp',       'auto-detailing-ford-fusion-hybrid-white-exterior-springfield-or.webp'],
  ['unnamed (1).webp',   'interior-detail-jeep-wrangler-rear-seats-before-springfield-or.webp'],
  ['unnamed (2).webp',   'paint-correction-black-car-da-polisher-process-springfield-or.webp'],
  ['unnamed (3).webp',   'vinyl-wrap-blue-sports-car-process-springfield-or.webp'],
  ['unnamed (4).webp',   'auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp'],
  ['unnamed (5).webp',   'paint-correction-audi-rs7-grey-polishing-process-springfield-or.webp'],
  ['unnamed (6).webp',   'rv-detailing-country-coach-intrigue-motorhome-springfield-or.webp'],
  ['unnamed (7).webp',   'interior-detail-toyota-4runner-carpet-clean-springfield-or.webp'],
  ['unnamed (8).webp',   'interior-detail-acura-mdx-black-leather-seats-springfield-or.webp'],
  ['unnamed (9).webp',   'interior-detail-carpet-extraction-deep-clean-springfield-or.webp'],
  ['unnamed (10).webp',  'interior-detail-lexus-rx330-deep-clean-process-springfield-or.webp'],
  ['unnamed (11).webp',  'interior-detail-toyota-celica-dashboard-clean-springfield-or.webp'],
  ['unnamed (12).webp',  'auto-detailing-toyota-celica-white-exterior-springfield-or.webp'],
  ['unnamed (13).webp',  'interior-detail-dodge-ram-1500-black-leather-springfield-or.webp'],
  ['unnamed (14).webp',  'interior-detail-minivan-headliner-clean-springfield-or.webp'],
  ['unnamed (15).webp',  'paint-correction-audi-q7-black-suv-polishing-process-springfield-or.webp'],
  ['unnamed (17).webp',  'interior-detail-toyota-rav4-dashboard-clean-springfield-or.webp'],
  ['unnamed (18).webp',  'auto-detailing-shop-exterior-blue-rose-springfield-or.webp'],
  ['unnamed (19).webp',  'interior-detail-honda-civic-si-seat-before-springfield-or.webp'],
]

async function run() {
  if (!existsSync(DEST)) await mkdir(DEST, { recursive: true })

  let ok = 0, fail = 0
  for (const [srcFile, outFile] of IMAGES) {
    const srcPath = path.join(SRC, srcFile)
    const outPath = path.join(DEST, outFile)
    try {
      await sharp(srcPath)
        .rotate()
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
