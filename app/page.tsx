// src/app/page.tsx
import React from "react";
import { Dashboard } from "./_dashboard/_components/Dashboard";

export default async function Home() {
  return (
    <main className="h-screen">
      <Dashboard />
    </main>
  );
}
