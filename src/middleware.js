import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

// Esta función puede ser marcada como `async` si usas `await` dentro
export function middleware(request) {
  const cookieStore = cookies()
  const token = cookieStore.get('authToken')
  console.log(token)

  // Si está autenticado y trata de acceder a la página de login, redirigir al dashboard
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = `/`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard"],
};
