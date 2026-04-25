import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vaibhavi Infotech — 12+ years of delivering IT products and services to government agencies, PSUs, and private institutions across India.',
}

export default function AboutPage() {
  const team = [
    { name: 'Vivek Shukla', role: 'Founder & CEO', exp: '15+ years in enterprise IT' },
    { name: 'Priya Mehta', role: 'Head of Operations', exp: 'Government procurement expert' },
    { name: 'Rajesh Kumar', role: 'Technical Director', exp: 'Network & infrastructure specialist' },
    { name: 'Ankita Singh', role: 'Client Relations', exp: 'PSU & defence liaison' },
  ]
  const milestones = [
    { year: '2014', event: 'Founded in India with a focus on government IT supply' },
    { year: '2016', event: 'GeM portal registration & first PSU contract' },
    { year: '2020', event: 'Expanded to cybersecurity & cloud services' },
    { year: '2022', event: 'Partnered with UK Bulk Traders & private sector clients' },
    { year: '2024', event: 'Pan-India presence — 200+ projects delivered' },
  ]

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 80 }}>
        {/* Header */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid rgba(217,206,178,0.2)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: 'var(--ember)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>About Us</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--bark)', maxWidth: 700, letterSpacing: '-0.02em' }}>
              12+ Years Powering India&apos;s Digital Infrastructure
            </h1>
            <p style={{ color: 'var(--warmgray)', fontSize: 17, maxWidth: 620, lineHeight: 1.8, marginTop: 20 }}>
              From a small IT supplier to a trusted technology partner for hundreds of government and private organizations — this is the Vaibhavi Infotech story.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="responsive-grid-2">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--bark)', marginBottom: 20 }}>Our Mission</h2>
              <p style={{ color: 'var(--warmgray)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
                To democratize access to world-class IT products and services across India — making enterprise-grade technology available to every government department, institution, and growing business, at fair and transparent pricing.
              </p>
              <p style={{ color: 'var(--warmgray)', fontSize: 15, lineHeight: 1.8 }}>
                We believe that strong IT infrastructure is the backbone of a modern, efficient India. Vaibhavi Infotech exists to build that backbone — one project at a time.
              </p>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid rgba(217,206,178,0.2)', borderRadius: 16, padding: 36 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--ember)', marginBottom: 24 }}>Our Values</h3>
              {['Integrity in every transaction', 'Government-grade compliance standards', 'Speed & reliability of delivery', 'Long-term client relationships', 'Innovation in solutions offered'].map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--ember)', fontWeight: 700, marginTop: 2, fontSize: 14 }}>0{i + 1}</span>
                  <span style={{ color: 'var(--bark)', fontSize: 15 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '80px 0', background: 'var(--bark)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--cream)', marginBottom: 52, textAlign: 'center' }}>Our Journey</h2>
            <div style={{ maxWidth: 700, margin: '0 auto' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 36, alignItems: 'flex-start' }}>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--ember-light)' }}>{m.year}</div>
                    {i < milestones.length - 1 && <div style={{ width: 2, height: 48, background: 'rgba(212,136,79,0.2)', margin: '8px auto 0' }} />}
                  </div>
                  <div style={{ background: 'var(--bark-mid)', border: '1px solid rgba(239,227,202,0.1)', borderRadius: 12, padding: '16px 20px', flex: 1 }}>
                    <p style={{ color: 'var(--cream)', fontSize: 15 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: 'var(--bark)', marginBottom: 52, textAlign: 'center' }}>Leadership Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {team.map((t, i) => (
                <div key={i} style={{ background: 'var(--white)', border: '1px solid rgba(217,206,178,0.2)', borderRadius: 16, padding: '32px 28px', textAlign: 'center' }}>
                  <div style={{
                    width: 70, height: 70, background: `linear-gradient(135deg, var(--ember), var(--bark-light))`,
                    borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--cream)',
                  }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bark)', marginBottom: 6 }}>{t.name}</h3>
                  <div style={{ color: 'var(--ember)', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 10 }}>{t.role}</div>
                  <p style={{ color: 'var(--warmgray)', fontSize: 13 }}>{t.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
