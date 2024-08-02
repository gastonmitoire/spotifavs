// src/app/api/auth/callback/route.ts
import { apiEndpoints } from "@/utils/fetchClient";
import { NextResponse } from "next/server";
import { URLSearchParams } from "url";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state) {
    return NextResponse.redirect(new URL("/error", apiEndpoints.nextPublicUrl));
  }

  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!redirectUri || !clientId || !clientSecret) {
    return NextResponse.redirect(new URL("/error", apiEndpoints.nextPublicUrl));
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      }).toString(),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error exchanging code for access token:", errorData);
      throw new Error(
        `Failed to exchange code for access token: ${errorData.error_description}`
      );
    }

    const data = await response.json();
    const { access_token, refresh_token, expires_in } = data;

    const responseHeaders = new Headers();
    responseHeaders.append(
      "Set-Cookie",
      `access_token=${access_token}; Max-Age=${expires_in}; Path=/; Secure; HttpOnly; SameSite=Strict`
    );
    responseHeaders.append(
      "Set-Cookie",
      `refresh_token=${refresh_token}; Path=/; Secure; HttpOnly; SameSite=Strict`
    );

    return NextResponse.redirect(
      new URL("/profile", apiEndpoints.nextPublicUrl),
      {
        headers: responseHeaders,
      }
    );
  } catch (error) {
    console.error("Error exchanging code for access token:", error);
    return NextResponse.redirect(new URL("/error", apiEndpoints.nextPublicUrl));
  }
}
