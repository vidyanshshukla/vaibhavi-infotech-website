import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vaibhaviinfotech.com'),
  title: {
    default: 'Vaibhavi Infotech | IT Solutions for Government & Private Sector',
    template: '%s | Vaibhavi Infotech'
  },
  description: 'Vaibhavi Infotech delivers enterprise-grade IT products and solutions to government agencies, PSUs, and private institutions including UK Bulk Traders. Trusted IT partner across India.',
  keywords: ['Vaibhavi Infotech', 'IT solutions India', 'government IT supplier', 'IT products PSU', 'enterprise software India'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vaibhaviinfotech.com',
    siteName: 'Vaibhavi Infotech',
    title: 'Vaibhavi Infotech | Enterprise IT Solutions',
    description: 'Trusted IT partner for government agencies and private institutions.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vaibhavi Infotech",
          "url": "https://vaibhaviinfotech.com",
          "description": "Enterprise IT products and solutions for government agencies and private institutions",
        })}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
