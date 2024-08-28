import React, { PropsWithChildren, ReactNode } from "react";

import { ArtistType, TopArtistsList } from "@/app/_shared";
import { Tab, Tabs } from "@nextui-org/react";

interface DashboardProps {
  artists: ArtistType[];
}

export const Dashboard = ({ artists }: DashboardProps) => {
  return (
    <section className="h-full flex-1 py-10">
      <h5 className="text-xl font-bold uppercase text-white text-opacity-60 py-3">
        Artistas favoritos
      </h5>
      <TopArtistsList topArtists={artists} />
    </section>
  );
};
