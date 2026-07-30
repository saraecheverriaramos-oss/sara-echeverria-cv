"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper"
    >
      <Printer size={15} aria-hidden />
      Imprimir
    </button>
  );
}
