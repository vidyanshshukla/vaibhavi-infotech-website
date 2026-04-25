'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bark)', color: 'var(--cream)', padding: '48px 0 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 48 }} className="responsive-grid-2">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, background: 'var(--bark-light)', borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(239,227,202,0.1)',
              }}>
                <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:cpu" style="color:var(--cream);font-size:16px"></iconify-icon>' }} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--cream)' }}>Vaibhavi</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ember-light)' }}> Infotech</span>
              </div>
            </div>
            <p style={{ color: 'rgba(239,227,202,0.4)', fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
              Trusted IT solutions provider for government institutions and private enterprises across India since 2008.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['linkedin', 'twitter', 'mail'].map(icon => (
                <a key={icon} href="#" style={{
                  width: 32, height: 32, borderRadius: 8, background: 'var(--bark-light)',
                  border: '1px solid rgba(239,227,202,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.2s',
                }}>
                  <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="lucide:${icon}" style="color:rgba(239,227,202,0.5);font-size:14px"></iconify-icon>` }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(239,227,202,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Clients', href: '/clients' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <Link key={item.href} href={item.href} style={{ color: 'rgba(239,227,202,0.4)', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--ember-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,227,202,0.4)')}
                >{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(239,227,202,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['IT Hardware Supply', 'Software Licensing', 'Network Infrastructure', 'Cybersecurity', 'Cloud Solutions', 'IT Support & AMC'].map(s => (
                <span key={s} style={{ color: 'rgba(239,227,202,0.4)', fontSize: 14 }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(239,227,202,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Certifications</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['ISO 9001:2015', 'GeM Registered Seller', 'MSME Udyam Certified', 'GST Registered'].map(cert => (
                <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:badge-check" style="color:var(--ember-light);font-size:14px"></iconify-icon>' }} />
                  <span style={{ color: 'rgba(239,227,202,0.4)', fontSize: 12 }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(239,227,202,0.1)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ color: 'rgba(239,227,202,0.3)', fontSize: 12 }}>© {new Date().getFullYear()} Vaibhavi Infotech Pvt. Ltd. All rights reserved.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(239,227,202,0.3)', fontSize: 12, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(239,227,202,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,227,202,0.3)')}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .responsive-grid-2 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer .responsive-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
