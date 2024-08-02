import { NextResponse } from "next/server";

export function GET() {
  // Obtén las variables de entorno y asegúrate de que no sean undefined
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const scopes = "user-read-private user-read-email"; // Los permisos que tu aplicación requiere
  const state = "your-random-state"; // Genera un valor aleatorio para la seguridad

  // Verifica que las variables de entorno no sean undefined
  if (!redirectUri || !clientId) {
    console.error("Error: Missing environment variables.");
    return NextResponse.redirect("/error"); // Redirige a una página de error
  }

  // Construye la URL de autenticación de Spotify
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes
  )}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

  return NextResponse.redirect(authUrl);
}
