'use client'

const services = [
  { icon: '🖥️', title: 'IT Hardware Supply', cat: 'Hardware', points: ['Servers & storage systems', 'Workstations & laptops', 'Peripherals & accessories', 'OEM authorized distributor', 'GeM-listed procurement'] },
  { icon: '📦', title: 'Software Licensing', cat: 'Software', points: ['Microsoft 365 & Azure', 'Adobe Creative Suite', 'Autodesk products', 'Antivirus & endpoint tools', 'Volume licensing specialist'] },
  { icon: '🌐', title: 'Network Infrastructure', cat: 'Networking', points: ['LAN / WAN design & setup', 'Structured cabling', 'Cisco, D-Link, TP-Link', 'Wi-Fi campus deployments', 'Firewall installation'] },
  { icon: '🔒', title: 'Cybersecurity Solutions', cat: 'Security', points: ['Endpoint protection', 'Firewall & UTM solutions', 'Vulnerability assessments', 'SOC-as-a-service', 'Compliance audits'] },
  { icon: '☁️', title: 'Cloud Solutions', cat: 'Cloud', points: ['AWS & Azure migration', 'NIC MeghRaj Cloud (Govt)', 'Hybrid cloud architecture', 'Backup & DR solutions', 'Cloud cost optimization'] },
  { icon: '🔧', title: 'AMC & IT Support', cat: 'Support', points: ['Annual maintenance contracts', 'On-site & remote support', '24/7 helpdesk', 'SLA-based response', 'Preventive maintenance'] },
  { icon: '🖨️', title: 'Printing & Imaging', cat: 'Hardware', points: ['Laser & inkjet printers', 'MFP & photocopiers', 'Plotters for engineering', 'Toner & consumables', 'Repair & service'] },
  { icon: '📡', title: 'Surveillance Systems', cat: 'Security', points: ['CCTV & IP cameras', 'NVR/DVR systems', 'Access control', 'Video analytics', 'Government campus security'] },
  { icon: '💻', title: 'IT Consultancy', cat: 'Consulting', points: ['IT audit & gap analysis', 'Digital transformation', 'RFP & tender support', 'Technology roadmaps', 'Vendor management'] },
]

export default function ServicesGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
      {services.map((s, i) => (
        <div key={i}
          style={{ background: 'rgba(17,34,64,0.5)', border: '1px solid rgba(201,168,76,0.1)', padding: '36px 32px', transition: 'border-color 0.3s, transform 0.3s' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.4)'; el.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(201,168,76,0.1)'; el.style.transform = 'translateY(0)'; }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <span style={{ fontSize: 32 }}>{s.icon}</span>
            <span style={{ fontFamily: 'Syne,sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', color: '#c9a84c', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', padding: '3px 10px', textTransform: 'uppercase' }}>{s.cat}</span>
          </div>
          <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 20, color: '#f8f9fc', marginBottom: 20 }}>{s.title}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {s.points.map((p, j) => (
              <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, color: '#8892a4', fontSize: 14 }}>
                <span style={{ color: '#c9a84c', flexShrink: 0 }}>→</span>{p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
