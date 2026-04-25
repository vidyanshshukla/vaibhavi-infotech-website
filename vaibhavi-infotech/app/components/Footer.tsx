'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#060e1a', borderTop: '1px solid rgba(201,168,76,0.15)', padding: '60px 0 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 15, color: '#0a1628', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>VI</div>
              <div>
                <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 15, color: '#f8f9fc' }}>VAIBHAVI INFOTECH</div>
                <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 8, color: '#c9a84c', letterSpacing: '0.25em' }}>ENTERPRISE IT SOLUTIONS</div>
              </div>
            </div>
            <p style={{ color: '#8892a4', fontSize: 14, lineHeight: 1.7 }}>Trusted IT partner for government agencies and private institutions across India.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 13, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</h4>
            {['Home', 'About', 'Services', 'Clients', 'Contact'].map(item => (
              <Link key={item} href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                style={{ display: 'block', color: '#8892a4', fontSize: 14, marginBottom: 10 }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#c9a84c')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#8892a4')}>{item}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 13, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Services</h4>
            {['IT Hardware Supply', 'Software Licensing', 'Network Infrastructure', 'Cybersecurity', 'Cloud Solutions', 'IT Support & AMC'].map(s => (
              <div key={s} style={{ color: '#8892a4', fontSize: 14, marginBottom: 10 }}>{s}</div>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 13, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Contact</h4>
            <div style={{ color: '#8892a4', fontSize: 14, lineHeight: 2 }}>
              <div>📧 info@vaibhaviinfotech.com</div>
              <div>📞 +91 98765 43210</div>
              <div>🕒 Mon–Sat, 9:00 AM – 6:00 PM</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#8892a4', fontSize: 13 }}>© {new Date().getFullYear()} Vaibhavi Infotech. All rights reserved.</p>
          <p style={{ color: '#8892a4', fontSize: 13 }}>Serving Government & Private Sectors Across India</p>
        </div>
      </div>
    </footer>
  )
}
