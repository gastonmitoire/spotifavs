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
