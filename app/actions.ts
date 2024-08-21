"use server";

import { dashboardServices } from "./_dashboard/_services/dashboard.services";

export async function getUserProfileAction() {
  let userProfile: UserProfile | null = null;

  try {
    userProfile = await dashboardServices.fetchUserProfile();

    console.log({
      userProfile,
    });

    return userProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    console.log({
      userProfile,
    });

    return null;
  }
}
