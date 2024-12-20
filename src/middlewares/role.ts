// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function checkRole(req: NextRequest, allowedRoles: string[]) {
//   const userRole = req.cookies.get('role');
//   // if (!allowedRoles.includes(userRole)) {
//   //   return NextResponse.redirect(new URL('/unauthorized', req.url));
//   // }
//   return NextResponse.next();
// }


import { useAppSelector } from "@/store";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function CheckRole(req: NextRequest, allowedRoles: string[]) {
  // Retrieve the role from the cookies (assuming 'role' cookie is set)
  // const userRole = req.cookies.get('role');
  const userAuthorized2 = useAppSelector(
    (state) => state.authorization.authorizationList,
  );

  const roleName = userAuthorized2 && userAuthorized2.roles[0]?.role_name;


  // If the user role is not in the allowed roles, redirect to an unauthorized page
  if (!roleName || !allowedRoles.includes(roleName)) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  // If the user has the correct role, allow access to the protected route
  return NextResponse.next();
}
