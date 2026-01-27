'use client'

interface GridPatternProps {
  spacing?: number
  opacity?: number
  type?: 'dots' | 'lines'
}

export function GridPattern({ spacing = 30, opacity = 0.05, type = 'dots' }: GridPatternProps) {
  const patternId = `grid-pattern-${type}-${spacing}`

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {type === 'dots' ? (
            <pattern
              id={patternId}
              x="0"
              y="0"
              width={spacing}
              height={spacing}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx={spacing / 2}
                cy={spacing / 2}
                r="1"
                fill={`hsl(var(--foreground) / ${opacity})`}
              />
            </pattern>
          ) : (
            <pattern
              id={patternId}
              x="0"
              y="0"
              width={spacing}
              height={spacing}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${spacing} 0 L 0 0 0 ${spacing}`}
                fill="none"
                stroke={`hsl(var(--foreground) / ${opacity})`}
                strokeWidth="0.5"
              />
            </pattern>
          )}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}
