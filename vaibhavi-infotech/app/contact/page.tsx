import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Vaibhavi Infotech for IT product quotes, project inquiries, and support. Serving government and private sectors across India.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 100 }}>
        <div style={{ background: '#060e1a', padding: '80px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'inline-block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', padding: '5px 14px', marginBottom: 20 }}>Contact</div>
            <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#f8f9fc', maxWidth: 700 }}>Let's Build Your IT Solution Together</h1>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #c9a84c, #e8c97a)', margin: '24px 0' }} />
            <p style={{ color: '#8892a4', fontSize: 18, maxWidth: 560, lineHeight: 1.8 }}>Get in touch for quotes, partnership inquiries, or technical consultations. We respond within 24 hours.</p>
          </div>
        </div>

        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60 }}>
            {/* Info */}
            <div>
              <h2 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 28, color: '#f8f9fc', marginBottom: 32 }}>Get In Touch</h2>
              {[
                { icon: '📧', label: 'Email', value: 'info@vaibhaviinfotech.com', sub: 'sales@vaibhaviinfotech.com' },
                { icon: '📞', label: 'Phone', value: '+91 98765 43210', sub: '+91 98765 43211' },
                { icon: '🕒', label: 'Business Hours', value: 'Monday – Saturday', sub: '9:00 AM – 6:00 PM IST' },
                { icon: '🌍', label: 'Coverage', value: 'Pan-India Operations', sub: 'Government & Private Sector' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>{item.label}</div>
                    <div style={{ color: '#f8f9fc', fontSize: 15, fontWeight: 500 }}>{item.value}</div>
                    <div style={{ color: '#8892a4', fontSize: 14 }}>{item.sub}</div>
                  </div>
                </div>
              ))}

              <div style={{ background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(201,168,76,0.15)', padding: '24px', marginTop: 12 }}>
                <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, color: '#c9a84c', marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>⚡ For Government Tenders</div>
                <p style={{ color: '#8892a4', fontSize: 13, lineHeight: 1.7 }}>We are registered on the GeM Portal and can support L1 bidding, GFR compliance documentation, and bulk procurement quotations.</p>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'rgba(17,34,64,0.5)', border: '1px solid rgba(201,168,76,0.15)', padding: '44px 40px' }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 24, color: '#f8f9fc', marginBottom: 32 }}>Send Us a Message</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                {['Full Name', 'Organization'].map((label) => (
                  <div key={label}>
                    <label style={{ display: 'block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
                    <input type="text" placeholder={label} style={{ width: '100%', background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(201,168,76,0.2)', color: '#f8f9fc', fontFamily: 'DM Sans,sans-serif', fontSize: 14, padding: '12px 16px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}
              </div>
              {[
                { label: 'Email Address', type: 'email', ph: 'your@email.com' },
                { label: 'Phone Number', type: 'tel', ph: '+91 XXXXX XXXXX' },
              ].map(({ label, type, ph }) => (
                <div key={label} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>{label}</label>
                  <input type={type} placeholder={ph} style={{ width: '100%', background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(201,168,76,0.2)', color: '#f8f9fc', fontFamily: 'DM Sans,sans-serif', fontSize: 14, padding: '12px 16px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Service Required</label>
                <select style={{ width: '100%', background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(201,168,76,0.2)', color: '#f8f9fc', fontFamily: 'DM Sans,sans-serif', fontSize: 14, padding: '12px 16px', outline: 'none', boxSizing: 'border-box' }}>
                  <option value="">Select a service...</option>
                  {['IT Hardware Supply', 'Software Licensing', 'Network Infrastructure', 'Cybersecurity', 'Cloud Solutions', 'AMC & IT Support', 'Printing & Imaging', 'Surveillance Systems', 'IT Consultancy', 'Other'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontFamily: 'Syne,sans-serif', fontSize: 11, fontWeight: 700, color: '#c9a84c', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Message / Requirements</label>
                <textarea rows={5} placeholder="Describe your IT requirements, quantities, or project scope..." style={{ width: '100%', background: 'rgba(10,22,40,0.8)', border: '1px solid rgba(201,168,76,0.2)', color: '#f8f9fc', fontFamily: 'DM Sans,sans-serif', fontSize: 14, padding: '12px 16px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button style={{ background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628', fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 14, padding: '16px 40px', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', width: '100%', clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
                Send Message →
              </button>
              <p style={{ color: '#8892a4', fontSize: 12, textAlign: 'center', marginTop: 16 }}>We'll respond within 24 business hours</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style>{`@media(max-width:768px){section>div>div{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
