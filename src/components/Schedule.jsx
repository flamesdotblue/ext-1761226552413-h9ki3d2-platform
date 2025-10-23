import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 'I',
    title: 'Trial by Fire',
    date: 'Sat, Nov 2, 2025',
    time: '7:30 PM',
    arena: 'Golden Sand Arena',
    city: 'Las Vegas, NV',
  },
  {
    id: 'II',
    title: 'Steel and Thunder',
    date: 'Sat, Nov 9, 2025',
    time: '7:00 PM',
    arena: 'Iron Gate Coliseum',
    city: 'Chicago, IL',
  },
  {
    id: 'III',
    title: 'Lions’ Roar',
    date: 'Sun, Nov 16, 2025',
    time: '6:30 PM',
    arena: 'Empire Grounds',
    city: 'New York, NY',
  },
  {
    id: 'IV',
    title: 'Crown of Ashes',
    date: 'Sat, Nov 23, 2025',
    time: '7:00 PM',
    arena: 'Sovereign Forum',
    city: 'Dallas, TX',
  },
  {
    id: 'V',
    title: 'Rage of the Tides',
    date: 'Sat, Nov 30, 2025',
    time: '7:30 PM',
    arena: 'Mariner Colosseum',
    city: 'Miami, FL',
  },
  {
    id: 'VI',
    title: 'Night of Champions',
    date: 'Sat, Dec 7, 2025',
    time: '8:00 PM',
    arena: 'Imperium Hall',
    city: 'Los Angeles, CA',
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative border-y border-zinc-800/60 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl text-white md:text-4xl">Upcoming Schedule</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Mark your calendar and rally your crew. Each card brings fresh rivalries, new champions, and arena-shaking finishes.
            </p>
          </div>
          <div className="hidden text-right md:block">
            <div className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-300">
              <Calendar className="h-4 w-4" /> Updated weekly
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.id}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5 transition hover:border-amber-500/40 hover:shadow-[0_0_0_1px_rgba(245,158,11,0.3)]"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold tracking-widest text-amber-300">
                  ACT {e.id}
                </div>
                <span className="text-xs text-zinc-400">Colosseum Series</span>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-white">{e.title}</h3>

              <div className="mt-4 space-y-2 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-amber-300" /> {e.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-300" /> {e.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-300" /> {e.arena} • {e.city}
                </div>
              </div>

              <div className="mt-5 inline-flex rounded-md border border-zinc-700 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 transition group-hover:border-amber-400/40 group-hover:bg-zinc-900">
                View match card
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,#f59e0b22,transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
