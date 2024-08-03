import { NextResponse } from "next/server";

// Función para generar un valor aleatorio para el state
function generateRandomState(length = 16) {
  const possibleCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let state = "";
  for (let i = 0; i < length; i++) {
    state += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  return state;
}

export function GET() {
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  // Define los scopes requeridos
  const scopes = "user-read-private user-read-email user-top-read";

  // Genera un valor aleatorio para el state
  const state = generateRandomState();

  if (!redirectUri || !clientId) {
    console.error("Error: Missing environment variables.");
    return NextResponse.redirect("/error"); // Redirige a una página de error
  }

  // Construye la URL de autenticación de Spotify
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes
  )}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

  // Redirige al usuario a la URL de autenticación de Spotify
  return NextResponse.redirect(authUrl);
}
