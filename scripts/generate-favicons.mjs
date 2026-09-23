import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const src = join(root, 'public', 'images', 'Blue-Rose-Auto.webp')
const pub = join(root, 'public')

const sizes = [16, 32, 48, 180, 192, 512]
console.log('Generating favicons from Blue-Rose-Auto.webp …')

const buffers = await Promise.all(
  sizes.map((s) =>
    sharp(src)
      .resize(s, s, { fit: 'cover', position: 'centre' })
      .png()
      .toBuffer()
  )
)

const [buf16, buf32, buf48, buf180, buf192, buf512] = buffers

// 512×512 — used by Google, Android, PWA
writeFileSync(join(pub, 'icon.png'), buf512)
console.log('  ✅ public/icon.png (512×512)')

// 192×192 — Android home screen
writeFileSync(join(pub, 'icon-192.png'), buf192)
console.log('  ✅ public/icon-192.png (192×192)')

// 180×180 — Apple touch icon
writeFileSync(join(pub, 'apple-icon.png'), buf180)
console.log('  ✅ public/apple-icon.png (180×180)')

// favicon.ico — multi-size ICO embedding 16, 32, 48 PNGs (PNG-in-ICO, Vista+ compatible)
function buildIco(images) {
  const count = images.length
  const headerSize = 6
  const entrySize = 16
  let dataOffset = headerSize + entrySize * count

  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)   // reserved
  header.writeUInt16LE(1, 2)   // type 1 = ICO
  header.writeUInt16LE(count, 4)

  const entries = []
  const chunks = []

  for (const { size, buf } of images) {
    const entry = Buffer.alloc(16)
    // width/height: 0 means 256 in ICO spec
    entry.writeUInt8(size >= 256 ? 0 : size, 0)
    entry.writeUInt8(size >= 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2)          // color count (0 = 256+)
    entry.writeUInt8(0, 3)          // reserved
    entry.writeUInt16LE(1, 4)       // color planes
    entry.writeUInt16LE(32, 6)      // bits per pixel
    entry.writeUInt32LE(buf.length, 8)
    entry.writeUInt32LE(dataOffset, 12)
    entries.push(entry)
    chunks.push(buf)
    dataOffset += buf.length
  }

  return Buffer.concat([header, ...entries, ...chunks])
}

const ico = buildIco([
  { size: 16, buf: buf16 },
  { size: 32, buf: buf32 },
  { size: 48, buf: buf48 },
])
writeFileSync(join(pub, 'favicon.ico'), ico)
console.log('  ✅ public/favicon.ico (16, 32, 48 px multi-size)')

// Web App Manifest
const manifest = {
  name: 'Blue Rose Auto Detailing Services',
  short_name: 'Blue Rose',
  description: 'Professional auto detailing in Springfield & Eugene, OR',
  start_url: '/',
  display: 'standalone',
  background_color: '#0A0A0B',
  theme_color: '#C8243F',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
    { src: '/icon.png',     sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
}
writeFileSync(join(pub, 'site.webmanifest'), JSON.stringify(manifest, null, 2))
console.log('  ✅ public/site.webmanifest')

console.log('\nDone. All favicon assets ready.')
