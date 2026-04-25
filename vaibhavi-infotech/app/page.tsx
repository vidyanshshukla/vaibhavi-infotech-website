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

const brands = [
  'HP Enterprise', 'Dell Technologies', 'Lenovo', 'Cisco Systems', 'Microsoft',
  'Acer', 'APC by Schneider', 'Epson', 'Canon', 'D-Link',
]

const sectors = [
  { icon: 'lucide:landmark', title: 'Central Govt', desc: 'Ministries, PSUs, and central institutions' },
  { icon: 'lucide:building-2', title: 'State Govt', desc: 'State departments, police, and municipalities' },
  { icon: 'lucide:graduation-cap', title: 'Education', desc: 'Universities, IITs, schools, and EdTech labs' },
  { icon: 'lucide:heart-pulse', title: 'Healthcare', desc: 'Hospitals, AIIMS, PHCs, and health IT' },
  { icon: 'lucide:factory', title: 'Private Enterprise', desc: 'Corporates, SMEs, and startups' },
  { icon: 'lucide:shield-alert', title: 'Defence & Security', desc: 'Armed forces and para-military IT needs' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{ paddingTop: 112, paddingBottom: 64, position: 'relative', overflow: 'hidden' }}>
        {/* Background decorations */}
        <div style={{ position: 'absolute', top: 80, right: 0, width: 384, height: 384, background: 'var(--cream)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 320, height: 320, background: 'rgba(196,112,63,0.05)', borderRadius: '50%', filter: 'blur(60px)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="responsive-grid-2">
            {/* Left Content */}
            <div>
              <div className="fade-up fade-up-d1" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(239,227,202,0.8)', border: '1px solid rgba(217,206,178,0.4)',
                borderRadius: 999, padding: '6px 16px', marginBottom: 24,
              }}>
                <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--warmgray)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>GeM Registered & ISO 9001:2015 Certified</span>
              </div>

              <h1 className="fade-up fade-up-d2" style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.02em',
                color: 'var(--bark)', lineHeight: 1.1, marginBottom: 24,
              }}>
                India&apos;s Trusted{' '}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ position: 'relative', zIndex: 1 }}>IT Partner</span>
                  <span style={{ position: 'absolute', bottom: 4, left: 0, right: 0, height: 12, background: 'rgba(196,112,63,0.2)', borderRadius: 4, zIndex: 0 }} />
                </span>
                {' '}for Government & Enterprise
              </h1>

              <p className="fade-up fade-up-d3" style={{ color: 'var(--warmgray)', fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 540 }}>
                Empowering public institutions and private enterprises across India with end-to-end IT procurement, infrastructure solutions, and dedicated support since 2008.
              </p>

              <div className="fade-up fade-up-d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 40 }}>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'var(--bark)', color: 'var(--cream)',
                  padding: '14px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600,
                  transition: 'all 0.3s',
                }}>
                  Get a Quote Today
                  <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:arrow-right" style="font-size:18px"></iconify-icon>' }} />
                </Link>
                <Link href="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'var(--cream)', border: '1px solid rgba(217,206,178,0.5)',
                  color: 'var(--bark)', padding: '14px 28px', borderRadius: 12,
                  fontSize: 14, fontWeight: 600, transition: 'all 0.3s',
                }}>
                  <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:grid-3x3" style="color:var(--ember);font-size:18px"></iconify-icon>' }} />
                  Browse Catalog
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="fade-up fade-up-d5" style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                {[
                  { icon: 'lucide:shield-check', label: 'GeM Verified' },
                  { icon: 'lucide:award', label: 'ISO Certified' },
                  { icon: 'lucide:indian-rupee', label: 'MSME Registered' },
                ].map(b => (
                  <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 32, height: 32, background: 'var(--cream)', borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid rgba(217,206,178,0.3)',
                    }}>
                      <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${b.icon}" style="color:var(--ember);font-size:16px"></iconify-icon>` }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--warmgray)' }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="fade-up fade-up-d3" style={{ position: 'relative' }}>
              <div style={{
                background: 'var(--bark)', borderRadius: 24, padding: 40,
                color: 'var(--cream)', position: 'relative', overflow: 'hidden',
              }}>
                {/* Pattern circles */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, border: '1px solid var(--cream)', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', top: 40, right: 40, width: 96, height: 96, border: '1px solid var(--cream)', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: 128, height: 128, border: '1px solid var(--cream)', borderRadius: '50%' }} />
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
                    <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:trending-up" style="color:var(--ember-light);font-size:20px"></iconify-icon>' }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(239,227,202,0.6)' }}>Performance Overview</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                    {stats.map((s, i) => (
                      <div key={i}>
                        <div style={{
                          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, letterSpacing: '-0.02em',
                          color: i === 2 ? 'var(--ember-light)' : 'var(--cream)', marginBottom: 4,
                        }}>{s.number}</div>
                        <div style={{ fontSize: 13, color: 'rgba(239,227,202,0.5)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid rgba(239,227,202,0.1)', paddingTop: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex' }}>
                        {['MH', 'DL', 'KA', 'TN'].map((s, i) => (
                          <div key={s} style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: i === 1 ? 'var(--ember)' : 'var(--bark-light)',
                            border: '2px solid var(--bark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 10, fontWeight: 700, color: 'var(--cream)', marginLeft: i > 0 ? -8 : 0,
                          }}>{s}</div>
                        ))}
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%', background: 'var(--bark-light)',
                          border: '2px solid var(--bark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 10, fontWeight: 700, color: 'rgba(239,227,202,0.6)', marginLeft: -8,
                        }}>+24</div>
                      </div>
                      <span style={{ fontSize: 12, color: 'rgba(239,227,202,0.4)' }}>Pan-India Presence</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="scale-in" style={{
                position: 'absolute', bottom: -16, left: -16,
                background: 'var(--white)', borderRadius: 16,
                boxShadow: '0 10px 25px rgba(26,22,17,0.1)', padding: '12px 20px',
                border: '1px solid rgba(217,206,178,0.2)', animationDelay: '0.8s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, background: '#f0fdf4', borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:check-circle-2" style="color:#16a34a;font-size:18px"></iconify-icon>' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--bark)' }}>99.7% On-Time Delivery</div>
                    <div style={{ fontSize: 12, color: 'var(--warmgray)' }}>Across all government orders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE - BRANDS */}
      <section style={{
        padding: '16px 0', borderTop: '1px solid rgba(217,206,178,0.2)',
        borderBottom: '1px solid rgba(217,206,178,0.2)', background: 'rgba(239,227,202,0.4)',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', gap: 48, whiteSpace: 'nowrap' }}>
            {[...brands, ...brands].map((b, i) => (
              <span key={i}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(138,126,111,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{b}</span>
                <span style={{ color: 'rgba(138,126,111,0.2)', margin: '0 24px' }}>●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 0 100px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: 520, marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: 'var(--ember)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 36px)', letterSpacing: '-0.02em', color: 'var(--bark)', marginBottom: 16 }}>
              End-to-End IT Solutions for Every Institution
            </h2>
            <p style={{ color: 'var(--warmgray)', fontSize: 15, lineHeight: 1.7 }}>
              From procurement to deployment to ongoing support — we handle the complete lifecycle of your IT infrastructure needs with government-grade compliance.
            </p>
          </div>
          <ServiceCards />
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(217,206,178,0.5)', color: 'var(--bark)',
              padding: '12px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600,
              transition: 'all 0.3s',
            }}>View All Services →</Link>
          </div>
        </div>
      </section>

      {/* WHY US / TRUST */}
      <section style={{ padding: '80px 0 100px', background: 'var(--bark)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        {/* Background circles */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: 80, left: 80, width: 256, height: 256, border: '1px solid var(--cream)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: 80, right: 80, width: 192, height: 192, border: '1px solid var(--cream)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 384, height: 384, border: '1px solid var(--cream)', borderRadius: '50%' }} />
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="responsive-grid-2">
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 2, background: 'var(--ember-light)' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember-light)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Why Vaibhavi Infotech</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 36px)', letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 24 }}>
                Built for Compliance. Driven by Trust.
              </h2>
              <p style={{ color: 'rgba(239,227,202,0.5)', fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
                We understand the unique procurement challenges of Indian government and enterprise organizations. Our processes are designed to meet the highest standards of transparency, compliance, and reliability.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: 'lucide:clock-3', title: 'Rapid Delivery & Deployment', desc: 'PAN-India logistics with warehouse facilities in major metros. Average delivery within 5-7 business days.' },
                  { icon: 'lucide:file-check-2', title: '100% Compliance Guarantee', desc: 'All documentation, invoices, and deliverables meet government audit standards. GST compliant with proper e-way bills.' },
                  { icon: 'lucide:handshake', title: 'Dedicated Account Managers', desc: 'Every institutional client gets a single point of contact for procurement, support, and escalations.' },
                ].map(f => (
                  <div key={f.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12, background: 'var(--bark-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      border: '1px solid rgba(239,227,202,0.1)',
                    }}>
                      <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${f.icon}" style="color:var(--ember-light);font-size:16px"></iconify-icon>` }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, fontSize: 14, color: 'var(--cream)', marginBottom: 4 }}>{f.title}</h4>
                      <p style={{ fontSize: 13, color: 'rgba(239,227,202,0.4)', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Sectors Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {sectors.map(s => (
                <div key={s.title} className="sector-card" style={{
                  background: 'var(--bark-mid)', borderRadius: 16, padding: 24,
                  border: '1px solid rgba(239,227,202,0.05)', transition: 'all 0.3s',
                }}>
                  <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${s.icon}" style="color:var(--ember-light);font-size:24px;display:block;margin-bottom:16px"></iconify-icon>` }} />
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--cream)', marginBottom: 4 }}>{s.title}</h4>
                  <p style={{ fontSize: 12, color: 'rgba(239,227,202,0.4)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--bark)', marginBottom: 20 }}>Ready to Upgrade Your IT Infrastructure?</h2>
          <p style={{ color: 'var(--warmgray)', fontSize: 16, marginBottom: 36, maxWidth: 540, margin: '0 auto 36px' }}>Get a customized quote for your government department or private organization. Fast turnaround, competitive pricing.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--bark)', color: 'var(--cream)',
              padding: '14px 32px', borderRadius: 12, fontSize: 14, fontWeight: 600,
              transition: 'all 0.3s',
            }}>
              Get a Free Quote
              <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:arrow-right" style="font-size:16px"></iconify-icon>' }} />
            </Link>
            <Link href="/clients" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(217,206,178,0.5)', color: 'var(--bark)',
              padding: '14px 28px', borderRadius: 12, fontSize: 14, fontWeight: 600,
              transition: 'all 0.3s',
            }}>Our Clients →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
