import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import ArenaCTA from './components/ArenaCTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-zinc-950 to-stone-900 text-zinc-100">
      <NavBar />
      <main>
        <Hero />
        <Schedule />
        <ArenaCTA />
      </main>
      <footer className="border-t border-zinc-800/60 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-400">
          © {new Date().getFullYear()} Colosseum Clash • A gladiator-themed schedule showcase
        </div>
      </footer>
    </div>
  );
}

export default App;
