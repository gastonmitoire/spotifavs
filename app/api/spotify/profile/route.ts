// app/api/spotify/profile/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { fetchClient, apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return NextResponse.redirect("/login"); // Redirige si no hay token
  }

  try {
    const userProfile = await fetchClient(apiEndpoints.spotifyApi, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return NextResponse.json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.redirect("/error");
  }
}
