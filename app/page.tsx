import { Shield, Terminal, Radar, ArrowRight } from "lucide-react";

const missions = [
  {
    title: "Linux Fundamentals",
    level: "LEVEL 01",
    desc: "Linux terminal と basic operation を学習",
  },
  {
    title: "Network Recon",
    level: "LEVEL 02",
    desc: "ネットワーク解析とスキャン訓練",
  },
  {
    title: "Web Security",
    level: "LEVEL 03",
    desc: "XSS / SQLi / 認証脆弱性を実践",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,136,0.15),transparent_40%)]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.03)_51%)] bg-[size:100%_4px]" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-black tracking-[0.25em] text-emerald-400">
            SENTINEL LAB
          </h1>

          <p className="text-xs tracking-[0.3em] text-zinc-500">
            CYBER DEFENSE ACADEMY
          </p>
        </div>

        <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#" className="transition hover:text-emerald-400">
            Labs
          </a>

          <a href="#" className="transition hover:text-emerald-400">
            Missions
          </a>

          <a href="#" className="transition hover:text-emerald-400">
            Ranking
          </a>
        </nav>

        <button className="rounded-xl border border-emerald-400/40 px-5 py-2 text-sm text-emerald-400 transition hover:bg-emerald-400 hover:text-black">
          Login
        </button>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl gap-20 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Defense Training Facility
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Become
            <span className="block text-emerald-400">The Sentinel.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            次世代ホワイトハッカー訓練施設。
            実践型ミッションで Linux、Network、Web Security、
            Forensics を学習。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-4 font-semibold text-black transition hover:scale-105">
              Start Training
              <ArrowRight size={18} />
            </button>

            <button className="rounded-2xl border border-white/10 px-6 py-4 text-white transition hover:border-emerald-400 hover:text-emerald-400">
              View Labs
            </button>
          </div>

          <div className="mt-12 flex gap-8">
            <div>
              <h3 className="text-3xl font-black text-emerald-400">120+</h3>
              <p className="text-sm text-zinc-500">Training Missions</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-cyan-400">24/7</h3>
              <p className="text-sm text-zinc-500">Cyber Lab Access</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-purple-400">LIVE</h3>
              <p className="text-sm text-zinc-500">Realtime Ranking</p>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-emerald-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-black/70 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <p className="ml-4 text-xs tracking-widest text-zinc-500">
                terminal
              </p>
            </div>

            <div className="space-y-5 p-6 font-mono text-sm">
              <div>
                <p className="text-emerald-400">
                  &gt; initializing sentinel protocol...
                </p>
              </div>

              <div>
                <p className="text-cyan-400">
                  &gt; scanning network nodes
                </p>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[78%] bg-cyan-400" />
                </div>
              </div>

              <div>
                <p className="text-purple-400">
                  &gt; access granted
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 text-zinc-400">
                  Current Mission
                </p>

                <h3 className="text-lg font-bold text-white">
                  Linux Mission 01
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Find hidden.txt inside secured server.
                </p>

                <div className="mt-5 flex items-center gap-2 text-emerald-400">
                  <Terminal size={16} />
                  <span className="text-sm">terminal ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] text-emerald-400">
            TRAINING PROGRAMS
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Cyber Security Missions
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {missions.map((mission) => (
            <div
              key={mission.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.03]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                <Shield />
              </div>

              <p className="text-sm tracking-widest text-emerald-400">
                {mission.level}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {mission.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-500">
                {mission.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-cyan-400">
                <Radar size={16} />
                Active Training
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        SENTINEL LAB © 2026
      </footer>
    </main>
  );
}
