import { apiEndpoints, fetchClient } from "@/utils/fetchClient";

export const dashboardServices = {
  fetchTopArtists,
  fetchTopTracks,
};

async function fetchTopArtists(
  accessToken: string
): Promise<{ items: Artist[] } | null> {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch top artists");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return null;
  }
}

async function fetchTopTracks(
  accessToken: string
): Promise<{ items: Track[] } | null> {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch top tracks");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return null;
  }
}
