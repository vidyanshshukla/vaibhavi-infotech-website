'use client'

const services = [
  { icon: '🖥️', title: 'IT Hardware Supply', desc: 'Servers, workstations, laptops, peripherals from top OEMs. GeM-listed supplier for government procurement.' },
  { icon: '📦', title: 'Software Licensing', desc: 'Authorized reseller for Microsoft, Adobe, Autodesk & more. Bulk licensing with government pricing.' },
  { icon: '🌐', title: 'Network Infrastructure', desc: 'LAN/WAN setup, structured cabling, routers, switches, and wireless solutions for large campuses.' },
  { icon: '🔒', title: 'Cybersecurity', desc: 'Endpoint protection, firewall solutions, SOC services, and compliance audits for data-sensitive institutions.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Migration, hosting, and management on AWS, Azure, and NIC Cloud for government-compliant deployments.' },
  { icon: '🔧', title: 'AMC & IT Support', desc: 'Annual maintenance contracts, on-site support, and 24/7 helpdesk for uninterrupted operations.' },
]

export default function ServiceCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
      {services.map((s, i) => (
        <div key={i}
          style={{ background: 'rgba(17,34,64,0.5)', border: '1px solid rgba(201,168,76,0.1)', padding: '36px 32px', transition: 'border-color 0.3s, transform 0.3s', cursor: 'default' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.4)'; el.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.1)'; el.style.transform = 'translateY(0)'; }}>
          <div style={{ fontSize: 36, marginBottom: 20 }}>{s.icon}</div>
          <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 20, color: '#f8f9fc', marginBottom: 12 }}>{s.title}</h3>
          <p style={{ color: '#8892a4', fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
