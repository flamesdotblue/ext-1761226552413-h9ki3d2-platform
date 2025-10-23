import React from "react";
import { Shield, Ticket } from "lucide-react";

export default function ArenaCTA() {
  return (
    <section id="tickets" className="relative mx-auto max-w-6xl px-4 pb-16">
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 shadow-[0_0_40px_-12px_rgba(245,158,11,0.35)] md:p-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200">
              <Shield className="h-4 w-4" />
              Coliseum Access
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-amber-100 sm:text-3xl">Claim Your Seat on the Stone Steps</h3>
            <p className="mt-2 text-zinc-300">
              Choose your vantage point—ringside, emperor’s row, or rally with the legion. Limited seats per battle night.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-amber-200/40 px-4 py-2.5 font-semibold text-amber-200 transition hover:bg-amber-200/10"
            >
              Learn More
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-4 py-2.5 font-semibold text-zinc-950 shadow transition hover:bg-amber-400"
            >
              <Ticket className="h-5 w-5" />
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
