import { Shield, Calendar, Ticket, Home } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-zinc-800/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-amber-500/80 to-amber-700/80 ring-1 ring-amber-300/40">
            <Shield className="h-5 w-5 text-zinc-950" />
          </span>
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">Colosseum Clash</div>
            <div className="text-xs text-zinc-400">WWE Fighter Events</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#hero" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-300 transition-colors">
            <Home className="h-4 w-4" /> Home
          </a>
          <a href="#schedule" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-300 transition-colors">
            <Calendar className="h-4 w-4" /> Schedule
          </a>
          <a href="#tickets" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-300 transition-colors">
            <Ticket className="h-4 w-4" /> Tickets
          </a>
        </nav>
      </div>
    </header>
  );
}
