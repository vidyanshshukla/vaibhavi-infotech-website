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
      <div style={{ paddingTop: 100 }}>
        <div style={{ background: '#060e1a', padding: '80px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 14px', marginBottom: 20 }}>Our Clients</div>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#f8f9fc', maxWidth: 700 }}>Trusted by Government & Industry Leaders</h1>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #c9a84c, #e8c97a)', margin: '24px 0' }} />
            <p style={{ color: '#8892a4', fontSize: 18, maxWidth: 580, lineHeight: 1.8 }}>From central government departments to private trading houses — our client portfolio spans the breadth of India's public and private sector.</p>
          </div>
        </div>

        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <ClientCards />
          </div>
        </section>

        <section style={{ padding: '80px 0', background: '#060e1a' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 40, color: '#f8f9fc', marginBottom: 52, textAlign: 'center' }}>What Our Clients Say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: 'rgba(17,34,64,0.7)', border: '1px solid rgba(201,168,76,0.15)', padding: '36px 32px' }}>
                  <div style={{ color: '#c9a84c', fontSize: 36, fontFamily: 'Syne,sans-serif', lineHeight: 1, marginBottom: 20 }}>"</div>
                  <p style={{ color: '#ccd6f6', fontSize: 15, lineHeight: 1.75, marginBottom: 28, fontStyle: 'italic' }}>{t.text}</p>
                  <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 20 }}>
                    <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, color: '#f8f9fc' }}>{t.author}</div>
                    <div style={{ color: '#c9a84c', fontSize: 12, marginTop: 4 }}>{t.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ padding: '60px 0', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 36, color: '#f8f9fc', marginBottom: 20 }}>Join Our Growing Client Family</h2>
          <p style={{ color: '#8892a4', fontSize: 16, marginBottom: 36 }}>Whether you're a government body or a private institution, we have the right IT solution for you.</p>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', letterSpacing: '0.08em', textTransform: 'uppercase', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>Start a Conversation</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
