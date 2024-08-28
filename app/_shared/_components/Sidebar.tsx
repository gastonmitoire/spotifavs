import React, { PropsWithChildren } from "react";
import {
  Home2 as Home2Icon,
  Profile2User as Profile2UserIcon,
  Music as MusicIcon,
  IconProps, // Importa IconProps
} from "iconsax-react";

interface SidebarNavItemProps extends PropsWithChildren {
  url: string;
  label: string;
  iconName: "home" | "artists" | "tracks";
}

// Define el iconMap usando IconProps para tipar correctamente
const iconMap: Record<SidebarNavItemProps["iconName"], React.FC<IconProps>> = {
  home: Home2Icon,
  artists: Profile2UserIcon,
  tracks: MusicIcon,
};

const sidebarNavItems: SidebarNavItemProps[] = [
  {
    url: "/",
    label: "Inicio",
    iconName: "home",
  },
  {
    url: "/artists",
    label: "Artistas",
    iconName: "artists",
  },
  {
    url: "/tracks",
    label: "Canciones",
    iconName: "tracks",
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen flex flex-col justify-center items-center px-1.5">
      <ul className="space-y-10">
        {sidebarNavItems.map(({ label, iconName, url }, index) => {
          const IconComponent = iconMap[iconName];
          return (
            <li
              key={index}
              className="flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            >
              <IconComponent size={40} /> {/* Ajusta el tamaño del ícono */}
              <p className="uppercase">{label}</p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
