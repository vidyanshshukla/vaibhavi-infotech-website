import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClientCards from '../components/ClientCards'

export const metadata: Metadata = {
  title: 'Our Clients',
  description: 'Vaibhavi Infotech serves government agencies, PSUs, and private institutions. Trusted IT partner across sectors in India.',
}

const testimonials = [
  { text: 'Vaibhavi Infotech delivered our entire server room setup on time and within budget. Their government procurement expertise is unmatched.', author: 'IT Head, State PSU', org: 'Public Sector Undertaking' },
  { text: "We've been working with Vaibhavi Infotech for 3 years now. Their support team is responsive and their pricing is always competitive.", author: 'Operations Manager', org: 'UK Bulk Traders' },
  { text: 'The AMC services have kept our systems running smoothly. Excellent response time and professional team.', author: 'Principal', org: 'Government College' },
]

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 80 }}>
        {/* Header */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid rgba(217,206,178,0.2)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: 'var(--ember)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Our Clients</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--bark)', maxWidth: 700, letterSpacing: '-0.02em' }}>
              Trusted by Government & Industry Leaders
            </h1>
            <p style={{ color: 'var(--warmgray)', fontSize: 17, maxWidth: 580, lineHeight: 1.8, marginTop: 20 }}>
              From central government departments to private trading houses — our client portfolio spans the breadth of India&apos;s public and private sector.
            </p>
          </div>
        </div>

        {/* Client Cards */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <ClientCards />
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: '80px 0', background: 'var(--bark)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--cream)', marginBottom: 52, textAlign: 'center' }}>What Our Clients Say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: 'var(--bark-mid)', border: '1px solid rgba(239,227,202,0.1)', borderRadius: 16, padding: '32px 28px' }}>
                  <div style={{ color: 'var(--ember-light)', fontSize: 36, fontFamily: 'var(--font-display)', lineHeight: 1, marginBottom: 16 }}>&ldquo;</div>
                  <p style={{ color: 'var(--cream)', fontSize: 14, lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic', opacity: 0.9 }}>{t.text}</p>
                  <div style={{ borderTop: '1px solid rgba(239,227,202,0.1)', paddingTop: 16 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--cream)' }}>{t.author}</div>
                    <div style={{ color: 'var(--ember-light)', fontSize: 12, marginTop: 4 }}>{t.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: '60px 0 80px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--bark)', marginBottom: 16 }}>Join Our Growing Client Family</h2>
          <p style={{ color: 'var(--warmgray)', fontSize: 15, marginBottom: 32 }}>Whether you&apos;re a government body or a private institution, we have the right IT solution for you.</p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--bark)', color: 'var(--cream)',
            padding: '14px 32px', borderRadius: 12, fontSize: 14, fontWeight: 600,
            transition: 'all 0.3s',
          }}>
            Start a Conversation
            <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:arrow-right" style="font-size:16px"></iconify-icon>' }} />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
