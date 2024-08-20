// app/api/spotify/profile/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchClient, apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  try {
    const userProfile = await fetchClient(apiEndpoints.spotifyApi + "/v1/me");

    return NextResponse.json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.redirect(new URL("/error", apiEndpoints.nextPublicUrl));
  }
}
