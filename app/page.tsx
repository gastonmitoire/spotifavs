// src/app/page.tsx
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./_shared/_components/LogoutButton";
import { ArtistType, TopArtistsList } from "./_shared";
import {
  dashboardServices,
  UserProfile,
} from "./_dashboard/_services/dashboard.services";
import { Dashboard } from "./_dashboard/_components/Dashboard";

export default async function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  let userProfile: UserProfile | null = null;
  let topArtists: { items: ArtistType[] } | null = null;
  let topTracks: { items: Track[] } | null = null;
  if (accessToken) {
    userProfile = await dashboardServices.fetchUserProfile(accessToken);
    topArtists = await dashboardServices.fetchTopArtists(accessToken);
    topTracks = await dashboardServices.fetchTopTracks(accessToken);
  }
  return (
    <main className="h-screen">
      <Dashboard />
    </main>
  );
}
