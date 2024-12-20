// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function checkAuth(req: NextRequest) {
//   // Get the session token (you can use a cookie or any other token management method)
//   const token = req.cookies.get('token');
//   const isVerified = req.cookies.get('isVerified');  // Flag for identity verification
//   const otpVerified = req.cookies.get('otpVerified'); // Flag for OTP verification
  
  
//   const { pathname } = req.nextUrl

//   console.log(pathname,"auth pathname")
//   console.log(token,isVerified,pathname,"allowedRolestoken")

//   // If no token or identity is not verified, redirect to /auth/identity
//   if (!token) {
//     return NextResponse.redirect(new URL('/auth/identity', req.url));
//   }

//   // If identity is verified but OTP is not verified, redirect to /auth/otp-verification
//   if (isVerified && !otpVerified && req.nextUrl.pathname !== '/auth/otp-verification') {
//     return NextResponse.redirect(new URL('/auth/otp-verification', req.url));
//   }

//   // If both identity and OTP are verified, allow access to the protected route
//   if (token && isVerified && otpVerified) {
//     return NextResponse.next();
//   }

//   // If the route is part of the auth flow, allow access
//   return NextResponse.next();
// }


// /middleware/auth.ts (or in the 'middleware' folder)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function checks if the user is authenticated and verified
export function checkAuth(req: NextRequest) {
  // Get cookies for token and verification status
  const token = req.cookies.get('token');
  const isVerified = req.cookies.get('isVerified');  // identity verification (true/false)
  const otpVerified = req.cookies.get('otpVerified'); // OTP verification (true/false)

  // If no token is present, the user is not authenticated
  if (!token) {
    // Redirect to the identity verification page
    return NextResponse.redirect(new URL('/auth/identity', req.url));
  }

  // If the user is authenticated but not verified, redirect them to the verification page
  if (!isVerified) {
    return NextResponse.redirect(new URL('/auth/identity', req.url));
  }

  // If the user is authenticated and verified but OTP is not verified, redirect to OTP verification page
  if (!otpVerified) {
    return NextResponse.redirect(new URL('/auth/otp-verification', req.url));
  }

  // If the user has a valid token, isVerified is true, and otpVerified is true, allow access
  return NextResponse.next();
}
