'use client'

const services = [
  {
    icon: 'lucide:package-search',
    title: 'IT Procurement',
    desc: 'Desktops, laptops, servers, networking gear, peripherals, and software licenses from authorized OEM partners at competitive government rates.',
    tags: ['Desktops', 'Servers', 'Networking'],
  },
  {
    icon: 'lucide:settings-2',
    title: 'Infrastructure Setup',
    desc: 'Complete IT infrastructure design, deployment, and configuration for offices, data centers, and campus networks across India.',
    tags: ['Data Centers', 'LAN/WAN', 'CCTV'],
  },
  {
    icon: 'lucide:headphones',
    title: 'Technical Support',
    desc: 'Dedicated on-site and remote technical support with SLA-backed response times. Annual maintenance contracts for all equipment.',
    tags: ['AMC', 'On-Site', 'Remote'],
  },
  {
    icon: 'lucide:file-badge-2',
    title: 'GeM & Tender Support',
    desc: 'End-to-end Government e-Marketplace procurement support. We help you navigate GeM bidding, tender documentation, and compliance.',
    tags: ['GeM Portal', 'Tenders'],
  },
  {
    icon: 'lucide:shield-half',
    title: 'Cybersecurity Solutions',
    desc: 'Firewalls, endpoint protection, network security audits, and compliance solutions for organizations handling sensitive data.',
    tags: ['Firewalls', 'Endpoint'],
  },
  {
    icon: 'lucide:cloud-cog',
    title: 'Software & Cloud',
    desc: 'Licensed software procurement, cloud migration support, and SaaS deployment for enterprises modernizing their IT stack.',
    tags: ['Licensing', 'Cloud'],
  },
]

export default function ServiceCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
      {services.map((s, i) => (
        <div key={i} className="service-card" style={{
          background: 'var(--white)', borderRadius: 16, padding: 28,
          border: '1px solid rgba(217,206,178,0.2)', cursor: 'default',
        }}>
          <div className="service-icon" style={{
            width: 48, height: 48, background: 'var(--cream)', borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
          }}>
            <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${s.icon}" style="color:var(--ember);font-size:20px"></iconify-icon>` }} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bark)', marginBottom: 8, letterSpacing: '-0.01em' }}>{s.title}</h3>
          <p style={{ color: 'var(--warmgray)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {s.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 12, fontWeight: 500, background: 'rgba(239,227,202,0.8)',
                color: 'var(--warmgray)', padding: '4px 10px', borderRadius: 6,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
