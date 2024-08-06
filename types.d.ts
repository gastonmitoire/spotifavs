type Album = {
  href: string;
  // Añade otras propiedades del álbum según sea necesario
};

type SimplifiedArtistObject = {
  href: string;
  // Añade otras propiedades del artista según sea necesario
};

type ExternalIds = {
  [key: string]: string;
  // Añade otros identificadores externos según sea necesario
};

type ExternalUrls = {
  [key: string]: string;
  // Añade otras URLs externas según sea necesario
};

type LinkedFrom = {
  // Añade las propiedades relevantes para el objeto linked_from según sea necesario
};

type Restrictions = {
  // Añade las propiedades relevantes para las restricciones según sea necesario
};

interface Track {
  album: Album;
  artists: SimplifiedArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: LinkedFrom;
  restrictions?: Restrictions;
  name: string;
  popularity: number;
  preview_url?: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}
