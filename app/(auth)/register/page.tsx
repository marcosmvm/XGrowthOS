import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AuthCard } from '@/components/auth/auth-card'
import { RegisterForm } from '@/components/auth/register-form'

export const metadata: Metadata = {
  title: 'Get Started | XGrowthOS',
  description: 'Create your XGrowthOS account and start generating qualified B2B leads with AI.',
}

export default function RegisterPage() {
  return (
    <AuthCard
      title="Get Started"
      description="Create your account"
    >
      <Suspense fallback={<RegisterFormSkeleton />}>
        <RegisterForm />
      </Suspense>
    </AuthCard>
  )
}

function RegisterFormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-10 bg-muted rounded-lg" />
        <div className="h-10 bg-muted rounded-lg" />
        <div className="h-10 bg-muted rounded-lg" />
        <div className="h-10 bg-muted rounded-lg" />
        <div className="h-10 bg-primary/50 rounded-lg" />
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-10 bg-muted rounded-lg" />
        <div className="h-10 bg-muted rounded-lg" />
        <div className="h-10 bg-muted rounded-lg" />
      </div>
    </div>
  )
}
