import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { perfil } from "@/data/profile";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-center text-ink">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
        {perfil.nombre} — la página que buscas no existe o se ha movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-focus px-6 py-3 text-sm font-medium text-noche transition-transform hover:-translate-y-0.5"
      >
        <ArrowLeft size={16} aria-hidden />
        Volver al inicio
      </Link>
    </main>
  );
}
