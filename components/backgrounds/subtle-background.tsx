'use client'

import { TechGradient } from './tech-gradient'
import { GridPattern } from './grid-pattern'

interface SubtleBackgroundProps {
  children: React.ReactNode
  showOrb?: boolean
}

export function SubtleBackground({ children, showOrb = false }: SubtleBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-background" />

        {/* Subtle gradient */}
        <TechGradient variant="subtle" />

        {/* Clean dot grid */}
        <GridPattern type="dots" spacing={35} opacity={0.03} />

        {/* Optional accent glow for hero area */}
        {showOrb && (
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)',
              filter: 'blur(40px)',
              transform: 'translate(20%, -30%)',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
