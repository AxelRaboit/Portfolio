import { NextResponse } from 'next/server';

export function middleware(request) {

  const path = request.nextUrl.pathname

  // If the user is already logged in and tries to acces these pages, redirect to root
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  // Token is the JWT token that we use to authenticate the user
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
    '/api/admin/users',
  ]
}