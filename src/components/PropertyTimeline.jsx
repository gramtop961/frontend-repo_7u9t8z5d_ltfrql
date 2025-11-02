import React from 'react';
import { Calendar, ShieldCheck, Banknote, FileCheck, ScrollText } from 'lucide-react';

const events = [
  {
    type: 'verification',
    title: 'Due diligence completed',
    desc: 'Identity, title chain, and builder compliance verified by Oracle.',
    ts: '2025-10-21T10:15:00Z',
    hash: '0x8f1e...c9ab',
    icon: ShieldCheck,
    color: 'text-sky-300',
  },
  {
    type: 'loan',
    title: 'Bank loan clearance',
    desc: 'No active liens found. Eligibility score issued by partner bank.',
    ts: '2025-10-23T09:02:00Z',
    hash: '0xa2b4...1d77',
    icon: Banknote,
    color: 'text-indigo-300',
  },
  {
    type: 'escrow',
    title: 'Escrow funded',
    desc: 'Funds locked. Release governed by milestone smart contract.',
    ts: '2025-10-28T13:40:00Z',
    hash: '0x9dce...f034',
    icon: FileCheck,
    color: 'text-blue-300',
  },
  {
    type: 'registration',
    title: 'Ownership transfer executed',
    desc: 'Registry update confirmed. Property token transferred to buyer.',
    ts: '2025-11-01T11:58:00Z',
    hash: '0xb1aa...99ce',
    icon: ScrollText,
    color: 'text-teal-300',
  },
];

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function PropertyTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-6 flex items-center gap-2 text-indigo-300">
        <Calendar className="h-5 w-5" />
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Interactive Property Timeline</h2>
      </div>
      <p className="mb-8 max-w-3xl text-slate-300">
        Scroll through the verifiable history of status changes, banking updates, and ownership transfers.
        Every event carries a blockchain timestamp and proof hash.
      </p>

      <div className="max-h-[28rem] overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <ol className="relative ml-4 border-l border-slate-700">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <li key={i} className="mb-8 ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 ring-2 ring-indigo-500/40">
                  <Icon className={`h-3.5 w-3.5 ${e.color}`} />
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-white">{e.title}</h3>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">{formatTime(e.ts)}</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{e.desc}</p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300">
                  <span className="font-mono">{e.hash}</span>
                  <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[10px] text-indigo-300">on-chain</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
