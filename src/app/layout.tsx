import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import WhatsappIcon from '@/feature/Whatsapp-button/WhatsappIcon'
import CallIcon from '@/feature/Call-button/CallIcon'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Social Beez | Kickstart your brand!',
  description: 'Digital Marketing Agency in Badlapur - The SocialBeez',
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
        <Analytics />

        <Footer />

        <WhatsappIcon />
        <CallIcon />
      </body>
    </html>
  )
}
