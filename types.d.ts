type Album = {
  href: string;
  id: string; // Añadido para identificar el álbum
  name: string; // Nombre del álbum
  release_date: string; // Fecha de lanzamiento
  release_date_precision: string; // Precisión de la fecha de lanzamiento
  total_tracks: number; // Número total de pistas en el álbum
  type: string; // Tipo de objeto, siempre será "album"
  uri: string; // URI de Spotify para el álbum
  images: {
    url: string;
    height: number;
    width: number;
  }[];
};

type Artist = {
  external_urls: {
    spotify: string; // URL de Spotify para el artista
  };
  followers: {
    href: string | null; // Enlace al endpoint de Web API para los seguidores, puede ser null
    total: number; // Número total de seguidores
  };
  genres: string[]; // Géneros musicales del artista
  href: string; // URL al perfil del artista
  id: string; // ID del artista
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string; // Nombre del artista
  popularity: number; // Popularidad del artista (0-100)
  type: "artist"; // Tipo de objeto, siempre será "artist"
  uri: string; // URI de Spotify para el artista
};

type SimplifiedArtistObject = {
  href: string;
  id: string; // ID del artista
  name: string; // Nombre del artista
  type: "artist"; // Tipo de objeto, siempre será "artist"
  uri: string; // URI de Spotify para el artista
};

type ExternalIds = {
  [key: string]: string; // Identificadores externos en formato clave-valor
};

type ExternalUrls = {
  spotify: string; // URL de Spotify para el objeto
};

type LinkedFrom = {
  href: string; // Enlace al objeto del cual se ha enlazado
};

type Restrictions = {
  reason: string; // Razón por la cual la pista está restringida
};

interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[]; // Mercados en los que la pista está disponible
  disc_number: number; // Número del disco en el álbum
  duration_ms: number; // Duración de la pista en milisegundos
  explicit: boolean; // Indica si la pista contiene contenido explícito
  external_ids: ExternalIds; // Identificadores externos para la pista
  external_urls: ExternalUrls; // URLs externas para la pista
  href: string; // URL al objeto de la pista
  id: string; // ID de la pista
  is_playable?: boolean; // Indica si la pista es reproducible
  linked_from?: LinkedFrom; // Información sobre el objeto del cual se ha enlazado
  restrictions?: Restrictions; // Restricciones sobre la pista
  name: string; // Nombre de la pista
  popularity: number; // Popularidad de la pista (0-100)
  preview_url?: string | null; // URL para una vista previa de la pista
  track_number: number; // Número de pista en el álbum
  type: "track"; // Tipo de objeto, siempre será "track"
  uri: string; // URI de Spotify para la pista
  is_local: boolean; // Indica si la pista es local (no disponible en Spotify)
}

// Define la interfaz para la configuración de contenido explícito
interface ExplicitContentSettings {
  filter_enabled: boolean; // Indica si el contenido explícito no debería ser reproducido
  filter_locked: boolean; // Indica si la configuración de contenido explícito está bloqueada
}

// Define la interfaz para los enlaces externos
interface ExternalUrls {
  spotify: string; // La URL de Spotify para el objeto
}

// Define la interfaz para las imágenes del perfil
interface ImageObject {
  url: string; // La URL fuente de la imagen
  height?: number; // La altura de la imagen en píxeles, puede ser nullable
  width?: number; // El ancho de la imagen en píxeles, puede ser nullable
}

// Define la interfaz para la información del seguidor
interface Followers {
  href: string | null; // Enlace al endpoint de la Web API para el usuario, siempre será null
  total: number; // Número total de seguidores
}

// Define la interfaz principal para el modelo de usuario
interface UserProfile {
  country: string; // Código del país en formato ISO 3166-1 alpha-2
  display_name: string | null; // Nombre mostrado en el perfil del usuario, puede ser null
  email: string; // Dirección de correo electrónico del usuario
  explicit_content?: ExplicitContentSettings; // Configuración de contenido explícito, opcional
  external_urls?: ExternalUrls; // URLs externas para el usuario, opcional
  followers?: Followers; // Información sobre los seguidores del usuario, opcional
  images?: ImageObject[]; // Imágenes del perfil del usuario, opcional
  product?: string; // Nivel de suscripción de Spotify del usuario, opcional
  type: string; // Tipo de objeto, siempre será "user"
  uri: string; // URI de Spotify para el usuario
}
