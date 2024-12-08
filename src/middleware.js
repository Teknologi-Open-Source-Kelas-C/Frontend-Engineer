import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  const userRole = req.cookies.get('userRole')?.value;
  

  const url = req.nextUrl.pathname;

  if(url === '/'){
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Cegah redirect loop dengan pengecualian pada halaman /login
  if (!token && url !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Proteksi akses ke halaman admin berdasarkan role
  if (url.startsWith('/admin') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/403', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/'], // Terapkan middleware untuk /admin dan /dashboard
};
