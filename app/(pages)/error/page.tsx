// src/app/error/page.tsx
export default function ErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-red-600">Error</h1>
      <p className="mt-10 text-xl">
        Algo salió mal. Por favor, inténtalo de nuevo.
      </p>
    </main>
  );
}
