'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const trustedCompanies = [
  'TechFlow Solutions',
  'CloudSecure Pro',
  'DataBridge Analytics',
]

interface TrustLogosStripProps {
  className?: string
}

export function TrustLogosStrip({ className }: TrustLogosStripProps) {
  return (
    <motion.div
      className={cn('border-t border-border/50 pt-8', className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-6">
        Trusted by growth-focused B2B teams
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {trustedCompanies.map((company, index) => (
          <motion.span
            key={company}
            className="font-heading font-semibold text-lg text-muted-foreground/40 select-none"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          >
            {company}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
