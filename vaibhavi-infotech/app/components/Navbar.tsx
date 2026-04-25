'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/clients', label: 'Clients' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
      background: 'var(--cream-light)',
      borderBottom: '1px solid rgba(217, 206, 178, 0.3)',
      transition: 'all 0.35s ease',
      boxShadow: scrolled ? '0 1px 3px rgba(26,22,17,0.05)' : 'none',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 80, transition: 'height 0.3s ease' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 36, height: 36, background: 'var(--bark)', borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--cream)', fontSize: 18,
            }}>
              <span dangerouslySetInnerHTML={{ __html: '<iconify-icon icon="lucide:cpu" style="font-size:18px"></iconify-icon>' }} />
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--bark)', lineHeight: 1 }}>Vaibhavi</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em', color: 'var(--ember)', lineHeight: 1 }}> Infotech</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                padding: '8px 16px', fontSize: 14, fontWeight: 500, color: 'var(--warmgray)',
                borderRadius: 8, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--ember)'; e.currentTarget.style.background = 'rgba(239,227,202,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--warmgray)'; e.currentTarget.style.background = 'transparent' }}
              >{l.label}</Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/contact" style={{
              background: 'var(--bark)', color: 'var(--cream)',
              padding: '10px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600,
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bark-mid)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,22,17,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bark)'; e.currentTarget.style.boxShadow = 'none' }}
            className="desktop-nav"
            >Request Quote</Link>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
              display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            }}>
              <div style={{ width: 24, height: 2, background: 'var(--bark)', margin: '5px 0', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <div style={{ width: 24, height: 2, background: 'var(--bark)', margin: '5px 0', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
              <div style={{ width: 24, height: 2, background: 'var(--bark)', margin: '5px 0', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'var(--cream-light)', borderTop: '1px solid rgba(217,206,178,0.3)', padding: '16px 24px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '12px 0', fontFamily: 'var(--font-display)', fontSize: 15,
              fontWeight: 600, color: 'var(--bark)', borderBottom: '1px solid rgba(217,206,178,0.3)',
            }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            display: 'block', marginTop: 16, background: 'var(--bark)', color: 'var(--cream)',
            padding: '12px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600, textAlign: 'center',
          }}>Request Quote</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
