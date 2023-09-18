import { NextResponse } from 'next/server'

export function middleware(request) {

  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  const token = request.cookies.get('token')?.value || ''

  const isSignupActivated = process.env.NEXT_PUBLIC_ACTIVATE_SIGNUP === "true";

  if (!isSignupActivated && path === '/signup') {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (process.env.NODE_ENV === 'development' && path.startsWith('/api/')) {
    return
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}
 
export const config = {
  matcher: [
    '/profile',
    '/login',
    '/signup',
    '/verifyemail',
    '/api/users'
  ]
}