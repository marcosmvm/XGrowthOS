'use client'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconWrapper } from '@/components/ui/icon-wrapper'

interface AdminStatsCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  variant?: 'primary' | 'blue' | 'amber' | 'indigo' | 'violet'
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function AdminStatsCard({
  label,
  value,
  icon,
  variant = 'primary',
  trend,
  className,
}: AdminStatsCardProps) {
  return (
    <div className={cn('bg-card border border-border rounded-xl p-6', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="label-text">{label}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {trend && (
            <p
              className={cn(
                'text-sm mt-1',
                trend.isPositive ? 'text-success' : 'text-destructive'
              )}
            >
              {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <IconWrapper icon={icon} size="md" variant={variant} />
      </div>
    </div>
  )
}
