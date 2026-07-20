import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import LenisProvider from '@/components/layout/LenisProvider'
import './globals.css'

// ——————————————————————————————————————————
// FONTS (next/font — no layout shift, self-hosted)
// ——————————————————————————————————————————
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// ——————————————————————————————————————————
// METADATA
// ——————————————————————————————————————————
export const metadata: Metadata = {
  metadataBase: new URL('https://alphadev.in'),
  title: {
    default: 'AlphaDev Infotech | Enterprise Software Development',
    template: '%s | AlphaDev Infotech',
  },
  description:
    'AlphaDev Infotech Private Limited delivers enterprise-grade software development, cloud solutions, mobile applications, and digital transformation services for businesses across India.',
  keywords: [
    'software development',
    'enterprise software',
    'web development',
    'mobile apps',
    'cloud solutions',
    'DevOps',
    'AI development',
    'India',
    'AlphaDev',
    'Infotech',
  ],
  authors: [{ name: 'AlphaDev Infotech Private Limited' }],
  creator: 'AlphaDev Infotech',
  publisher: 'AlphaDev Infotech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://alphadev.in',
    siteName: 'AlphaDev Infotech',
    title: 'AlphaDev Infotech | Enterprise Software Development',
    description:
      'Enterprise-grade software development, cloud solutions, and digital transformation for India\'s ambitious businesses.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'AlphaDev Infotech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlphaDev Infotech | Enterprise Software Development',
    description:
      'Enterprise-grade software development, cloud solutions, and digital transformation.',
    images: ['/logo.png'],
    creator: '@alphadev_in',
  },
  alternates: {
    canonical: 'https://alphadev.in',
  },
}

export const viewport: Viewport = {
  themeColor: '#D96CBB',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

// ——————————————————————————————————————————
// ROOT LAYOUT
// ——————————————————————————————————————————
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
