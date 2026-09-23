import { NextResponse } from 'next/server'

const KEY      = 'a3f7e9b2c5d1f804'
const HOST     = 'www.blueroseautodetailing.com'
const BASE_URL = `https://${HOST}`

const URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/services`,
  `${BASE_URL}/services/auto-detailing`,
  `${BASE_URL}/services/paint-correction`,
  `${BASE_URL}/services/ceramic-coating`,
  `${BASE_URL}/services/paint-protection-film`,
  `${BASE_URL}/services/window-tinting`,
  `${BASE_URL}/services/vinyl-wraps`,
  `${BASE_URL}/services/rv-detailing`,
  `${BASE_URL}/services/boat-detailing`,
  `${BASE_URL}/locations`,
  `${BASE_URL}/locations/springfield-or`,
  `${BASE_URL}/locations/eugene-or`,
  `${BASE_URL}/locations/coburg-or`,
  `${BASE_URL}/locations/lowell-or`,
  `${BASE_URL}/locations/veneta-or`,
  `${BASE_URL}/locations/creswell-or`,
  `${BASE_URL}/locations/harrisburg-or`,
  `${BASE_URL}/locations/santa-clara-or`,
  `${BASE_URL}/locations/cottage-grove-or`,
  `${BASE_URL}/locations/junction-city-or`,
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/faq`,
  `${BASE_URL}/gallery`,
  `${BASE_URL}/reviews`,
  `${BASE_URL}/book`,
  `${BASE_URL}/blog`,
]

export async function GET() {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE_URL}/${KEY}.txt`,
        urlList: URLS,
      }),
    })
    return NextResponse.json({ status: res.status, urls: URLS.length })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
