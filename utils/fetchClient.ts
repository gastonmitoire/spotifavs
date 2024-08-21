// utils/fetchClient.ts

export const apiEndpoints = {
  spotifyApi: "https://api.spotify.com/v1",
  nextPublicUrl: process.env.NEXT_PUBLIC_BASE_URL,
  nextApi: process.env.NEXT_PUBLIC_BASE_URL + "/api",
};

async function refreshToken() {
  // Llama a tu endpoint de refresco de tokens
  const response = await fetch(`${apiEndpoints.nextApi}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await response.json();
  return data.accessToken;
}

export async function fetchClient(
  url: string,
  accessToken: string | null,
  options: RequestInit = {}
) {
  try {
    let token = accessToken;

    console.log("client-fetch: ", token);

    // Si el token no está disponible, intenta refrescarlo
    if (!token) {
      token = await refreshToken();
    }

    // Realiza la solicitud con el token
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...options.headers,
      },
    });

    if (response.status === 401) {
      // Si el token ha expirado, intenta refrescar el token y volver a hacer la solicitud
      token = await refreshToken();
      const retryResponse = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
