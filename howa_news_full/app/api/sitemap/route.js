export async function GET(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || ''
  const urls = [`${base}/`, `${base}/feed.xml`]
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${u}</loc></url>`).join('')}</urlset>`
  return new Response(xml, { status:200, headers: { 'Content-Type': 'application/xml' } })
}
