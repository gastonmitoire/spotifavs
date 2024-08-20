import { ArtistType } from "@/app/_shared";

export type UserProfile = {
  display_name: string;
  images: { url: string }[];
};

export const dashboardServices = {
  fetchUserProfile,
  fetchTopArtists,
  fetchTopTracks,
};

async function fetchUserProfile(
  accessToken: string
): Promise<UserProfile | null> {
  try {
    const response = await fetch("http://localhost:3000/api/profile");
    console.log("Res ", response);

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

async function fetchTopArtists(
  accessToken: string
): Promise<{ items: ArtistType[] } | null> {
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
