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
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 0' : '22px 0',
      background: scrolled ? 'rgba(10,22,40,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      transition: 'all 0.35s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, background: 'linear-gradient(135deg, #c9a84c, #e8c97a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#0a1628',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}>VI</div>
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 17, color: '#f8f9fc', letterSpacing: '0.02em' }}>VAIBHAVI</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 400, fontSize: 9, color: '#c9a84c', letterSpacing: '0.3em', marginTop: -2 }}>INFOTECH</div>
          </div>
        </Link>

        {/* Desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#ccd6f6',
              letterSpacing: '0.05em', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
            onMouseLeave={e => (e.currentTarget.style.color = '#ccd6f6')}>{l.label}</Link>
          ))}
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg, #c9a84c, #e8c97a)', color: '#0a1628',
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13,
            padding: '10px 22px', letterSpacing: '0.08em', textTransform: 'uppercase',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
          }}>Get Quote</Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="hamburger">
          <div style={{ width: 24, height: 2, background: '#c9a84c', margin: '5px 0', transition: 'all 0.3s' }}></div>
          <div style={{ width: 24, height: 2, background: '#c9a84c', margin: '5px 0' }}></div>
          <div style={{ width: 24, height: 2, background: '#c9a84c', margin: '5px 0', transition: 'all 0.3s' }}></div>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: '#0a1628', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '20px 24px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '12px 0', fontFamily: 'Syne, sans-serif', fontSize: 15,
              fontWeight: 600, color: '#ccd6f6', borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>{l.label}</Link>
          ))}
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
