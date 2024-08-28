// /auth/token/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
const url = "https://accounts.spotify.com/api/token";

export async function POST(request: Request) {
  if (!client_id || !client_secret || !redirect_uri) {
    return NextResponse.json(
      { error: "Missing client_id, client_secret, or redirect_uri" },
      { status: 400 }
    );
  }

  const cookieStore = cookies();
  const storedState = cookieStore.get("spotify_auth_state")?.value;
  const existingToken = cookieStore.get("access_token")?.value;

  if (existingToken) {
    return NextResponse.json({ message: "Token already exists" });
  }

  try {
    const { code, state } = await request.json();

    if (!code || state !== storedState) {
      return NextResponse.json(
        { error: "Authorization code is required or invalid state" },
        { status: 400 }
      );
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret,
      }).toString(),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    const responseHeaders = new Headers();
    responseHeaders.append(
      "Set-Cookie",
      `access_token=${data.access_token}; Max-Age=${data.expires_in}; Path=/; Secure; HttpOnly; SameSite=Strict`
    );
    responseHeaders.append(
      "Set-Cookie",
      `refresh_token=${data.refresh_token}; Path=/; Secure; HttpOnly; SameSite=Strict`
    );

    return NextResponse.json(data, { headers: responseHeaders });
  } catch (error) {
    console.error("Error fetching token:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
