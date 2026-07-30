"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./ui/Container";

const links = [
  { href: "#perfil", label: "Perfil" },
  { href: "#propuesta", label: "Propuesta de valor" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#competencias", label: "Competencias" },
  { href: "#formacion", label: "Formación" },
  { href: "#filosofia", label: "Liderazgo" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#inicio" className="font-serif text-lg tracking-tight">
          Sara Echeverría
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </Container>

      {open ? (
        <nav id="mobile-nav" aria-label="Navegación móvil" className="border-t border-line/70 lg:hidden">
          <Container className="flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
