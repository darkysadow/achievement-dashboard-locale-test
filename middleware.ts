import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { LocalesType } from "./app/types/types";

const locales: LocalesType[] = ['uk', 'en', 'nl'];

function getLocale(request: NextRequest): string {
  const cookieLocale: LocalesType = request.cookies.get('NEXT_LOCALE')?.value as LocalesType;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(',')[0].split('-')[0]; 
    const matchedLocale = locales.find(locale => locale.startsWith(preferredLocale));
    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return 'uk';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|images|favicon.ico|api|.*\\.).*)',
  ],
};