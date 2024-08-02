// src/app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  try {
    const cookieStore = cookies();
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");
    return NextResponse.redirect(new URL("/", apiEndpoints.nextPublicUrl));
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.redirect(new URL("/error", apiEndpoints.nextPublicUrl));
  }
}
