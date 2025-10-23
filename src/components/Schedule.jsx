import React from "react";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    date: "Nov 15, 2025",
    time: "7:30 PM",
    city: "Las Vegas, NV",
    venue: "Colossus Dome",
    headline: "Titan vs. Viper",
    card: ["Crimson Blade vs. Iron Wolf", "Nightshade vs. Stormbreaker"],
  },
  {
    id: 2,
    date: "Dec 02, 2025",
    time: "8:00 PM",
    city: "Chicago, IL",
    venue: "Northwind Coliseum",
    headline: "Emperor Kane vs. Avalanche",
    card: ["Phoenix King vs. Warhammer", "Silver Fury vs. Thunder Ox"],
  },
  {
    id: 3,
    date: "Dec 20, 2025",
    time: "7:00 PM",
    city: "New York, NY",
    venue: "Gilded Arena",
    headline: "Night Emperor vs. Rampart",
    card: ["Steel Seraph vs. Black Mamba", "Red Widow vs. Lionheart"],
  },
];

function EventCard({ event }) {
  return (
    <div className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition hover:border-amber-500/50 hover:bg-zinc-900/70">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
            <span className="inline-flex items-center gap-1.5 text-amber-300"><Calendar className="h-4 w-4" /> {event.date}</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-300"><Clock className="h-4 w-4 text-amber-200/80" /> {event.time}</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-300"><MapPin className="h-4 w-4 text-amber-200/80" /> {event.city}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold tracking-wide text-amber-100 md:text-2xl">{event.headline}</h3>
          <p className="text-sm text-zinc-400">{event.venue}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
            {event.card.map((bout, idx) => (
              <li key={idx}>{bout}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3 shrink-0 md:mt-0">
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 font-semibold text-zinc-950 shadow transition hover:bg-amber-400"
            aria-label={`Buy tickets for ${event.headline}`}
          >
            <Ticket className="h-4 w-4" />
            Tickets
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300/90">Upcoming Schedule</p>
          <h2 className="mt-1 text-3xl font-extrabold text-amber-100 sm:text-4xl">WWE Fighter Events</h2>
          <p className="mt-2 max-w-prose text-zinc-400">Mark your calendar. Three nights of thunder inside a modern coliseum. Every bout is a legacy in the making.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:gap-6">
        {EVENTS.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
