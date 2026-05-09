// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware executed for:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/my-items/:path*"],
};
