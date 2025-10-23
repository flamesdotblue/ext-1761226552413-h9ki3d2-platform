import React from "react";
import { Flame, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-200">
            <Flame className="h-4 w-4" />
            Gladiator Season • Live WWE Spectacle
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-amber-100 sm:text-5xl md:text-6xl">
            Enter the Arena. Witness the Clash.
          </h1>
          <p className="mt-4 max-w-prose text-zinc-300">
            A coliseum of power and pride. Experience WWE fighters in a gladiator-themed arena where legends are forged under blazing torches and roaring crowds.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow transition hover:bg-amber-400"
            >
              See Upcoming Battles
            </a>
            <a
              href="#tickets"
              className="inline-flex items-center justify-center rounded-md border border-amber-200/30 px-4 py-2.5 text-sm font-semibold text-amber-200 transition hover:bg-amber-200/10"
            >
              Secure a Seat
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-amber-300" /> 50k+ fans last season</span>
            <span className="hidden md:inline">Forged in rivalry • Honed by honor</span>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl">
            {/* Stylized gladiator arena emblem */}
            <svg viewBox="0 0 600 450" className="h-full w-full">
              <defs>
                <radialGradient id="torch" cx="50%" cy="0%" r="70%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="60%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#111827" />
                </radialGradient>
              </defs>
              <rect width="600" height="450" fill="#18181b" />
              <g opacity="0.35">
                <circle cx="300" cy="420" r="260" fill="url(#torch)" />
              </g>
              <g stroke="#eab308" strokeWidth="6" fill="none" strokeLinecap="round">
                <path d="M80 320 Q300 200 520 320" />
                <path d="M110 300 Q300 200 490 300" />
                <path d="M140 280 Q300 200 460 280" />
              </g>
              <g fill="#fde68a">
                <rect x="140" y="250" width="20" height="80" rx="4" />
                <rect x="440" y="250" width="20" height="80" rx="4" />
              </g>
              <g>
                <rect x="210" y="210" width="180" height="18" rx="4" fill="#f59e0b" />
                <rect x="240" y="228" width="120" height="12" rx="3" fill="#eab308" />
              </g>
              <g fill="#f59e0b" opacity="0.9">
                <circle cx="60" cy="60" r="8" />
                <circle cx="540" cy="60" r="8" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
