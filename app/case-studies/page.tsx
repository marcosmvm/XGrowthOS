import type { Metadata } from 'next'
import CaseStudiesClient from './client'

export const metadata: Metadata = {
  title: 'Case Studies | XGrowthOS',
  description: 'See how XGrowthOS helps B2B companies achieve exceptional ROI with autonomous AI-powered lead generation.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}
