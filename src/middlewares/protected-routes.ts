import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function
export function ProtectedRoutes(req: NextRequest) {
  // Get the session token (you can use a cookie or any other token management method)
  const token = req.cookies.get('token');
  const isVerified = req.cookies.get('token');

  console.log(token,isVerified,"allowedRolestoken")
  // Define a protected route or set of routes
  const protectedRoutes = ['/dashboard', '/profile'];

  // Check if the route is protected and if the token exists
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token && !isVerified) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/auth/identity', req.url));
  }

  // Allow request to continue
  return NextResponse.next();
}

// Specify the routes the middleware should apply to
export const config = {
  matcher: ['/dashboard/ :path*', '/reports/ :', 'dashboard/'],
};
