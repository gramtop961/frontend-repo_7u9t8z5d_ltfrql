import React from 'react';
import Hero3D from './components/Hero3D';
import GuidedFlow from './components/GuidedFlow';
import TrustScoreCard from './components/TrustScoreCard';
import PropertyTimeline from './components/PropertyTimeline';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-slate-100">
      <Hero3D />

      <main className="mx-auto max-w-7xl px-6">
        <section className="-mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Why this matters</h3>
            <p className="mt-2 text-sm text-slate-300">
              We bridge high-speed app experiences with a permissioned blockchain, so every step is verifiable without
              exposing sensitive data. Documents are hashed off-chain, proofs are anchored on-chain, and access is
              gated via secure OAuth 2.0.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-indigo-950 to-slate-950 p-6">
            <h3 className="text-lg font-semibold text-white">How it works</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Document Hashing Service derives cryptographic hashes without uploading files to chain.</li>
              <li>Integration Layer talks to banks and registries through a hardened API gateway.</li>
              <li>Due Diligence Oracle attests to real-world facts before smart contracts transition.</li>
            </ul>
          </div>
        </section>
      </main>

      <GuidedFlow />
      <TrustScoreCard />
      <PropertyTimeline />

      <footer className="mx-auto max-w-7xl px-6 pb-12 pt-6 text-xs text-slate-400">
        Built for trust-first real estate transactions • Indigo/Blue theme • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
