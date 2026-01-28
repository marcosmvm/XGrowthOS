'use client'

import { GradientMesh } from './gradient-mesh'
import { FloatingOrbs } from './floating-orbs'
import { GridPattern } from './grid-pattern'

interface HeroBackgroundProps {
  children: React.ReactNode
}

export function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div className="relative">
      {/* Background container - fixed for parallax-like effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-background" />

        {/* Layer 1: Animated gradient mesh */}
        <GradientMesh intensity="medium" animated />

        {/* Layer 2: Floating orbs */}
        <FloatingOrbs count={5} opacity={0.15} blur={100} />

        {/* Layer 3: Grid pattern overlay */}
        <GridPattern type="dots" spacing={30} opacity={0.04} />

        {/* Layer 4: Accent gradient for depth */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />

        {/* Fade to background at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
