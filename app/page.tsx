// src/app/page.tsx
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./_components/LogoutButton";
import { ArtistType, TopArtistsList } from "./_components/TopArtistsList";

type UserProfile = {
  display_name: string;
  images: { url: string }[];
};

async function fetchUserProfile(
  accessToken: string
): Promise<UserProfile | null> {
  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

async function fetchTopArtists(
  accessToken: string
): Promise<ArtistType[] | null> {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("top: ", response);

    if (!response.ok) {
      throw new Error("Failed to fetch top artists");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching top artists:", error);
    return null;
  }
}

export default async function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  let userProfile: UserProfile | null = null;
  let topArtists: ArtistType[] | null = null;
  if (accessToken) {
    userProfile = await fetchUserProfile(accessToken);
    topArtists = await fetchTopArtists(accessToken);
  }
  console.log(topArtists);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">SPOTIFAVS</h1>

      {/* <TopArtistsList topArtists={topArtists?.items} /> */}

      <div className="flex items-center bg-slate-900">
        {!accessToken ? (
          <a href="/api/auth/spotifyAuth" className="mt-10 text-xl">
            Iniciar sesión con Spotify
          </a>
        ) : (
          <>
            <div className="mt-10 text-xl flex items-center">
              {userProfile?.images[0]?.url ? (
                <Image
                  src={userProfile.images[0].url}
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">No Avatar</span>
                </div>
              )}
              <Link href="/profile" className="ml-4">
                <span className="font-bold">
                  {userProfile?.display_name || "User"}
                </span>
              </Link>
            </div>

            <LogoutButton />
          </>
        )}
      </div>
    </main>
  );
}
