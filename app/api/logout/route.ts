// src/app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { apiEndpoints } from "@/utils/fetchClient";

export async function GET() {
  try {
    const cookieStore = cookies();

    // Eliminar cookies relacionadas con la sesión de Spotify
    cookieStore.delete("access_token");
    cookieStore.delete("refresh_token");

    // Eliminar cookies relacionadas con el state del usuario
    const state = cookieStore.get("spotify_state");
    if (state) {
      cookieStore.delete("spotify_state");
    }

    // Eliminar cualquier otra cookie específica del usuario
    // cookieStore.delete("user_specific_cookie");

    // Redirigir a la página principal o a la página de login
    return NextResponse.redirect(new URL("/", apiEndpoints.nextPublicUrl));
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.redirect(new URL("/error", apiEndpoints.nextPublicUrl));
  }
}
