// src/app/page.tsx
import React from "react";
import { Dashboard } from "./_dashboard/_components/Dashboard";
import { dashboardServices } from "./_dashboard/_services/dashboard.services";
import { ArtistType } from "./_shared";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  let topArtists: { items: ArtistType[] } | null = null;
  let topTracks: { items: Track[] } | null = null;
  if (accessToken) {
    topArtists = await dashboardServices.fetchTopArtists(accessToken);
  }

  if (!topArtists) {
    return null;
  }

  return (
    <main className="container">
      <Dashboard topArtists={topArtists?.items} />
    </main>
  );
}
