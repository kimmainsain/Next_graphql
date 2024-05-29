import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathUrl = request.nextUrl.pathname;

  // 정적 파일 및 API 경로를 필터링
  if (
    pathUrl.startsWith("/_next") ||
    pathUrl.startsWith("/static") ||
    pathUrl.startsWith("/api") ||
    pathUrl.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // 로그인이 필요없는 페이지
  if (
    pathUrl === "/" ||
    pathUrl === "/users/login" ||
    pathUrl === "/users/redirect"
  ) {
    return NextResponse.next();
  }

  // 로그인이 필요한 페이지 && 토큰이 없는 경우
  if (!token) {
    return NextResponse.redirect(new URL("/users/redirect", request.url));
  }

  return NextResponse.next();
}
