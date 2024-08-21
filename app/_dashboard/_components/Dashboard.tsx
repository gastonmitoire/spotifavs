import React, { PropsWithChildren, ReactNode } from "react";

import {
  Home as HomeIcon,
  Profile2User as Profile2UserIcon,
  Music as MusicIcon,
} from "iconsax-react";
import { ArtistType, TopArtistsList } from "@/app/_shared";

interface DashboardProps {
  artists: ArtistType[];
}
interface NavigationItemProps extends PropsWithChildren {
  iconName: "home" | "artists" | "songs";
}

const iconMap: Record<NavigationItemProps["iconName"], React.ComponentType> = {
  home: HomeIcon,
  artists: Profile2UserIcon,
  songs: MusicIcon,
};

export const Dashboard = async ({ artists }: DashboardProps) => {
  return (
    <div className="flex h-full">
      <section className="h-full flex-1">
        <TopArtistsList topArtists={artists} />
      </section>
    </div>
  );
};
