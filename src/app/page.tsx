import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  LineChart,
  Building2,
} from "lucide-react";
import DiscoveryHub from "@/components/DiscoveryHub";
import CourseCatalog from "@/components/CourseCatalog";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="absolute -bottom-24 right-[-10rem] h-80 w-80 rounded-full bg-[#002147]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Karnataka-based education consultancy
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                Make the right college decision with clarity and confidence.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-600">
                Lead Edu Services helps students and parents navigate admissions,
                counseling, and shortlisting with a structured, transparent
                process — from your profile to your final seat.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
                >
                  Get Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/rank-predictor"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Get Started
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <BadgeCheck className="h-4 w-4 text-gold" />
                    Trusted guidance
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Clear recommendations with no unnecessary complexity.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <LineChart className="h-4 w-4 text-gold" />
                    Data-backed shortlisting
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Build options aligned to rank, budget, and preferences.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <CalendarCheck2 className="h-4 w-4 text-gold" />
                    End-to-end support
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    From first call to counseling day, we stay with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiscoveryHub />

      <CourseCatalog />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-navy">
                  Admissions Roadmap
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  A premium, step-by-step approach
                </div>
              </div>
              <div className="rounded-full bg-[#002147]/5 px-3 py-1 text-xs font-semibold text-navy">
                4 Steps
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Profile review",
                  desc: "Understand your goals, constraints, and eligibility.",
                },
                {
                  title: "Smart shortlisting",
                  desc: "Curate colleges aligned to rank, fees, and location.",
                },
                {
                  title: "Documentation",
                  desc: "Stay prepared with a checklist and timelines.",
                },
                {
                  title: "Counseling strategy",
                  desc: "Choose options confidently during seat allotment.",
                },
              ].map((s, idx) => (
                <div
                  key={s.title}
                  className="flex gap-3 rounded-xl border border-slate-200 p-4"
                >
                  <div className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gold text-sm font-semibold text-navy">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      {s.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#002147] p-6 text-white">
            <div className="text-sm font-semibold">Need a quick start?</div>
            <div className="mt-1 text-sm text-white/80">
              Share your rank and preference — we’ll suggest options.
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/rank-predictor"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:opacity-95"
              >
                Try Rank Predictor
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/70">
              Tip: Replace the contact details in the footer with your official
              number and email.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Our Network of Top Institutions in Karnataka
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-7 text-slate-600">
            4 years of building strong institutional tie-ups to ensure your seat
            in the best colleges.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Top Engineering Colleges",
            "Premier Medical Institutes",
            "Leading Management Schools",
            "Trusted Pharmacy Colleges",
            "Reputed Allied Health Programs",
            "Career-Focused Universities",
          ].map((name) => (
            <div
              key={name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#D4AF37]/50 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-[#D4AF37]/15 group-hover:text-navy">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-500 transition group-hover:text-navy">
                    {name}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    Partner logo placeholder
                  </div>
                </div>
              </div>

              <div className="mt-5 h-12 w-full rounded-xl bg-slate-100 transition group-hover:bg-white">
                <div className="flex h-full items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-semibold tracking-wide text-slate-400 grayscale transition group-hover:border-[#D4AF37]/40 group-hover:text-navy group-hover:grayscale-0">
                  LOGO
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16">
        <div className="rounded-2xl bg-[#002147] p-8 text-white sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to Secure Your Future?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
                Start with your expected rank/score and preferences. We’ll help
                you shortlist the right options and plan the next steps for
                counseling.
              </p>
            </div>

            <Link
              href="/rank-predictor"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Predict My College
            </Link>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
}
