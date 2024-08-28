import { Avatar } from "@nextui-org/react";
import React from "react";

export type ArtistType = {
  external_urls: Object;
  followers: Object;
  genres: string[];
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  url: string;
};

export const TopArtistsGrid = ({
  topArtists,
}: {
  topArtists: ArtistType[];
}) => {
  return (
    <ul className="grid grid-cols-5 gap-5">
      {topArtists.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <Avatar className="h-28 w-28" src={item.images[0].url} />
          <p className="text-lg font-bold">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
