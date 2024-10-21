import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

// Esta función puede ser marcada como `async` si usas `await` dentro
export function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken');
  const { pathname } = request.nextUrl;

  // Si el usuario está autenticado y trata de acceder a la página de inicio, redirigir al dashboard
  if (token && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard'; // Redirige al dashboard si tiene token y está en la página de inicio
    return NextResponse.redirect(url);
  }

  // Si no está autenticado (no tiene token) y trata de acceder al dashboard, redirigir a la página de inicio
  if (!token && pathname.startsWith('/dashboard')) {
    const url = request.nextUrl.clone();
    url.pathname = '/'; // Redirige a la página de inicio o login si intenta acceder al dashboard sin token
    return NextResponse.redirect(url);
  }

  // Si ninguna condición se cumple, permite el acceso normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"], // Aplica el middleware a la página de inicio y al dashboard
};