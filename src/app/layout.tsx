import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import WhatsappIcon from '@/feature/Whatsapp-button/WhatsappIcon'
import CallIcon from '@/feature/Call-button/CallIcon'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Social Beez | Kickstart your brand!',
  description: 'Digital Marketing Agency in Badlapur - The SocialBeez',
  verification: {
    google: "LBM0Y_Wpd5Rz7aFny3csEeuRTlz7YVMyVcEyyJ6T4zM"
  }
  // "google-site-verification": "LBM0Y_Wpd5Rz7aFny3csEeuRTlz7YVMyVcEyyJ6T4zM"

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
        <meta name="google-site-verification" content="LBM0Y_Wpd5Rz7aFny3csEeuRTlz7YVMyVcEyyJ6T4zM" />
      </head> */}

      <body className="bg-wheat">
        <Navbar />

        {children}
        <Analytics />

        <Footer />

        <WhatsappIcon />
        <CallIcon />
      </body>
    </html>
  )
}
