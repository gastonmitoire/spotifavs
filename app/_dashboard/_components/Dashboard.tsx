import React, { PropsWithChildren, ReactNode } from "react";

import { ArtistType, TopArtistsGrid } from "@/app/_shared";
import { Tab, Tabs } from "@nextui-org/react";

interface DashboardProps {
  topArtists: ArtistType[];
}

export const Dashboard = ({ topArtists }: DashboardProps) => {
  return (
    <section className="h-full flex-1 py-10">
      <h5 className="text-xl font-bold uppercase text-white text-opacity-60 py-3">
        Artistas favoritos
      </h5>
      <TopArtistsGrid topArtists={topArtists} />
    </section>
  );
};
