// src/app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");
    return NextResponse.redirect(
      new URL("/", process.env.NEXT_PUBLIC_BASE_URL)
    );
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.redirect(
      new URL("/error", process.env.NEXT_PUBLIC_BASE_URL)
    );
  }
}
