const labs = [
  {
    title: "Linux Fundamentals",
    difficulty: "Easy",
  },
  {
    title: "Network Recon",
    difficulty: "Medium",
  },
  {
    title: "Web Security",
    difficulty: "Hard",
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] text-emerald-400">
            TRAINING LABS
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Active Missions
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {labs.map((lab) => (
            <div
              key={lab.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-emerald-400/40"
            >
              <p className="text-sm tracking-widest text-cyan-400">
                {lab.difficulty}
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                {lab.title}
              </h2>

              <p className="mt-4 text-zinc-500">
                Practical cyber security mission.
              </p>

              <button className="mt-8 rounded-xl border border-emerald-400/30 px-5 py-3 text-emerald-400 transition hover:bg-emerald-400 hover:text-black">
                Enter Lab
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
