import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import ArenaCTA from "./components/ArenaCTA";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Subtle gladiator ambience background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,214,164,0.08),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\"><path fill=\"%23171717\" d=\"M0 0h32v32H0z\"/><path fill=\"%231a1a1a\" d=\"M0 31h32v1H0z\"/></svg>')] opacity-20" />
      </div>

      <NavBar />
      <main>
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Upcoming Schedule */}
        <Schedule />
        {/* Section 3: Call to Action */}
        <ArenaCTA />
      </main>
    </div>
  );
}

export default App;
