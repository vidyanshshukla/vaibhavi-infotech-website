'use client'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  style?: React.CSSProperties
  hoverBorderColor?: string
  defaultBorderColor?: string
  hoverTransform?: string
}

export default function HoverCard({ children, style = {}, hoverBorderColor = 'rgba(201,168,76,0.4)', defaultBorderColor = 'rgba(201,168,76,0.1)', hoverTransform = 'translateY(-4px)' }: HoverCardProps) {
  return (
    <div
      style={{ ...style, transition: 'border-color 0.3s, transform 0.3s' }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = hoverBorderColor
        el.style.transform = hoverTransform
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = defaultBorderColor
        el.style.transform = 'none'
      }}
    >
      {children}
    </div>
  )
}
