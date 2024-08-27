"use client";
import React, { PropsWithChildren, ReactNode } from "react";

import {
  Home as HomeIcon,
  Profile2User as Profile2UserIcon,
  Music as MusicIcon,
} from "iconsax-react";
import { ArtistType, TopArtistsList } from "@/app/_shared";
import { Tab, Tabs } from "@nextui-org/react";

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

export const Dashboard = ({ artists }: DashboardProps) => {
  return (
    <section className="h-full flex-1 py-10">
      <h5 className="text-xl font-bold uppercase text-white text-opacity-60 py-3">
        Artistas favoritos
      </h5>
      <Tabs
        aria-label="Options"
        isVertical
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]",
        }}
      >
        <Tab key="photos" title="Photos">
          1
        </Tab>
        <Tab key="music" title="Music">
          2
        </Tab>
        <Tab key="videos" title="Videos">
          3
        </Tab>
      </Tabs>
    </section>
  );
};
