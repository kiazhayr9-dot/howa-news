export async function GET(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || ''
  const sample = [{ title:'Sample', link: base, pubDate: new Date().toUTCString(), description:'Sample' }]
  const items = sample.map(a=>`<item><title><![CDATA[${a.title}]]></title><link>${a.link}</link><pubDate>${a.pubDate}</pubDate><description><![CDATA[${a.description}]]></description></item>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Howa News</title><link>${base}</link><description>Latest headlines</description>${items}</channel></rss>`
  return new Response(xml, { status:200, headers: { 'Content-Type': 'application/rss+xml' } })
}
