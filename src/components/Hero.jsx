import { Sword, Flame, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(60%_50%_at_50%_0%,#f59e0b33_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
          <Flame className="h-3.5 w-3.5" /> Summer Arena Series
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Enter the Arena. Conquer the Night.
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Witness WWE gladiators clash in epic battles under the torchlight. Explore the upcoming card, mark your calendar, and claim your seat among roaring crowds.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#schedule"
            className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-medium text-zinc-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
          >
            View Upcoming Battles
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#tickets"
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-900"
          >
            Secure Tickets
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <HeroStat label="Combatants" value="24" />
          <HeroStat label="Arenas" value="6" />
          <HeroStat label="Main Events" value="3" />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 top-10 hidden rotate-12 md:block">
        <Emblem />
      </div>
    </section>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm text-zinc-400">{label}</div>
    </div>
  );
}

function Emblem() {
  return (
    <div className="relative grid h-44 w-44 place-items-center rounded-full border border-amber-400/30 bg-zinc-900/60">
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#f59e0b33_330deg,#f59e0b66_360deg)]" />
      <div className="relative">
        <Sword className="h-14 w-14 text-amber-400" />
      </div>
    </div>
  );
}
