'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { SectionHeading } from './section-heading'
import { complianceBadges } from '@/lib/data/compliance'
import { cn } from '@/lib/utils'

interface ComplianceBadgesProps {
  showHeading?: boolean
  variant?: 'full' | 'compact'
  className?: string
}

export function ComplianceBadges({
  showHeading = true,
  variant = 'full',
  className,
}: ComplianceBadgesProps) {
  if (variant === 'compact') {
    return (
      <div className={cn('flex flex-wrap justify-center gap-4', className)}>
        {complianceBadges.map((badge, index) => (
          <motion.div
            key={badge.name}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <badge.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{badge.name}</span>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Trust & Compliance"
            title="Built with Compliance in Mind"
            subtitle="We take data protection and email compliance seriously so you can focus on growth."
          />
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceBadges.map((badge, index) => (
            <motion.div
              key={badge.name}
              className="bg-card border border-border rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">{badge.name}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/how-it-works#compliance"
            className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
          >
            Learn more about our compliance practices
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
