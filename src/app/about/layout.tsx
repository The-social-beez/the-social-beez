// import '../glo'
import type { Metadata } from 'next'

// import { WhatsappIcon, CallIcon } from '@/feature'
// import { Navbar, Footer } from '@/components'


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
    <main className="bg-red-900">

      {children}

    </main>
  )
}
