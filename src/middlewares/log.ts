// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function logRequest(req: NextRequest) {
//     console.log(`Request made to: ${req.nextUrl.pathname}`);
//     return NextResponse.next();
//   }
  

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function logRequest(req: NextRequest) {
  // Log details of the incoming request
  console.log('Request received:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    cookies: req.cookies,
  });

  // Proceed with the request handling
  return NextResponse.next();
}
