import React, { useMemo } from 'react';
import { ShieldCheck, FileCheck, Banknote, ScrollText } from 'lucide-react';

function Gauge({ value }) {
  const angle = Math.min(100, Math.max(0, value)) * 3.6;
  const gradient = `conic-gradient(rgb(99 102 241) ${angle}deg, rgb(30 41 59) ${angle}deg)`;
  return (
    <div className="relative h-36 w-36">
      <div className="absolute inset-0 rounded-full" style={{ background: gradient }} />
      <div className="absolute inset-2 rounded-full bg-slate-950" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{value}</div>
          <div className="text-xs uppercase tracking-wide text-slate-400">Trust Score</div>
        </div>
      </div>
    </div>
  );
}

export default function TrustScoreCard() {
  // Mocked inputs. In a real app, these would come from the backend oracle + integrations.
  const factors = useMemo(
    () => ({
      builderHistory: 92, // reliability and completion record
      loanStatus: 88, // no active liens, bank clearance
      documentValidity: 95, // hash matches registry, signatures valid
      registryConsistency: 90, // timeline consistent with past transfers
    }),
    []
  );

  const score = Math.round(
    factors.builderHistory * 0.25 +
      factors.loanStatus * 0.25 +
      factors.documentValidity * 0.3 +
      factors.registryConsistency * 0.2
  );

  return (
    <section id="trust" className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Property Trust Score</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            A single, easy-to-read indicator combining builder reliability, loan status, and document validity.
            The score is derived from verified data and anchored by cryptographic proofs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 p-6">
          <div className="flex items-center justify-between">
            <Gauge value={score} />
            <div className="ml-6 space-y-2">
              <div className="text-sm text-slate-300">Overall rating</div>
              <div className="text-2xl font-semibold text-indigo-300">{score >= 90 ? 'Excellent' : score >= 75 ? 'Strong' : 'Moderate'}</div>
              <div className="text-xs text-slate-400">Weighted by verified factors</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-4 flex items-center gap-2 text-indigo-300">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Builder history</span>
          </div>
          <div className="flex items-center justify-between text-slate-200">
            <span>Completion & dispute track record</span>
            <span className="font-semibold text-sky-300">{factors.builderHistory}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded bg-slate-800">
            <div className="h-full bg-sky-500" style={{ width: `${factors.builderHistory}%` }} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-4 flex items-center gap-2 text-indigo-300">
            <Banknote className="h-5 w-5" />
            <span className="text-sm font-medium">Loan status</span>
          </div>
          <div className="flex items-center justify-between text-slate-200">
            <span>Active liens / mortgage clearance</span>
            <span className="font-semibold text-sky-300">{factors.loanStatus}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded bg-slate-800">
            <div className="h-full bg-sky-500" style={{ width: `${factors.loanStatus}%` }} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-indigo-300">
            <FileCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Document validity</span>
          </div>
          <div className="flex items-center justify-between text-slate-200">
            <span>Signature and registry hash check</span>
            <span className="font-semibold text-sky-300">{factors.documentValidity}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded bg-slate-800">
            <div className="h-full bg-sky-500" style={{ width: `${factors.documentValidity}%` }} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-4 flex items-center gap-2 text-indigo-300">
            <ScrollText className="h-5 w-5" />
            <span className="text-sm font-medium">Registry consistency</span>
          </div>
          <div className="flex items-center justify-between text-slate-200">
            <span>Transfers and encumbrance timeline</span>
            <span className="font-semibold text-sky-300">{factors.registryConsistency}</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded bg-slate-800">
            <div className="h-full bg-sky-500" style={{ width: `${factors.registryConsistency}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
