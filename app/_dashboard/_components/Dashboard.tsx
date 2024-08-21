import React, { PropsWithChildren, ReactNode } from "react";
import { Avatar, Divider as NextUIDivider, User } from "@nextui-org/react";

import {
  Home as HomeIcon,
  Profile2User as Profile2UserIcon,
  Music as MusicIcon,
} from "iconsax-react";

interface NavigationItemProps extends PropsWithChildren {
  iconName: "home" | "artists" | "songs";
}

const iconMap: Record<NavigationItemProps["iconName"], React.ComponentType> = {
  home: HomeIcon,
  artists: Profile2UserIcon,
  songs: MusicIcon,
};

export const Dashboard = () => {
  return (
    <div className="flex h-full">
      <section className="h-full flex-1">a</section>
    </div>
  );
};
