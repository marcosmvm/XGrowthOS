'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Calendar, Target, Quote, Building2 } from 'lucide-react'

import { Navigation } from '@/components/marketing/navigation'
import { Footer } from '@/components/marketing/footer'
import { SectionHeading } from '@/components/marketing/section-heading'
import { CTASection } from '@/components/marketing/cta-section'

const aggregateStats = [
  { label: 'Clients Served', value: '50+', icon: Building2 },
  { label: 'Meetings Booked', value: '2,500+', icon: Calendar },
  { label: 'Average ROI', value: '17.8x', icon: TrendingUp },
  { label: 'Industries', value: '12+', icon: Target },
]

const caseStudies = [
  {
    id: 1,
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    challenge: 'Struggling to scale outbound beyond founder-led sales with a small team and limited budget.',
    solution: 'Implemented XGrowthOS to automate prospecting and outreach to mid-market companies.',
    results: [
      { metric: 'Meetings/Month', value: '35+', change: '+600%' },
      { metric: 'Pipeline Generated', value: '$2.1M', change: '90 days' },
      { metric: 'Cost per Meeting', value: '$45', change: '-78%' },
    ],
    testimonial: {
      quote: 'XGrowthOS transformed our outbound strategy. We went from struggling to book 5 meetings a month to consistently landing 35+ qualified conversations.',
      author: 'Sarah Chen',
      title: 'VP of Sales',
    },
  },
  {
    id: 2,
    company: 'DataBridge Analytics',
    industry: 'Data & Analytics',
    challenge: 'Needed to enter new enterprise market segment but lacked SDR team and outbound expertise.',
    solution: 'Deployed AI-powered campaigns targeting Fortune 1000 data leaders with personalized messaging.',
    results: [
      { metric: 'Enterprise Leads', value: '127', change: '6 months' },
      { metric: 'Deal Size Increase', value: '+180%', change: 'vs SMB' },
      { metric: 'Sales Cycle', value: '45 days', change: '-35%' },
    ],
    testimonial: {
      quote: 'We broke into the enterprise market faster than we thought possible. The AI personalization made our outreach feel genuine at scale.',
      author: 'Michael Torres',
      title: 'Chief Revenue Officer',
    },
  },
  {
    id: 3,
    company: 'CloudSecure Pro',
    industry: 'Cybersecurity',
    challenge: 'High competition in cybersecurity space made traditional outbound ineffective.',
    solution: 'Used self-learning AI to continuously optimize messaging and identify high-intent signals.',
    results: [
      { metric: 'Reply Rate', value: '12.3%', change: '+340%' },
      { metric: 'Qualified Meetings', value: '28/mo', change: 'consistent' },
      { metric: 'CAC Reduction', value: '62%', change: 'year over year' },
    ],
    testimonial: {
      quote: 'The AI gets smarter every week. Our reply rates keep climbing while our competitors are stuck with diminishing returns.',
      author: 'Amanda Rodriguez',
      title: 'Director of Growth',
    },
  },
]

const testimonials = [
  {
    quote: 'Finally, lead generation that actually works. No more hiring and training SDRs who leave after 6 months.',
    author: 'David Park',
    title: 'CEO, FinTech Startup',
  },
  {
    quote: 'The ROI speaks for itself. We\'ve tried agencies, tools, and hiring. XGrowthOS outperforms them all.',
    author: 'Jennifer Walsh',
    title: 'Head of Marketing, B2B SaaS',
  },
  {
    quote: 'Our sales team can finally focus on closing instead of prospecting. Game changer for our efficiency.',
    author: 'Robert Kim',
    title: 'VP Sales, Healthcare Tech',
  },
]

export default function CaseStudiesClient() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Case Studies
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Real Results from{' '}
              <span className="gradient-text">Real Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how B2B companies across industries are using XGrowthOS to
              generate qualified meetings and grow their pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aggregateStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Success Stories"
            subtitle="Detailed breakdowns of how our clients achieved remarkable results."
          />

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-card border border-border rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3">
                        {study.industry}
                      </span>
                      <h3 className="font-heading text-2xl font-bold">{study.company}</h3>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">
                        Our Solution
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {study.results.map((result) => (
                      <div
                        key={result.metric}
                        className="bg-muted/50 rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-heading font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm font-medium mb-1">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/30 border-l-4 border-primary rounded-r-lg p-6">
                    <Quote className="w-6 h-6 text-primary mb-3" />
                    <p className="text-muted-foreground italic mb-4">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold">{study.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {study.testimonial.title}, {study.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from leaders who have transformed their lead generation with XGrowthOS."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-card border border-border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Become Our Next Success Story?"
        subtitle="Join 50+ B2B companies generating qualified meetings on autopilot with XGrowthOS."
        primaryCta={{ href: '/book-demo', label: 'Book Your Discovery Call' }}
        secondaryCta={{ href: '/pricing', label: 'View Pricing' }}
      />

      <Footer />
    </main>
  )
}
