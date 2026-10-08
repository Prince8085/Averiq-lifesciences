"use client";

import { motion } from "framer-motion";

export function HeroMolecularVisual() {
  return (
    <div className="relative mx-auto mt-10 h-48 w-full max-w-lg pointer-events-none select-none overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent-400/20 to-primary-500/20 blur-2xl" />

      {/* Floating Molecule SVG */}
      <motion.svg
        viewBox="0 0 400 200"
        className="h-full w-full opacity-80"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="mol-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#0b5cab" />
          </linearGradient>
          <linearGradient id="mol-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b5cab" />
            <stop offset="100%" stopColor="#3b8df6" />
          </linearGradient>
        </defs>

        {/* Bond lines */}
        <line x1="120" y1="100" x2="180" y2="60" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="180" y1="60" x2="240" y2="100" stroke="#94a3b8" strokeWidth="2" />
        <line x1="240" y1="100" x2="300" y2="60" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="240" y1="100" x2="240" y2="160" stroke="#94a3b8" strokeWidth="2" />

        {/* Outer orbital ring */}
        <circle cx="200" cy="100" r="70" fill="none" stroke="url(#mol-grad-2)" strokeWidth="1" opacity="0.25" strokeDasharray="8 6" />

        {/* Molecule Nodes */}
        <g>
          <circle cx="120" cy="100" r="14" fill="url(#mol-grad-1)" className="shadow-lg" />
          <text x="120" y="104" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">R&amp;D</text>
        </g>

        <g>
          <circle cx="180" cy="60" r="18" fill="url(#mol-grad-2)" />
          <text x="180" y="64" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">CoA</text>
        </g>

        <g>
          <circle cx="240" cy="100" r="22" fill="url(#mol-grad-1)" />
          <text x="240" y="105" textAnchor="middle" fontSize="12" fontWeight="extrabold" fill="#fff">GMP</text>
        </g>

        <g>
          <circle cx="300" cy="60" r="14" fill="url(#mol-grad-2)" />
          <text x="300" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Rx</text>
        </g>

        <g>
          <circle cx="240" cy="160" r="14" fill="#0b5cab" />
          <text x="240" y="164" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">QC</text>
        </g>
      </motion.svg>
    </div>
  );
}
