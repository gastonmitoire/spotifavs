import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchClient, apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  console.log("Access Token in API:", accessToken); // Verifica que el token se está obteniendo correctamente

  if (!accessToken) {
    return NextResponse.json(
      { error: "No access token found" },
      { status: 401 }
    );
  }

  try {
    const topArtists = await fetchClient(
      `${apiEndpoints.spotifyApi}/me/top/artists`,
      accessToken
    );

    return NextResponse.json(topArtists);
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return NextResponse.json(
      { error: "Failed to fetch top artists" },
      { status: 500 }
    );
  }
}
