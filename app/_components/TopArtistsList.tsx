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
  topArtists: ArtistType[] | null;
}) => {
  return (
    <ul>
      {topArtists ? (
        topArtists.map((item, index) => <li key={index}>{item.name}</li>)
      ) : (
        <li>No hay artistas para mostrar</li>
      )}
    </ul>
  );
};
