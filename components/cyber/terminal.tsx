"use client";

import { motion } from "framer-motion";

const lines = [
  "> booting sentinel systems...",
  "> encrypting secure channels...",
  "> scanning active nodes...",
  "> access granted",
];

export default function CyberTerminal() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-black/70 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <p className="ml-4 text-xs tracking-widest text-zinc-500">
          sentinel-terminal
        </p>
      </div>

      <div className="space-y-5 p-6 font-mono text-sm">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.4,
              duration: 0.5,
            }}
            className={
              index === 3
                ? "text-purple-400"
                : index === 2
                  ? "text-cyan-400"
                  : "text-emerald-400"
            }
          >
            {line}
          </motion.p>
        ))}

        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
            <span>network scan</span>
            <span>78%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 2 }}
              className="h-full bg-cyan-400"
            />
          </div>
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
        </div>
      </div>
    </div>
  );
}
