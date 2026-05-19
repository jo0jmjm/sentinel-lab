const stats = [
  { label: "XP", value: "12,480" },
  { label: "Rank", value: "Sentinel" },
  { label: "Completed", value: "24 Missions" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] text-emerald-400">
            DASHBOARD
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Operator Console
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-sm text-zinc-500">
                {item.label}
              </p>

              <h2 className="mt-4 text-4xl font-black text-emerald-400">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-8">
          <p className="mb-3 text-sm tracking-[0.2em] text-cyan-400">
            ACTIVE MISSION
          </p>

          <h2 className="text-3xl font-black">
            Linux Mission 01
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Access the secured system and locate hidden.txt inside the server.
          </p>

          <button className="mt-8 rounded-2xl bg-emerald-400 px-6 py-4 font-semibold text-black transition hover:scale-105">
            Continue Mission
          </button>
        </div>
      </div>
    </main>
  );
}
