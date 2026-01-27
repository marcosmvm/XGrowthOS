import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'
  const errorParam = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  // Handle OAuth errors from Supabase
  if (errorParam) {
    console.error('[Auth Callback] OAuth error from provider:', errorParam, errorDescription)
    return NextResponse.redirect(
      `${origin}/login?error=auth&message=${encodeURIComponent(errorDescription || errorParam)}`
    )
  }

  if (code) {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('[Auth Callback] Error exchanging code for session:', error.message)
        return NextResponse.redirect(
          `${origin}/login?error=auth&message=${encodeURIComponent(error.message)}`
        )
      }

      // Successfully authenticated
      const forwardedHost = request.headers.get('x-forwarded-host')
      const isLocalEnv = process.env.NODE_ENV === 'development'

      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    } catch (error) {
      console.error('[Auth Callback] Unexpected error during session exchange:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      return NextResponse.redirect(
        `${origin}/login?error=auth&message=${encodeURIComponent(errorMessage)}`
      )
    }
  }

  // No code provided - redirect to login
  console.error('[Auth Callback] No authorization code provided')
  return NextResponse.redirect(`${origin}/login?error=auth&message=${encodeURIComponent('No authorization code provided')}`)
}
