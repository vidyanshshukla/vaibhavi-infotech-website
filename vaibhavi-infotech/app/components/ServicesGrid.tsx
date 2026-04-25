'use client'

const services = [
  { icon: 'lucide:monitor', title: 'IT Hardware Supply', cat: 'Hardware', points: ['Servers & storage systems', 'Workstations & laptops', 'Peripherals & accessories', 'OEM authorized distributor', 'GeM-listed procurement'] },
  { icon: 'lucide:package', title: 'Software Licensing', cat: 'Software', points: ['Microsoft 365 & Azure', 'Adobe Creative Suite', 'Autodesk products', 'Antivirus & endpoint tools', 'Volume licensing specialist'] },
  { icon: 'lucide:globe', title: 'Network Infrastructure', cat: 'Networking', points: ['LAN / WAN design & setup', 'Structured cabling', 'Cisco, D-Link, TP-Link', 'Wi-Fi campus deployments', 'Firewall installation'] },
  { icon: 'lucide:shield-half', title: 'Cybersecurity Solutions', cat: 'Security', points: ['Endpoint protection', 'Firewall & UTM solutions', 'Vulnerability assessments', 'SOC-as-a-service', 'Compliance audits'] },
  { icon: 'lucide:cloud-cog', title: 'Cloud Solutions', cat: 'Cloud', points: ['AWS & Azure migration', 'NIC MeghRaj Cloud (Govt)', 'Hybrid cloud architecture', 'Backup & DR solutions', 'Cloud cost optimization'] },
  { icon: 'lucide:wrench', title: 'AMC & IT Support', cat: 'Support', points: ['Annual maintenance contracts', 'On-site & remote support', '24/7 helpdesk', 'SLA-based response', 'Preventive maintenance'] },
  { icon: 'lucide:printer', title: 'Printing & Imaging', cat: 'Hardware', points: ['Laser & inkjet printers', 'MFP & photocopiers', 'Plotters for engineering', 'Toner & consumables', 'Repair & service'] },
  { icon: 'lucide:camera', title: 'Surveillance Systems', cat: 'Security', points: ['CCTV & IP cameras', 'NVR/DVR systems', 'Access control', 'Video analytics', 'Government campus security'] },
  { icon: 'lucide:laptop', title: 'IT Consultancy', cat: 'Consulting', points: ['IT audit & gap analysis', 'Digital transformation', 'RFP & tender support', 'Technology roadmaps', 'Vendor management'] },
]

export default function ServicesGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
      {services.map((s, i) => (
        <div key={i} className="service-card" style={{
          background: 'var(--white)', borderRadius: 16, padding: 28,
          border: '1px solid rgba(217,206,178,0.2)', cursor: 'default',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div className="service-icon" style={{
              width: 48, height: 48, background: 'var(--cream)', borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span dangerouslySetInnerHTML={{ __html: `<iconify-icon icon="${s.icon}" style="color:var(--ember);font-size:20px"></iconify-icon>` }} />
            </div>
            <span style={{
              fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--warmgray)',
              background: 'rgba(239,227,202,0.8)', padding: '4px 10px', borderRadius: 6,
              textTransform: 'uppercase',
            }}>{s.cat}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--bark)', marginBottom: 16, letterSpacing: '-0.01em' }}>{s.title}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {s.points.map((p, j) => (
              <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, color: 'var(--warmgray)', fontSize: 14 }}>
                <span style={{ color: 'var(--ember)', flexShrink: 0, fontSize: 12 }}>→</span>{p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
