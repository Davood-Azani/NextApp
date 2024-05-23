// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   console.log(request);
//? to redirect user to the specific url in next
//   return NextResponse.redirect(new URL('/about', request.url));
// }

// export const config = {
//   matcher: ['/account', '/cabins'],
// };
//---->

import { auth } from './app/_lib/auth';
//? here again we use auth but as middleware
export const middleware = auth;

//? the matcher to set authorization on the specif path
export const config = {
  matcher: ['/account'],
};
