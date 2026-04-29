import Link from "next/link";
import { Brain, Sparkles, Zap, Workflow, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Artha AI Academy | Future‑Proof Your Career",
  description:
    "Artha AI Academy offers AI coaching for Indian corporate professionals and freelancers. Learn the Mind to Market framework: concept mastery, prompt engineering, and market execution.",
};

export default function ArthaAiPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#002147]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <Sparkles className="h-4 w-4 text-gold" />
                Artha AI Academy
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#ffe39a] to-[#D4AF37] bg-clip-text text-transparent">
                  Artha AI Academy:
                </span>{" "}
                Future‑Proof Your Career
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white/80">
                The definitive AI coaching for Indian corporate professionals and
                freelancers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
                >
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#framework"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Framework
                </Link>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Brain className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Outcomes you can feel
                    </div>
                    <div className="mt-1 text-sm text-white/75">
                      Faster workflows. Better outputs. Real market leverage.
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Zap className="h-4 w-4 text-gold" />
                      Practical, not theoretical
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/75">
                      Systems, prompts, and templates designed for work.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Workflow className="h-4 w-4 text-gold" />
                      Save 10+ hours/week
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/75">
                      Automations that remove repetitive effort.
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-xs text-white/60">
                  Note: This is a new initiative by Lead Edu Services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            The “Mind to Market” Framework
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-7 text-slate-600">
            A simple 3-step process that takes you from understanding AI to
            shipping real outcomes in your workflow and market.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#002147]/5">
              <Brain className="h-5 w-5 text-navy" />
            </div>
            <div className="mt-4 text-sm font-semibold text-navy">
              Step 1: Concept Mastery
            </div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Learn the LLM landscape — what models are, how they behave, and
              where they create business value.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#002147]/5">
              <Sparkles className="h-5 w-5 text-navy" />
            </div>
            <div className="mt-4 text-sm font-semibold text-navy">
              Step 2: Prompt Engineering
            </div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Craft high-precision instructions with reusable prompt systems that
              improve quality and consistency.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#002147]/5">
              <Zap className="h-5 w-5 text-navy" />
            </div>
            <div className="mt-4 text-sm font-semibold text-navy">
              Step 3: Market Execution
            </div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Automate your workflow to save{" "}
              <span className="font-semibold text-navy">10+ hours/week</span> and
              deliver outcomes faster.
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Users className="h-4 w-4 text-gold" />
            Who is this for?
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-600">
            Built for professionals who want leverage — not hype.
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Corporate Executives",
                desc: "Use AI to speed up analysis, reporting, and decision-making.",
              },
              {
                title: "Creative Freelancers",
                desc: "Ship better drafts, concepts, and client deliverables faster.",
              },
              {
                title: "Agencies",
                desc: "Standardize quality across teams with repeatable AI systems.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-base font-semibold text-navy">{c.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Waitlist */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16">
        <div className="rounded-2xl border border-[#D4AF37]/55 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-semibold text-navy">
                Pricing / Waitlist
              </div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-navy">
                Be first to access the next cohort.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                We’re opening limited seats to ensure outcomes. Join the waitlist
                and we’ll share cohort dates, pricing, and what to prepare.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

