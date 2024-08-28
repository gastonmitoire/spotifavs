import React, { PropsWithChildren, ReactNode } from "react";

import { TopArtistsGrid } from "@/app/_shared";
import { Avatar } from "@nextui-org/avatar";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

interface DashboardProps {
  topArtists: Artist[];
  topTracks: Track[];
}

export const Dashboard = ({ topArtists, topTracks }: DashboardProps) => {
  return (
    <div className="grid grid-flow-col gap-10 pt-5">
      <section className="overflow-hidden max-h-[90vh] border-2 p-3 space-y-3 border-white border-opacity-10 rounded-3xl">
        <h5 className="text-xl font-bold uppercase text-white text-opacity-60">
          Artistas favoritos
        </h5>
        <Divider />
        <ScrollShadow className="overflow-auto max-h-[80vh] scrollbar-hide">
          <ul className="space-y-3">
            {topArtists.map((artist, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <Avatar
                  src={artist.images[0].url}
                  className="max-w-24 max-h-24"
                  style={{
                    width: artist.images[0].width,
                    height: artist.images[0].height,
                  }}
                />
                <span className="text-white">{artist.name}</span>
                <span className="text-white">{artist.popularity}</span>
              </li>
            ))}
          </ul>
        </ScrollShadow>
      </section>

      <section className="overflow-hidden max-h-[90vh] border-2 p-3 space-y-3 border-white border-opacity-10 rounded-3xl">
        <h5 className="text-xl font-bold uppercase text-white text-opacity-60">
          Canciones favoritas
        </h5>
        <Divider />
        <ScrollShadow className="overflow-auto max-h-[80vh] scrollbar-hide">
          <ul className="space-y-3">
            {topTracks.map((track, index) => (
              <li key={index} className="flex items-center gap-1.5">
                <Image
                  src={track.album.images[0].url}
                  alt={track.album.name + "_album-cover"}
                  className="max-w-24 max-h-24"
                  width={track.album.images[0].width}
                  height={track.album.images[0].height}
                />
                <span className="text-white">{track.name}</span>
                <span className="text-white">{track.popularity}</span>
              </li>
            ))}
          </ul>
        </ScrollShadow>
      </section>
    </div>
  );
};
