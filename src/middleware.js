import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const protectedRoutes = ["/home", "/account", "/si"];
const publicRoutes = ["/", "/register", "/shop"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoutes = protectedRoutes.includes(path);
  const isPublicRoutes = publicRoutes.includes(path);

  const token = (await cookies()).get("auth")?.value;
  if (isProtectedRoutes && !token && token === undefined) {
    return NextResponse.redirect(new URL("/", req.nextUrl), {
      status: 307,
    });
  }

  if (isPublicRoutes && token) {
    return NextResponse.redirect(new URL("/home", req.nextUrl), {
      status: 307,
    });
  }

  return NextResponse.next();
}
