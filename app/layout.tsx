import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Get a $100 Crumbl Gift Card | Review Your Favorite Cookies',
  description: 'Review your favorite cookie flavors and earn a $100 Crumbl gift card as a thank you for your feedback.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
