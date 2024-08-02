// src/app/profile/page.tsx
import { cookies } from "next/headers";
import UserProfileClient from "./UserProfileClient";

async function fetchUserProfile(accessToken: string) {
  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

export default async function Profile() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Profile</h1>
        <p className="mt-10 text-xl">Please log in to view your profile.</p>
      </main>
    );
  }

  const profileData = await fetchUserProfile(accessToken);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Profile</h1>
      <UserProfileClient profile={profileData} />
    </main>
  );
}
