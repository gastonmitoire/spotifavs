import React, { PropsWithChildren, ReactNode } from "react";
import { Avatar, Divider as NextUIDivider, User } from "@nextui-org/react";

import {
  Home as HomeIcon,
  Profile2User as Profile2UserIcon,
  Music as MusicIcon,
} from "iconsax-react";

interface ListContainerProps extends PropsWithChildren {
  className?: string;
}

interface NavigationItemProps extends PropsWithChildren {
  iconName: "home" | "artists" | "songs";
}

const iconMap: Record<NavigationItemProps["iconName"], React.ComponentType> = {
  home: HomeIcon,
  artists: Profile2UserIcon,
  songs: MusicIcon,
};

const borderColor = "border-opacity-10 border-white";

const ListContainer = ({ children, className }: ListContainerProps) => {
  const baseStyles = borderColor + " " + "h-full";

  return <div className={baseStyles + " " + className}>{children}</div>;
};

const NavigationItem = ({ children, iconName }: NavigationItemProps) => {
  const IconComponent = iconMap[iconName];
  return (
    <li
      className={
        borderColor +
        " " +
        "font-thin text-2xl pl-3 cursor-pointer pr-3 border-l-1"
      }
    >
      <div className="flex items-center gap-5 py-3">
        <IconComponent />
        {children}
      </div>
    </li>
  );
};

const NavigationList = ({
  borderPlacement,
}: {
  borderPlacement: "top" | "bottom";
}) => {
  return (
    <ul
      className={
        borderPlacement === "top"
          ? "[&>li]:border-t-1 first:[&>li]:rounded-tl-xl"
          : "[&>li]:border-b-1 last:[&>li]:rounded-bl-xl"
      }
    >
      <NavigationItem iconName="home">Inicio</NavigationItem>
      <NavigationItem iconName="artists">Artistas</NavigationItem>
      <NavigationItem iconName="songs">Canciones</NavigationItem>
    </ul>
  );
};

export const Dashboard = () => {
  return (
    <div className="flex h-full">
      <section className="h-full flex-1">a</section>

      <aside className="flex flex-col justify-center items-end">
        <ListContainer className="justify-end flex flex-col">
          <NavigationList borderPlacement="top" />
        </ListContainer>
        <div
          className={
            borderColor +
            " " +
            "p-1.5 border-l-2 rounded-full grid place-items-center mr-24"
          }
        >
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-32 h-32 text-large"
          />
        </div>
        <ListContainer>
          <NavigationList borderPlacement="bottom" />
        </ListContainer>
      </aside>
    </div>
  );
};
