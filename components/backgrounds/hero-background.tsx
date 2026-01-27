'use client'

import { NetworkGrid } from './network-grid'
import { TechGradient } from './tech-gradient'
import { HexPattern } from './hex-pattern'

interface HeroBackgroundProps {
  children: React.ReactNode
}

export function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div className="relative">
      {/* Background container - fixed for seamless scrolling */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-background" />

        {/* Layer 1: Subtle gradient orbs for depth */}
        <TechGradient variant="hero" />

        {/* Layer 2: Hexagonal pattern - tech/AI feel */}
        <HexPattern opacity={0.04} />

        {/* Layer 3: Animated network grid - neural network effect */}
        <NetworkGrid intensity="high" animated />

        {/* Bottom fade for content transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
