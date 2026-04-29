import Link from "next/link";
import {
  BadgeCheck,
  ClipboardList,
  GraduationCap,
  Lock,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Karnataka College Rank Predictor 2026 | Lead Edu Services",
  description:
    "Use Lead Edu Services' Karnataka College Rank Predictor 2026 to explore college options based on your expected rank/score and preferences.",
};

export default function RankPredictorPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
            <Sparkles className="h-4 w-4 text-gold" />
            Lead generation tool • 2026 Admissions
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Karnataka College Rank Predictor 2026
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-slate-600">
            Share your expected rank/score and preferences. We’ll help you build
            a realistic shortlist and suggest next steps for counseling.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-navy">
                Why Use Our Predictor
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This isn’t just a calculator — it’s a structured way to convert
                your rank/score into a practical, counseling-ready plan.
              </p>

              <div className="mt-5 grid gap-4">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <ClipboardList className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Shortlist that matches your profile
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      We consider exam type, expected rank/score, branch choice,
                      and feasibility to avoid unrealistic options.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <GraduationCap className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Counseling-first guidance
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Get clarity on what to prioritize during option entry and
                      how to prepare your documentation timeline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <BadgeCheck className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Transparent recommendations
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Clean, understandable suggestions — no pressure, no
                      confusion, just the next best actions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <Lock className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Privacy-respectful
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      We only use your details to share predictions and guidance
                      related to admissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-navy">
                Prefer direct help?
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                You can also{" "}
                <Link className="font-semibold text-navy underline" href="/contact">
                  book a consultation
                </Link>{" "}
                to discuss your options in detail.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-navy">
              Get Your College Prediction
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill in the details below. We’ll respond with a shortlist and next
              steps.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    autoComplete="name"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Entrance Exam
                  </label>
                  <select
                    name="exam"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select exam
                    </option>
                    <option value="KCET">KCET</option>
                    <option value="COMEDK">COMEDK</option>
                    <option value="NEET">NEET</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Expected Rank / Score
                  </label>
                  <input
                    type="text"
                    name="rankOrScore"
                    placeholder="e.g., 12,340 or 485"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Preferred Branch
                  </label>
                  <input
                    type="text"
                    name="preferredBranch"
                    placeholder="Engineering, Medical, Pharmacy, MBA, etc."
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
              >
                Predict My College
              </button>

              <p className="text-xs leading-5 text-slate-500">
                By submitting, you agree to be contacted for admissions guidance.
                We do not sell your information.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

