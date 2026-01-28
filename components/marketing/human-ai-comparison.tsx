'use client'

import { motion } from 'framer-motion'
import { Bot, User, Check } from 'lucide-react'

import { SectionHeading } from './section-heading'
import { aiResponsibilities, humanResponsibilities, trustMessage } from '@/lib/data/human-ai'

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
            badge="Human + AI"
            title="AI Does the Heavy Lifting. Experts Provide the Strategy."
            subtitle="The perfect balance of automation and human expertise for maximum results."
          />
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Column */}
          <motion.div
            className="bg-card border border-border rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">AI Handles</h3>
                <p className="text-sm text-muted-foreground">24/7 Autonomous Operations</p>
              </div>
            </div>

            <ul className="space-y-4">
              {aiResponsibilities.map((item, index) => (
                <motion.li
                  key={item.task}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{item.task}</span>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Human Column */}
          <motion.div
            className="bg-card border border-border rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Humans Provide</h3>
                <p className="text-sm text-muted-foreground">Strategic Expertise & Oversight</p>
              </div>
            </div>

            <ul className="space-y-4">
              {humanResponsibilities.map((item, index) => (
                <motion.li
                  key={item.task}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{item.task}</span>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Message */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto border-t border-border pt-8">
            {trustMessage}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
