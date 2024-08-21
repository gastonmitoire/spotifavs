import { ArtistType } from "@/app/_shared";
import { apiEndpoints, fetchClient } from "@/utils/fetchClient";

export const usersServices = {
  fetchUserProfile,
};

async function fetchUserProfile(): Promise<UserProfile | null> {
  try {
    const response = await fetch(apiEndpoints.nextApi + "/spotify/profile");

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}
