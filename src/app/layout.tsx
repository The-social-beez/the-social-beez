import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

import { WhatsappIcon, CallIcon } from '@/feature'
import { Navbar, Footer } from '@/components'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'The Social Beez | Kickstart your brand!',
  description: 'Digital Marketing Agency in Badlapur - The SocialBeez',
  verification: {
    google: "LBM0Y_Wpd5Rz7aFny3csEeuRTlz7YVMyVcEyyJ6T4zM"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-wheat">
        <Navbar />

        {children}

        <Footer />

        <WhatsappIcon />
        <CallIcon />

        <Analytics />
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K39NH2WJ72" />
      <Script id="gtag-script">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-K39NH2WJ72');`}
      </Script>
    </html>
  )
}
