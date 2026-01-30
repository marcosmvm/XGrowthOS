'use client'

import { motion } from 'framer-motion'
import { Bot, User, Shield } from 'lucide-react'

import { SectionHeading } from './section-heading'
import { collaborationRows, trustMessage } from '@/lib/data/human-ai'

interface HumanAIComparisonProps {
  showHeading?: boolean
  className?: string
}

export function HumanAIComparison({ showHeading = true, className }: HumanAIComparisonProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="HOW IT WORKS"
            badge="Human + AI"
            title="AI Does the Heavy Lifting. Experts Provide the Strategy."
            highlight="Heavy Lifting"
            subtitle="The perfect balance of automation and human expertise for maximum results."
          />
        )}

        {/* Column headers */}
        <div className="hidden md:grid md:grid-cols-[1fr,40px,1fr] gap-4 mb-6 px-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">AI Handles &middot; 24/7</span>
          </div>
          <div />
          <div className="flex items-center gap-2 justify-end">
            <span className="text-sm font-semibold text-foreground">Experts Provide</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center">
              <User className="w-4 h-4 text-amber-600" />
            </div>
          </div>
        </div>

        {/* Collaboration rows */}
        <div className="space-y-3">
          {collaborationRows.map((row, index) => {
            const AreaIcon = row.icon
            return (
              <motion.div
                key={row.area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {/* Desktop: paired row */}
                <div className="hidden md:grid md:grid-cols-[1fr,40px,1fr] gap-4 items-center">
                  {/* AI side */}
                  <div className="glass-card p-4 border-l-2 border-l-primary">
                    <p className="font-medium text-sm">{row.ai.task}</p>
                    <p className="text-xs text-muted-foreground mt-1">{row.ai.detail}</p>
                  </div>

                  {/* Center connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                      <AreaIcon className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Human side */}
                  <div className="glass-card p-4 border-r-2 border-r-amber-500/50">
                    <p className="font-medium text-sm text-right">{row.human.task}</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">{row.human.detail}</p>
                  </div>
                </div>

                {/* Mobile: stacked card */}
                <div className="md:hidden glass-card p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <AreaIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{row.area}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{row.ai.task}</p>
                      <p className="text-xs text-muted-foreground">{row.ai.detail}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3 h-3 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{row.human.task}</p>
                      <p className="text-xs text-muted-foreground">{row.human.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Message */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card">
            <Shield className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              {trustMessage}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
