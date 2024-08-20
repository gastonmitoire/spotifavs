// utils/fetchClient.ts

import { cookies } from "next/headers"; // Importa el paquete para manejar cookies en el servidor

export const apiEndpoints = {
  spotifyApi: "https://api.spotify.com/v1",
  nextPublicUrl: process.env.NEXT_PUBLIC_BASE_URL,
};

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getAccessToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken"); // Reemplaza con el nombre de tu cookie

  // Si el token no está disponible, devolver null
  if (!token) return null;

  return token;
}

async function refreshToken() {
  // Llama a tu endpoint de refresco de tokens
  const response = await fetch(`${API_URL}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await response.json();
  // Aquí deberías guardar el nuevo token en las cookies
  return data.accessToken;
}

export async function fetchClient(url: string, options: RequestInit = {}) {
  try {
    let accessToken = await getAccessToken();

    // Si el token no está disponible, intenta refrescarlo
    if (!accessToken) {
      accessToken = await refreshToken();
    }

    // Realiza la solicitud con el token
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        ...options.headers,
      },
    });

    if (response.status === 401) {
      // Si el token ha expirado, intenta refrescar el token y volver a hacer la solicitud
      accessToken = await refreshToken();
      const retryResponse = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          ...options.headers,
        },
      });

      if (!retryResponse.ok) {
        throw new Error(
          `Error: ${retryResponse.status} ${retryResponse.statusText}`
        );
      }

      return await retryResponse.json();
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch client error:", error);
    throw error;
  }
}
