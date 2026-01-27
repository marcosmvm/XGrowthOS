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
        <FloatingOrbs count={4} opacity={0.25} blur={80} />

        {/* Layer 3: Grid pattern overlay */}
        <GridPattern type="dots" spacing={30} opacity={0.06} />

        {/* Fade to background at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
