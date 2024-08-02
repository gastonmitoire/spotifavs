// app/api/auth/token/route.ts

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const client_id = "8cadd189a71845d3af1576008e35d1e3"; // Reemplaza con tu client_id
const client_secret = "e3e42ca124b64bdb8b096cc25d107321"; // Reemplaza con tu client_secret
const url = "https://accounts.spotify.com/api/token";

export async function POST() {
  const cookieStore = cookies();
  const existingToken = cookieStore.get("access_token")?.value;

  if (existingToken) {
    return NextResponse.json({ message: "Token already exists" });
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
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
    console.log("Data: ", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching token:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
