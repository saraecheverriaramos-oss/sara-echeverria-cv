"use client";

import { useId, useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
  Wallet,
  UserCheck,
  FileText,
  Palette,
  Globe,
  GraduationCap,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import type { ExperienciaItem } from "@/types/profile";
import { cn } from "@/lib/utils";

function iconFor(text: string): LucideIcon {
  const t = text.toLowerCase();
  if (/compra|proveedor/.test(t)) return ShoppingCart;
  if (/econ[oó]mic|financ|presupuesto|facturaci/.test(t)) return Wallet;
  if (/selecci[oó]n|coordinaci[oó]n.*persona|trabajo de personas/.test(t)) return UserCheck;
  if (/asesor|contable|fiscal|document|contractual|societari/.test(t)) return FileText;
  if (/escaparat|decoraci|interioris|fideliza|client/.test(t)) return Palette;
  if (/web|digital|inteligencia artificial|contenido/.test(t)) return Globe;
  if (/formaci[oó]n|posgrado|docente/.test(t)) return GraduationCap;
  return CheckCircle2;
}

export function TrayectoriaItem({ item, defaultOpen = false }: { item: ExperienciaItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <li className="relative pb-10 last:pb-0">
      <span
        aria-hidden
        className="absolute -left-[2.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper sm:-left-[3.1rem]"
      />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">{item.periodo}</p>
          <h3 className="mt-1.5 font-serif text-2xl">{item.empresa}</h3>
          <p className="mt-1 text-[0.95rem] font-medium text-accent">{item.puesto}</p>
          <p className="mt-0.5 text-sm text-ink-muted">
            {[item.ubicacion, item.sector].filter(Boolean).join(" · ")}
          </p>
        </div>
        <ChevronDown
          size={18}
          aria-hidden
          className={cn(
            "mt-1.5 shrink-0 text-ink-muted transition-transform duration-300 group-hover:text-accent",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        id={panelId}
        className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{item.contexto}</p>

          {item.responsabilidades.length > 0 ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {item.responsabilidades.map((r) => {
                const Icon = iconFor(r);
                return (
                  <div key={r} className="flex items-start gap-2.5 rounded-xl border border-line p-3">
                    <Icon size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                    <p className="text-sm leading-snug text-ink-muted">{r}</p>
                  </div>
                );
              })}
            </div>
          ) : null}

          {item.competencias.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.competencias.map((c) => (
                <span key={c} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-muted">
                  {c}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
