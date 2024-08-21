// app/api/spotify/profile/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchClient, apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "No access token found" },
      { status: 401 }
    );
  }

  try {
    const userProfile = await fetchClient(
      `${apiEndpoints.spotifyApi}/me`,
      accessToken
    );

    return NextResponse.json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch user profile" },
      { status: 500 }
    );
  }
}
