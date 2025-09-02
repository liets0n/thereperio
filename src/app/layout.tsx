import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Reperio - What is My IP Address? | Free IP Location Tool',
  description:
    'Discover your public IPv4 and IPv6 address instantly. Check your IP location, ISP info, and security details. Free, fast, and accurate IP lookup tool.',

  robots: 'index, follow',
  authors: [
    {
      name: 'Lietson Dos Santos',
      url: 'https://www.linkedin.com/in/lietsondosantos'
    }
  ],
  creator: 'Lietson Dos Santos',
  publisher: 'The Reperio',

  keywords: [
    'The Reperio',
    'thereperio',
    'what is my ip',
    'ip address lookup',
    'find my ip',
    'ip location',
    'ipv4 address',
    'ipv6 address',
    'public ip address',
    'ip geolocation',
    'internet protocol address',
    'ip checker',
    'network tools',
    'ip information'
  ],

  openGraph: {
    title: 'What is My IP Address? - The Reperio Free IP Tool',
    description:
      'Find your public IP address instantly. Get detailed information about your IPv4/IPv6, location, ISP, and network details with our free tool.',
    url: 'https://thereperio.com',
    siteName: 'The Reperio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://thereperio.com/og-thereperio.png',
        width: 1200,
        height: 630,
        alt: 'The Reperio - IP Address Lookup Tool',
        type: 'image/png'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    site: '@thereperio',
    creator: '@lietsondosantos',
    title: 'What is My IP Address? - The Reperio',
    description:
      'Discover your public IP address and location instantly with our free tool.',
    images: ['https://thereperio.com/og-thereperio.png']
  },

  alternates: {
    canonical: 'https://thereperio.com'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'The Reperio',
  alternateName: 'What is my IP',
  description:
    'Discover your public IPv4 and IPv6 address instantly. Check your IP location, ISP info, and security details.',
  url: 'https://thereperio.com',
  applicationCategory: 'NetworkingApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'IPv4 address detection',
    'IPv6 address detection',
    'IP geolocation',
    'ISP information',
    'Network details'
  ],
  author: {
    '@type': 'Person',
    name: 'Lietson Dos Santos'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
