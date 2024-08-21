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

export const TopArtistsList = ({
  topArtists,
}: {
  topArtists: ArtistType[];
}) => {
  return (
    <ul className="flex flex-col gap-3">
      {topArtists.map((item, index) => (
        <li key={index} className="flex items-center gap-1.5">
          <Avatar src={item.images[0].url} />
          {item.name}
        </li>
      ))}
    </ul>
  );
};
