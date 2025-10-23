import './globals.css'
export const metadata = { title: 'Howa News', description: 'Howa News — Latest Jamaican headlines.' }

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (set NEXT_PUBLIC_GA4_ID in env to enable) */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}></script>
        )}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}',{ page_path: window.location.pathname });` }} />
        )}
      </head>
      <body className="bg-black text-gray-100">{children}</body>
    </html>
  )
}
