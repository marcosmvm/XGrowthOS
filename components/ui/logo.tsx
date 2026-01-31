'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'icon' | 'lockup'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showAdminBadge?: boolean
  className?: string
}

const iconSizes: Record<string, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
}

const textStyles: Record<string, string> = {
  sm: 'text-lg font-semibold',
  md: 'text-xl font-bold',
  lg: 'text-2xl font-bold',
  xl: 'text-3xl font-bold',
}

function LogoMark({ gradientId }: { gradientId: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="48"
          x2="48"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Central neural node */}
      <circle cx="24" cy="24" r="5" fill={`url(#${gradientId})`} />
      {/* Upper-left dendrite */}
      <path
        d="M 18.5,22.5 C 14,19, 9,11, 6,6 C 11,9, 19,14, 22.5,18.5 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Lower-right dendrite */}
      <path
        d="M 29.5,25.5 C 34,29, 39,37, 42,42 C 37,39, 29,34, 25.5,29.5 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Upper-right dendrite — extended for growth directionality */}
      <path
        d="M 25.5,18.5 C 30,13, 39,7, 44,3.5 C 40,9, 33,17, 29.5,22.5 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Lower-left dendrite */}
      <path
        d="M 22.5,29.5 C 19,34, 9,39, 6,42 C 8,37, 14,30, 18.5,25.5 Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  )
}

export function Logo({
  variant = 'lockup',
  size = 'sm',
  showAdminBadge = false,
  className,
}: LogoProps) {
  const id = useId()
  const gradientId = `xg-${id.replace(/:/g, '')}`

  if (variant === 'icon') {
    return (
      <div className={cn(iconSizes[size], 'shrink-0', className)}>
        <LogoMark gradientId={gradientId} />
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(iconSizes[size], 'shrink-0')}>
        <LogoMark gradientId={gradientId} />
      </div>
      {showAdminBadge ? (
        <div className="flex flex-col">
          <span className={cn('font-heading leading-tight', textStyles[size])}>
            XGrowthOS
          </span>
          <span className="text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded w-fit">
            ADMIN
          </span>
        </div>
      ) : (
        <span className={cn('font-heading', textStyles[size])}>
          XGrowthOS
        </span>
      )}
    </div>
  )
}
