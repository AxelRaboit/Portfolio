import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  const token = request.cookies.get('token')?.value || ''

  // desactivate signup path
  /* if (path === '/signup') {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  } */

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /* '/', */ /* if we want to make sure to access the app only when logged in */
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}