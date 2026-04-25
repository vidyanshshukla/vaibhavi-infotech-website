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
      <div style={{ paddingTop: 80 }}>
        {/* Header */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid rgba(217,206,178,0.2)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: 'var(--ember)' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--bark)', maxWidth: 700, letterSpacing: '-0.02em' }}>
              Let&apos;s Build Your IT Solution Together
            </h1>
            <p style={{ color: 'var(--warmgray)', fontSize: 17, maxWidth: 560, lineHeight: 1.8, marginTop: 20 }}>
              Get in touch for quotes, partnership inquiries, or technical consultations. We respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Form + Info */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 48 }} className="responsive-grid-2">
            {/* Form */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 2, background: 'var(--ember)' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Get In Touch</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--bark)', marginBottom: 12 }}>Request a Quotation</h2>
              <p style={{ color: 'var(--warmgray)', fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
                Tell us about your requirements and our team will get back to you within 24 hours with a detailed quotation.
              </p>

              <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="responsive-grid-2">
                  {[
                    { label: 'Full Name *', type: 'text', ph: 'Rajesh Kumar' },
                    { label: 'Organization *', type: 'text', ph: 'Ministry of Electronics & IT' },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--bark)', marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} style={{
                        width: '100%', background: 'var(--white)', border: '1px solid rgba(217,206,178,0.3)',
                        borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'var(--bark)',
                        outline: 'none', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }} />
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="responsive-grid-2">
                  {[
                    { label: 'Email Address *', type: 'email', ph: 'rajesh@gov.in' },
                    { label: 'Phone Number *', type: 'tel', ph: '+91 98765 43210' },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--bark)', marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} style={{
                        width: '100%', background: 'var(--white)', border: '1px solid rgba(217,206,178,0.3)',
                        borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'var(--bark)',
                        outline: 'none', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }} />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--bark)', marginBottom: 6 }}>Service Required</label>
                  <select style={{
                    width: '100%', background: 'var(--white)', border: '1px solid rgba(217,206,178,0.3)',
                    borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'var(--warmgray)',
                    outline: 'none', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
                  }}>
                    <option value="">Select a service...</option>
                    {['IT Hardware Supply', 'Software Licensing', 'Network Infrastructure', 'Cybersecurity', 'Cloud Solutions', 'AMC & IT Support', 'Printing & Imaging', 'Surveillance Systems', 'IT Consultancy', 'Other'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--bark)', marginBottom: 6 }}>Requirement Details</label>
                  <textarea rows={4} placeholder="Describe your IT requirements (e.g., 200 HP desktops with i5 processors, 8GB RAM, Windows 11 Pro license...)" style={{
                    width: '100%', background: 'var(--white)', border: '1px solid rgba(217,206,178,0.3)',
                    borderRadius: 12, padding: '12px 16px', fontSize: 14, color: 'var(--bark)',
                    outline: 'none', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
                    resize: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
                  }} />
                </div>

                <button type="submit" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'var(--bark)', color: 'var(--cream)',
                  padding: '14px 32px', borderRadius: 12, fontSize: 14, fontWeight: 600,
                  border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)',
                  transition: 'all 0.3s',
                }}>
                  Submit Inquiry
                  <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:send" style="font-size:16px"></iconify-icon>' }} />
                </button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div>
              {/* Quick Contact */}
              <div style={{ background: 'rgba(239,227,202,0.6)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,206,178,0.2)', marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bark)', marginBottom: 24 }}>Quick Contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { icon: 'lucide:map-pin', label: 'Head Office', lines: ['1st Floor, Trade Centre,', 'Bandra Kurla Complex,', 'Mumbai, Maharashtra 400051'] },
                    { icon: 'lucide:phone', label: 'Phone', lines: ['+91 98765 43210', '+91 98765 43211'] },
                    { icon: 'lucide:mail', label: 'Email', lines: ['info@vaibhaviinfotech.com', 'sales@vaibhaviinfotech.com'] },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{
                        width: 36, height: 36, background: 'var(--white)', borderRadius: 8,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        border: '1px solid rgba(217,206,178,0.2)',
                      }}>
                        <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${item.icon}" style="color:var(--ember);font-size:14px"></iconify-icon>` }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--bark)', marginBottom: 2 }}>{item.label}</div>
                        {item.lines.map((l, i) => (
                          <div key={i} style={{ fontSize: 12, color: 'var(--warmgray)', lineHeight: 1.6 }}>{l}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div style={{ background: 'rgba(239,227,202,0.6)', borderRadius: 16, padding: 32, border: '1px solid rgba(217,206,178,0.2)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bark)', marginBottom: 16 }}>Business Hours</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 6:30 PM', isClosed: false },
                    { day: 'Saturday', time: '10:00 AM – 4:00 PM', isClosed: false },
                    { day: 'Sunday', time: 'Closed', isClosed: true },
                  ].map(h => (
                    <div key={h.day} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 12, color: 'var(--warmgray)' }}>{h.day}</span>
                      <span style={{ fontSize: 12, fontWeight: h.isClosed ? 500 : 600, color: h.isClosed ? 'rgba(138,126,111,0.6)' : 'var(--bark)' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(217,206,178,0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:headset" style="color:var(--ember);font-size:14px"></iconify-icon>' }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--bark)' }}>24/7 Support Helpline</span>
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--warmgray)' }}>For AMC clients: 1800-XXX-XXXX (Toll Free)</span>
                </div>
              </div>

              {/* Government Tender Box */}
              <div style={{ background: 'var(--bark)', borderRadius: 16, padding: 24, marginTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:zap" style="color:var(--ember-light);font-size:16px"></iconify-icon>' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--ember-light)' }}>For Government Tenders</span>
                </div>
                <p style={{ color: 'rgba(239,227,202,0.5)', fontSize: 13, lineHeight: 1.7 }}>We are registered on the GeM Portal and can support L1 bidding, GFR compliance documentation, and bulk procurement quotations.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
