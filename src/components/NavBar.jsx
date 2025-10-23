import React from "react";
import { Shield, Ticket } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-gradient-to-br from-amber-400 to-amber-700 p-1.5 shadow-md shadow-amber-900/30">
            <Shield className="h-5 w-5 text-zinc-950" />
          </div>
          <span className="font-semibold tracking-wide text-amber-300">GLADIUS ARENA</span>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#schedule" className="text-zinc-300 transition hover:text-amber-300">Upcoming</a>
          <a href="#tickets" className="text-zinc-300 transition hover:text-amber-300">Tickets</a>
        </nav>
        <a
          href="#tickets"
          className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-zinc-950 shadow ring-amber-400/40 transition hover:bg-amber-400 focus:outline-none focus:ring-2"
        >
          <Ticket className="h-4 w-4" />
          Buy Tickets
        </a>
      </div>
    </header>
  );
}
