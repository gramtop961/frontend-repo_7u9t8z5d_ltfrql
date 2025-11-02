import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center text-white sm:py-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-sky-300" />
          Verified by permissioned blockchain
        </div>
        <h1 className="font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl">
          Real Estate Due Diligence,
          <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-blue-400 bg-clip-text text-transparent"> transparent by design</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Turn complex legal workflows into a guided, verifiable journey. Hash-secured documents,
          trusted integrations, and an interactive audit trail—built for speed and compliance.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#flow"
            className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            Start Guided Transaction
          </a>
          <a
            href="#trust"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            View Property Trust Score
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </section>
  );
}
