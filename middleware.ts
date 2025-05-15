import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  console.log('host', host);
  
  if (host && host.includes('theservicejunction.com')) {
    const newUrl = `https://xhamster19.com${req.nextUrl.pathname}`;
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
