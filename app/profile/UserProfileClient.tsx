// src/app/profile/UserProfileClient.tsx
"use client";

import Image from "next/image";

type UserProfileProps = {
  profile: {
    display_name: string;
    images: { url: string }[];
    email: string;
  } | null;
};

export default function UserProfileClient({ profile }: UserProfileProps) {
  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10 text-center">
      <Image
        src={profile.images[0]?.url || "/default-avatar.png"}
        alt={`Profile picture of ${profile.display_name}`}
        width={150}
        height={150}
        className="rounded-full"
      />
      <h2 className="text-2xl mt-4">{profile.display_name}</h2>
      <p className="text-lg mt-2">{profile.email}</p>
    </div>
  );
}
