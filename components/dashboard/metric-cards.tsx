'use client'

import { Mail, MousePointer, MessageSquare, ThumbsUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { IconWrapper } from '@/components/ui/icon-wrapper'
import { cn } from '@/lib/utils'
import { mockMetrics } from '@/lib/data/dashboard'

interface MetricCardProps {
  label: string
  value: string | number
  trend?: number
  icon: React.ComponentType<{ className?: string }>
  variant?: 'primary' | 'blue' | 'amber' | 'indigo' | 'emerald'
}

function MetricCard({ label, value, trend, icon, variant = 'primary' }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="label-text">{label}</p>
            <p className="text-2xl font-bold tracking-tight">{value}</p>
            {trend !== undefined && (
              <p className={cn(
                "text-xs font-medium",
                trend >= 0 ? "text-success" : "text-destructive"
              )}>
                {trend >= 0 ? '+' : ''}{trend}%
              </p>
            )}
          </div>
          <IconWrapper icon={icon} size="md" variant={variant} />
        </div>
      </CardContent>
    </Card>
  )
}

export function MetricCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <MetricCard
        label="Emails Sent"
        value={mockMetrics.totalSent.toLocaleString()}
        icon={Mail}
        variant="blue"
      />
      <MetricCard
        label="Open Rate"
        value={`${mockMetrics.openRate}%`}
        trend={mockMetrics.openRateTrend}
        icon={MousePointer}
        variant="amber"
      />
      <MetricCard
        label="Reply Rate"
        value={`${mockMetrics.replyRate}%`}
        trend={mockMetrics.replyRateTrend}
        icon={MessageSquare}
        variant="indigo"
      />
      <MetricCard
        label="Positive Replies"
        value={mockMetrics.positiveReplies.toLocaleString()}
        icon={ThumbsUp}
        variant="emerald"
      />
    </div>
  )
}
