"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { perfil } from "@/data/profile";

const destinatario = perfil.contacto.find((c) => c.tipo === "email")?.valor;

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!destinatario) return;

    const asunto = `Contacto profesional — ${nombre || "sin nombre"}`;
    const cuerpo = `${mensaje}\n\n— ${nombre}${email ? ` (${email})` : ""}`;
    const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailto;
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className="text-sm text-ink-muted">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email-contacto" className="text-sm text-ink-muted">
          Correo electrónico
        </label>
        <input
          id="email-contacto"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="text-sm text-ink-muted">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
      >
        <Send size={15} aria-hidden />
        Enviar mensaje
      </button>
      <p className="text-xs text-ink-muted">Se abrirá tu gestor de correo con el mensaje ya preparado.</p>
    </form>
  );
}
