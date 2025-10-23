import { Ticket, Crown } from 'lucide-react';

export default function ArenaCTA() {
  return (
    <section id="tickets" className="relative">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,#ffffff0f_0px,#ffffff0f_2px,transparent_2px,transparent_8px)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-b from-amber-500/15 to-amber-600/15 p-6 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-xs text-amber-200">
                <Crown className="h-4 w-4" /> Champion Seats Available
              </div>
              <h3 className="mt-3 font-serif text-2xl text-white md:text-3xl">
                Claim your throne among the roaring crowd
              </h3>
              <p className="mt-2 text-zinc-200">
                Secure premium ringside, arena bowl, or gallery seats. Limited releases per card. Once the horn sounds, the gates close.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
            >
              Get Tickets
              <Ticket className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
