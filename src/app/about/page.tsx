import Link from "next/link";
import { BadgeCheck, Handshake, MapPinned } from "lucide-react";

export const metadata = {
  title: "About Us | Lead Edu Services",
  description:
    "Learn about Lead Edu Services and our admissions guidance across Karnataka, built on local expertise and institutional tie-ups.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Karnataka admissions • Trusted guidance
          </div>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            4 Years of Excellence in Karnataka Admissions
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-slate-600">
            Lead Edu Services is built with deep local insight and a
            student-first mindset. For the past years, we’ve helped families
            navigate admissions decisions with clarity — translating ranks,
            preferences, and real-world constraints into a realistic shortlist
            and a counseling-ready plan.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-navy">Our Story</h2>
            <div className="space-y-4 text-sm leading-6 text-slate-600">
              <p>
                We bring a professional approach to admissions guidance,
                grounded in our roots across Bangalore and Karnataka. Over the
                last{" "}
                <span className="font-semibold text-navy">4 years</span>, we’ve
                strengthened our network and built working relationships that
                help students access reliable information and timely updates.
              </p>
              <p>
                With a strong network of college tie-ups across{" "}
                <span className="font-semibold text-navy">Bangalore</span> and
                wider Karnataka, we guide students through shortlisting,
                documentation readiness, and counseling strategy — so decisions
                are made with confidence, not anxiety.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#002147] p-8 text-white">
            <div className="text-sm font-semibold">What we optimize for</div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                Realistic options aligned to rank/score and preferences
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                A calm, clear plan for counseling and documentation
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                Transparent guidance with the student’s future first
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-navy">Key Pillars</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#002147]/5">
                <MapPinned className="h-5 w-5 text-navy" />
              </div>
              <div className="mt-4 text-base font-semibold text-navy">
                Local Expertise
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Deep understanding of the Karnataka education landscape —
                counseling patterns, expectations, and what truly matters.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#002147]/5">
                <Handshake className="h-5 w-5 text-navy" />
              </div>
              <div className="mt-4 text-base font-semibold text-navy">
                Direct Tie-ups
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Direct access to top institutions — enabling more reliable,
                timely guidance and smoother coordination.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#002147]/5">
                <BadgeCheck className="h-5 w-5 text-navy" />
              </div>
              <div className="mt-4 text-base font-semibold text-navy">
                Proven Success
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                4 years of guiding students toward their dream careers with a
                process that’s clear, supportive, and outcome-driven.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-semibold text-navy">Work With Us</div>
              <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-navy">
                Start with your rank — we’ll help you plan the next step.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Use our Rank Predictor to share your expected rank/score and
                preferences. We’ll respond with a realistic shortlist and a
                counseling-ready plan.
              </p>
            </div>

            <Link
              href="/rank-predictor"
              className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Go to Rank Predictor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

