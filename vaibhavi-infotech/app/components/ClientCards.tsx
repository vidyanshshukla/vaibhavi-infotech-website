'use client'

const clients = [
  { name: 'UK Bulk Traders', type: 'Private Institution', desc: 'Large-scale IT hardware and networking supply for trading operations.', icon: 'lucide:briefcase' },
  { name: 'Government Ministries', type: 'Central Government', desc: 'IT infrastructure setup, hardware supply, and software licensing for central government departments.', icon: 'lucide:landmark' },
  { name: 'State PSUs', type: 'Public Sector', desc: 'End-to-end IT solutions for state public sector undertakings including servers, storage, and support.', icon: 'lucide:building-2' },
  { name: 'Municipal Corporations', type: 'Local Government', desc: 'Smart city IT deployments, surveillance, and digital infrastructure for municipal bodies.', icon: 'lucide:building' },
  { name: 'Educational Institutions', type: 'Education Sector', desc: 'Computer labs, networking, LMS solutions, and IT support for schools, colleges, and universities.', icon: 'lucide:graduation-cap' },
  { name: 'Healthcare Organizations', type: 'Healthcare', desc: 'Hospital IT infrastructure, HMIS software, biomedical IT, and data security solutions.', icon: 'lucide:heart-pulse' },
  { name: 'Defence Establishments', type: 'Defence', desc: 'Secure, compliant IT hardware and networking for defence and para-military setups.', icon: 'lucide:shield-alert' },
  { name: 'Private Enterprises', type: 'Private Sector', desc: 'IT procurement, cloud migration, and managed services for SMEs and large corporates.', icon: 'lucide:factory' },
]

export default function ClientCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
      {clients.map((c, i) => (
        <div key={i} className="service-card" style={{
          background: 'var(--white)', borderRadius: 16, padding: 28,
          border: '1px solid rgba(217,206,178,0.2)', cursor: 'default',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, background: 'var(--cream)', borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${c.icon}" style="color:var(--ember);font-size:18px"></iconify-icon>` }} />
            </div>
            <span style={{
              fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--ember)',
              background: 'rgba(196,112,63,0.08)', border: '1px solid rgba(196,112,63,0.15)',
              padding: '4px 10px', borderRadius: 6, textTransform: 'uppercase',
            }}>{c.type}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bark)', marginBottom: 8, letterSpacing: '-0.01em' }}>{c.name}</h3>
          <p style={{ color: 'var(--warmgray)', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}
