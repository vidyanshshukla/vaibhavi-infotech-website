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
      <div style={{ paddingTop: 100 }}>
        <div style={{ background: '#060e1a', padding: '80px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 14px', marginBottom: 20 }}>Services</div>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#f8f9fc', maxWidth: 700 }}>Complete IT Portfolio for Every Need</h1>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #c9a84c, #e8c97a)', margin: '24px 0' }} />
            <p style={{ color: '#8892a4', fontSize: 18, maxWidth: 580, lineHeight: 1.8 }}>From hardware procurement to cloud migration — Vaibhavi Infotech is your single-window IT solution provider.</p>
          </div>
        </div>
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <ServicesGrid />
          </div>
        </section>
        <div style={{ background: '#060e1a', padding: '60px 0', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 36, color: '#f8f9fc', marginBottom: 20 }}>Need a Custom IT Solution?</h2>
          <p style={{ color: '#8892a4', fontSize: 16, marginBottom: 36 }}>Talk to our experts and get a tailored proposal within 48 hours.</p>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', letterSpacing: '0.08em', textTransform: 'uppercase', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>Request a Proposal</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
