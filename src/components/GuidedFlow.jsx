import React, { useMemo, useState } from 'react';
import { ShieldCheck, Banknote, FileCheck, ScrollText, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { key: 'verification', title: 'Verification', icon: ShieldCheck, desc: 'KYC, title check, and builder history verification.' },
  { key: 'loan', title: 'Loan Check', icon: Banknote, desc: 'Bank integration to validate outstanding loans and eligibility.' },
  { key: 'escrow', title: 'Escrow', icon: FileCheck, desc: 'Funds held securely and released when milestones are met.' },
  { key: 'registration', title: 'Registration', icon: ScrollText, desc: 'Transfer and registry updates with tamper-proof proofs.' },
];

function Stepper({ current }) {
  return (
    <div className="relative mb-8 flex items-center justify-between">
      <div className="absolute left-0 right-0 top-1/2 -z-[0] h-0.5 -translate-y-1/2 bg-slate-800" />
      {steps.map((s, idx) => {
        const Icon = s.icon;
        const active = idx <= current;
        return (
          <div key={s.key} className="relative z-[1] flex flex-1 items-center justify-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                active ? 'border-sky-400 bg-sky-500/20' : 'border-slate-700 bg-slate-800'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'text-sky-300' : 'text-slate-400'}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StepContent({ index }) {
  const content = useMemo(() => [
    {
      title: 'Identity & Title Verification',
      bullets: [
        'KYC verified with government IDs',
        'Title chain validated via registries',
        'Builder compliance and litigation scan',
      ],
    },
    {
      title: 'Bank Loan Status & Eligibility',
      bullets: [
        'Outstanding liens and mortgages checked',
        'Pre-approval eligibility assessed',
        'Automated risk and affordability scoring',
      ],
    },
    {
      title: 'Escrow & Milestone Tracking',
      bullets: [
        'Funds locked in compliant escrow',
        'Oracle-confirmed milestone releases',
        'Real-time notifications for both parties',
      ],
    },
    {
      title: 'Registration & Final Transfer',
      bullets: [
        'Digital registry update prepared',
        'Ownership token transfer executed',
        'Immutable audit record anchored on-chain',
      ],
    },
  ], []);

  const item = content[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-slate-200"
      >
        <div className="mb-2 flex items-center gap-2 text-indigo-300">
          <BadgeCheck className="h-5 w-5" />
          <span className="text-sm font-medium">Step {index + 1} of {steps.length}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GuidedFlow() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="flow" className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Guided Transaction Flow</h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Follow a clear, step-by-step path from verification to registration. We surface only what matters at each
          stage, backed by secure integrations and cryptographic proofs.
        </p>
      </div>

      <Stepper current={current} />
      <StepContent index={current} />

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
