import { NextResponse } from "next/server";

export const config = { matcher: ["/admin/:path*"] };

export function middleware(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token"); // prend ?token=12345
  if (token !== process.env.ADMIN_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const res = NextResponse.next(); // créer la réponse
  // Ajouter les headers de sécurité
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin");
  return res;
}
