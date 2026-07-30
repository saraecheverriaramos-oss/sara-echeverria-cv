"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { perfil } from "@/data/profile";
import { cn } from "@/lib/utils";

const destinatario = perfil.contacto.find((c) => c.tipo === "email")?.valor;

export function ContactForm({ dark = false }: { dark?: boolean }) {
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

  const fieldClass = cn(
    "mt-1 w-full rounded-lg px-4 py-2.5 outline-none",
    dark
      ? "border border-noche-line bg-white/5 text-noche-ink placeholder:text-noche-ink-muted focus-visible:border-accent"
      : "border border-line bg-paper text-ink focus-visible:border-accent",
  );
  const labelClass = dark ? "text-sm text-noche-ink-muted" : "text-sm text-ink-muted";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre" className={labelClass}>
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
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email-contacto" className={labelClass}>
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
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5",
          dark ? "bg-gradient-to-r from-accent to-focus text-noche" : "bg-ink text-paper",
        )}
      >
        <Send size={15} aria-hidden />
        Enviar mensaje
      </button>
      <p className={cn("text-xs", dark ? "text-noche-ink-muted" : "text-ink-muted")}>
        Se abrirá tu gestor de correo con el mensaje ya preparado.
      </p>
    </form>
  );
}
