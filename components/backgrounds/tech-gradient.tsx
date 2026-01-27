'use client'

interface TechGradientProps {
  variant?: 'hero' | 'subtle'
}

export function TechGradient({ variant = 'hero' }: TechGradientProps) {
  const isHero = variant === 'hero'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Primary gradient orb - top right */}
      <div
        className="absolute rounded-full"
        style={{
          top: '-10%',
          right: '-5%',
          width: isHero ? '50%' : '40%',
          height: isHero ? '50%' : '40%',
          background: `radial-gradient(circle, hsl(var(--primary) / ${isHero ? 0.15 : 0.08}) 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Secondary gradient orb - bottom left */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '10%',
          left: '-10%',
          width: isHero ? '45%' : '35%',
          height: isHero ? '45%' : '35%',
          background: `radial-gradient(circle, hsl(var(--primary) / ${isHero ? 0.12 : 0.06}) 0%, transparent 70%)`,
          filter: 'blur(50px)',
        }}
      />

      {/* Accent gradient - center */}
      {isHero && (
        <div
          className="absolute rounded-full"
          style={{
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            height: '30%',
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      )}

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
