'use client'

const clients = [
  { name: 'UK Bulk Traders', type: 'Private Institution', desc: 'Large-scale IT hardware and networking supply for trading operations.' },
  { name: 'Government Ministries', type: 'Central Government', desc: 'IT infrastructure setup, hardware supply, and software licensing for central government departments.' },
  { name: 'State PSUs', type: 'Public Sector', desc: 'End-to-end IT solutions for state public sector undertakings including servers, storage, and support.' },
  { name: 'Municipal Corporations', type: 'Local Government', desc: 'Smart city IT deployments, surveillance, and digital infrastructure for municipal bodies.' },
  { name: 'Educational Institutions', type: 'Education Sector', desc: 'Computer labs, networking, LMS solutions, and IT support for schools, colleges, and universities.' },
  { name: 'Healthcare Organizations', type: 'Healthcare', desc: 'Hospital IT infrastructure, HMIS software, biomedical IT, and data security solutions.' },
  { name: 'Defence Establishments', type: 'Defence', desc: 'Secure, compliant IT hardware and networking for defence and para-military setups.' },
  { name: 'Private Enterprises', type: 'Private Sector', desc: 'IT procurement, cloud migration, and managed services for SMEs and large corporates.' },
]

export default function ClientCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
      {clients.map((c, i) => (
        <div key={i}
          style={{ background: 'rgba(17,34,64,0.5)', border: '1px solid rgba(201,168,76,0.1)', padding: '32px', transition: 'border-color 0.3s' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.1)')}>
          <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', padding: '3px 10px', display: 'inline-block', textTransform: 'uppercase', marginBottom: 16 }}>{c.type}</div>
          <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 20, color: '#f8f9fc', marginBottom: 12 }}>{c.name}</h3>
          <p style={{ color: '#8892a4', fontSize: 14, lineHeight: 1.7 }}>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}
