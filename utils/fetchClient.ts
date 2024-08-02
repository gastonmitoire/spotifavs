// utils/fetchClient.ts

export const apiEndpoints = {
  spotifyApi: "https://api.spotify.com/v1",
  nextPublicUrl: process.env.NEXT_PUBLIC_BASE_URL,
};

export async function fetchClient(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch client error:", error);
    throw error;
  }
}
