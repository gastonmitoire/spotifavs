// src/components/LogoutButton.tsx
"use client"; // Marca este componente como un Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout");
    router.push("/"); // Redirige a la página de inicio
    router.refresh(); // Refresca la página para actualizar el estado de autenticación
  };

  return (
    <button onClick={handleLogout} className="ml-4 font-bold">
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
