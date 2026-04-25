import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ServiceCards from './components/ServiceCards'

export const metadata: Metadata = {
  title: 'Vaibhavi Infotech | Enterprise IT Solutions for Government & Private Sector',
  description: 'Vaibhavi Infotech — trusted supplier of IT products and solutions for Indian government agencies, PSUs, and private institutions like UK Bulk Traders. Servers, networking, software, cybersecurity.',
}

const stats = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '50+', label: 'Government Clients' },
  { number: '12+', label: 'Years of Excellence' },
  { number: '99.9%', label: 'Uptime Guarantee' },
]

const clients = [
  'Government Agencies', 'PSU Organizations', 'UK Bulk Traders', 'Educational Institutions',
  'Healthcare Bodies', 'Defence Establishments', 'Municipal Corporations', 'Private Enterprises',
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: '15%', right: '10%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,195,247,0.08) 0%, transparent 70%)', zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 18px', marginBottom: 32 }}>
              🇮🇳 &nbsp; Trusted IT Partner · Government & Private Sector
            </div>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 76px)', color: '#f8f9fc', lineHeight: 1.08, marginBottom: 28 }}>
              Enterprise IT<br />
              <span style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% auto' }}>Solutions</span>
              &nbsp;Built<br />for Scale
            </h1>
            <p style={{ color: '#8892a4', fontSize: 18, lineHeight: 1.8, marginBottom: 44, maxWidth: 580 }}>
              Vaibhavi Infotech supplies cutting-edge IT products and managed solutions to government agencies, PSUs, and leading private institutions — including <strong style={{ color: '#ccd6f6' }}>UK Bulk Traders</strong>.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/services" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 36px', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>Explore Services</Link>
              <Link href="/contact" style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 14, padding: '16px 36px', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-block' }}>Request a Quote →</Link>
            </div>
          </div>

          {/* Floating stats */}
          <div className="hero-card" style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'rgba(17,34,64,0.85)', border: '1px solid rgba(201,168,76,0.2)', backdropFilter: 'blur(20px)', padding: '36px 40px', animation: 'float 4s ease-in-out infinite' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px 0', borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 32, color: '#c9a84c' }}>{s.number}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: '#8892a4', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes float { 0%,100%{transform:translateY(-50%)}50%{transform:translateY(calc(-50% - 12px))} }
          @media(max-width:900px){.hero-card{display:none!important}}
        `}</style>
      </section>

      {/* CLIENTS STRIP */}
      <div style={{ background: 'rgba(17,34,64,0.6)', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '20px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Trusted By:</span>
          {clients.map((c, i) => (
            <span key={i} style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: '#8892a4', whiteSpace: 'nowrap' }}>{c}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: '100px 0', background: '#060e1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 14px', marginBottom: 20 }}>Our Services</div>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', color: '#f8f9fc', maxWidth: 560 }}>Complete IT Services for Every Sector</h2>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #c9a84c, #e8c97a)', margin: '20px 0 0' }} />
          </div>
          <ServiceCards />
          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <Link href="/services" style={{ border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c', fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 13, padding: '14px 36px', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-block' }}>View All Services →</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 14px', marginBottom: 24 }}>Why Vaibhavi Infotech</div>
            <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#f8f9fc', marginBottom: 24 }}>Built for Government. Trusted by Industry.</h2>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #c9a84c, #e8c97a)', marginBottom: 28 }} />
            <p style={{ color: '#8892a4', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>With over 8 years of experience, Vaibhavi Infotech understands the unique compliance, procurement, and scale requirements of government and public sector IT. We're GeM-registered, MSME-certified, and fully equipped to handle bulk orders.</p>
            {['GeM Portal Registered Vendor', 'MSME Certified Organization', 'ISO-aligned Quality Processes', 'Pan-India Delivery & Support', 'Dedicated Account Managers'].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 20, height: 20, background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0, color: '#0a1628', fontWeight: 700 }}>✓</div>
                <span style={{ color: '#ccd6f6', fontSize: 15 }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(17,34,64,0.7)', border: '1px solid rgba(201,168,76,0.15)', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 40, color: '#c9a84c', lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: '#8892a4', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, rgba(17,34,64,0.9), rgba(10,22,40,0.95))', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', color: '#f8f9fc', marginBottom: 20 }}>Ready to Upgrade Your IT Infrastructure?</h2>
          <p style={{ color: '#8892a4', fontSize: 17, marginBottom: 44, maxWidth: 540, margin: '0 auto 44px' }}>Get a customized quote for your government department or private organization. Fast turnaround, competitive pricing.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', letterSpacing: '0.08em', textTransform: 'uppercase', clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}>Get a Free Quote</Link>
            <Link href="/clients" style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', fontFamily: 'Syne,sans-serif', fontWeight: 600, fontSize: 14, padding: '16px 36px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Our Clients →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
