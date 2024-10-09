import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
const session = false
    // Si está autenticado y trata de acceder a la página de login, redirigir al dashboard
    if (session &&  request.nextUrl.pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = `/dashboard`;
      return NextResponse.redirect(url);
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/', '/dashboard'],
}

