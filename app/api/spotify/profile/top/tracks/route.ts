import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchClient, apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  console.log("Access Token in API:", accessToken);

  if (!accessToken) {
    return NextResponse.json(
      { error: "No access token found" },
      { status: 401 }
    );
  }

  try {
    const topTracks = await fetchClient(
      `${apiEndpoints.spotifyApi}/me/top/tracks`,
      accessToken
    );

    return NextResponse.json(topTracks);
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return NextResponse.json(
      { error: "Failed to fetch top tracks" },
      { status: 500 }
    );
  }
}
