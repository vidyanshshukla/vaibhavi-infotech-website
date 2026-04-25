import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesGrid from '../components/ServicesGrid'

export const metadata: Metadata = {
  title: 'IT Services',
  description: 'Vaibhavi Infotech offers hardware supply, software licensing, network infrastructure, cybersecurity, cloud solutions, and AMC for government and private sectors.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 80 }}>
        {/* Header */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid rgba(217,206,178,0.2)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: 'var(--ember)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Services</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--bark)', maxWidth: 700, letterSpacing: '-0.02em' }}>
              Complete IT Portfolio for Every Need
            </h1>
            <p style={{ color: 'var(--warmgray)', fontSize: 17, maxWidth: 580, lineHeight: 1.8, marginTop: 20 }}>
              From hardware procurement to cloud migration — Vaibhavi Infotech is your single-window IT solution provider.
            </p>
          </div>
        </div>

        {/* Grid */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <ServicesGrid />
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: '60px 0 80px', textAlign: 'center', borderTop: '1px solid rgba(217,206,178,0.2)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--bark)', marginBottom: 16 }}>Need a Custom IT Solution?</h2>
          <p style={{ color: 'var(--warmgray)', fontSize: 15, marginBottom: 32 }}>Talk to our experts and get a tailored proposal within 48 hours.</p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--bark)', color: 'var(--cream)',
            padding: '14px 32px', borderRadius: 12, fontSize: 14, fontWeight: 600,
            transition: 'all 0.3s',
          }}>
            Request a Proposal
            <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:arrow-right" style="font-size:16px"></iconify-icon>' }} />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
