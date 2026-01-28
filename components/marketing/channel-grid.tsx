'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import { SectionHeading } from './section-heading'
import { channels, type Channel } from '@/lib/data/channels'
import { cn } from '@/lib/utils'

interface ChannelGridProps {
  showHeading?: boolean
  showFeatures?: boolean
  className?: string
}

function StatusBadge({ status, label }: { status: Channel['status']; label?: string }) {
  const styles = {
    active: 'bg-green-500/10 text-green-600 border-green-500/20',
    'coming-soon': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    roadmap: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
    'enterprise-only': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  }

  const labels = {
    active: 'Active',
    'coming-soon': label || 'Coming Soon',
    roadmap: label || 'On Roadmap',
    'enterprise-only': label || 'Enterprise',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border',
        styles[status]
      )}
    >
      {labels[status]}
    </span>
  )
}

export function ChannelGrid({ showHeading = true, showFeatures = true, className }: ChannelGridProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Outreach Channels"
            title="Multi-Channel Outreach, One Platform"
            subtitle="Email is our current focus. We're transparent about what's active and what's coming."
          />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              className={cn(
                'bg-card border rounded-xl p-6 relative',
                channel.status === 'active'
                  ? 'border-primary/30 shadow-sm'
                  : 'border-border opacity-80'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <channel.icon className="w-6 h-6 text-primary" />
                </div>
                <StatusBadge status={channel.status} label={channel.statusLabel} />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-2">{channel.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>

              {showFeatures && channel.features.length > 0 && (
                <ul className="space-y-2">
                  {channel.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          We believe in transparency. Email is our core strength today, and we&apos;re building toward multi-channel.
        </motion.p>
      </div>
    </section>
  )
}
