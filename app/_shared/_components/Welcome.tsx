import React from "react";
import { Button } from "@nextui-org/button";
import { Spotify as SpotifyIcon } from "iconsax-react";

export const Welcome: React.FC = () => {
  return (
    <div className="flex h-full w-full justify-center items-center flex-col gap-5">
      <article className="max-w-sm text-justify tracking-wide space-y-3 italic opacity-85">
        <p>
          Nuestra aplicación está diseñada para ayudarte a gestionar y guardar
          tus gustos musicales en Spotify de manera eficiente. Con esta
          herramienta, puedes fácilmente organizar tus favoritos, listas y
          preferencias musicales en un solo lugar.
        </p>
        <p>
          Es importante destacar que los datos que manejas en la aplicación no
          son guardados ni utilizados de ninguna forma fuera de tu sesión
          activa. La aplicación no retiene, almacena ni comparte tu información
          personal o musical. Su único propósito es ofrecerte una manera cómoda
          y efectiva de gestionar tus preferencias musicales y mantener tus
          listas de favoritos actualizadas y organizadas.
        </p>
        <p>
          La aplicación se centra en la facilidad de uso y en ofrecer una
          experiencia fluida para que puedas disfrutar de tu música en Spotify
          sin preocupaciones adicionales.
        </p>
      </article>
      <Button
        className="uppercase font-light"
        size="lg"
        color="primary"
        variant="flat"
        radius="sm"
        startContent={<SpotifyIcon size={52} />}
      >
        <a href="/api/auth/spotifyAuth">Iniciar sesión con Spotify</a>
      </Button>
    </div>
  );
};
