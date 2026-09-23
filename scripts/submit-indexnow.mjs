// Run: node scripts/submit-indexnow.mjs
const KEY  = 'a3f7e9b2c5d1f804'
const HOST = 'www.blueroseautodetailing.com'
const BASE = `https://${HOST}`

const URLS = [
  `${BASE}/`,
  `${BASE}/services`,
  `${BASE}/services/auto-detailing`,
  `${BASE}/services/paint-correction`,
  `${BASE}/services/ceramic-coating`,
  `${BASE}/services/paint-protection-film`,
  `${BASE}/services/window-tinting`,
  `${BASE}/services/vinyl-wraps`,
  `${BASE}/services/rv-detailing`,
  `${BASE}/services/boat-detailing`,
  `${BASE}/locations`,
  `${BASE}/locations/springfield-or`,
  `${BASE}/locations/eugene-or`,
  `${BASE}/locations/coburg-or`,
  `${BASE}/locations/lowell-or`,
  `${BASE}/locations/veneta-or`,
  `${BASE}/locations/creswell-or`,
  `${BASE}/locations/harrisburg-or`,
  `${BASE}/locations/santa-clara-or`,
  `${BASE}/locations/cottage-grove-or`,
  `${BASE}/locations/junction-city-or`,
  `${BASE}/about`,
  `${BASE}/contact`,
  `${BASE}/faq`,
  `${BASE}/gallery`,
  `${BASE}/reviews`,
  `${BASE}/book`,
  `${BASE}/blog`,
]

async function submit(endpoint) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${BASE}/${KEY}.txt`,
      urlList: URLS,
    }),
  })
  console.log(`${endpoint} → HTTP ${res.status}`)
}

async function run() {
  console.log(`Submitting ${URLS.length} URLs to IndexNow…`)
  await submit('https://api.indexnow.org/indexnow')
  await submit('https://www.bing.com/indexnow')
  console.log('Done.')
}

run().catch(console.error)
