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
      <div style={{ paddingTop: 100 }}>
        {/* Header */}
        <div style={{ background: '#060e1a', padding: '80px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 14px', marginBottom: 20 }}>About Us</div>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#f8f9fc', maxWidth: 700 }}>
              12+ Years Powering India's Digital Infrastructure
            </h1>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #c9a84c, #e8c97a)', margin: '24px 0' }} />
            <p style={{ color: '#8892a4', fontSize: 18, maxWidth: 620, lineHeight: 1.8 }}>
              From a small IT supplier to a trusted technology partner for hundreds of government and private organizations — this is the Vaibhavi Infotech story.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 40, color: '#f8f9fc', marginBottom: 20 }}>Our Mission</h2>
              <p style={{ color: '#8892a4', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                To democratize access to world-class IT products and services across India — making enterprise-grade technology available to every government department, institution, and growing business, at fair and transparent pricing.
              </p>
              <p style={{ color: '#8892a4', fontSize: 16, lineHeight: 1.8 }}>
                We believe that strong IT infrastructure is the backbone of a modern, efficient India. Vaibhavi Infotech exists to build that backbone — one project at a time.
              </p>
            </div>
            <div style={{ background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(201,168,76,0.15)', padding: '40px' }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 24, color: '#c9a84c', marginBottom: 24 }}>Our Values</h3>
              {['Integrity in every transaction', 'Government-grade compliance standards', 'Speed & reliability of delivery', 'Long-term client relationships', 'Innovation in solutions offered'].map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'flex-start' }}>
                  <span style={{ color: '#c9a84c', fontWeight: 700, marginTop: 2 }}>0{i + 1}</span>
                  <span style={{ color: '#ccd6f6', fontSize: 15 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Timeline */}
        <section style={{ padding: '80px 0', background: '#060e1a' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 40, color: '#f8f9fc', marginBottom: 52, textAlign: 'center' }}>Our Journey</h2>
            <div style={{ maxWidth: 700, margin: '0 auto' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 32, marginBottom: 36, alignItems: 'flex-start' }}>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 20, color: '#c9a84c' }}>{m.year}</div>
                    {i < milestones.length - 1 && <div style={{ width: 2, height: 48, background: 'rgba(201,168,76,0.2)', margin: '8px auto 0' }} />}
                  </div>
                  <div style={{ background: 'rgba(17,34,64,0.5)', border: '1px solid rgba(201,168,76,0.1)', padding: '16px 20px', flex: 1 }}>
                    <p style={{ color: '#ccd6f6', fontSize: 15 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 40, color: '#f8f9fc', marginBottom: 52, textAlign: 'center' }}>Leadership Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {team.map((t, i) => (
                <div key={i} style={{ background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(201,168,76,0.1)', padding: '32px 28px', textAlign: 'center' }}>
                  <div style={{ width: 70, height: 70, background: 'linear-gradient(135deg, #c9a84c, #1d3461)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 24, color: '#f8f9fc' }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 18, color: '#f8f9fc', marginBottom: 6 }}>{t.name}</h3>
                  <div style={{ color: '#c9a84c', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', marginBottom: 10 }}>{t.role}</div>
                  <p style={{ color: '#8892a4', fontSize: 13 }}>{t.exp}</p>
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
