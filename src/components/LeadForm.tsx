"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Shield } from "lucide-react";

const STREAMS = [
  "Engineering",
  "Medical",
  "Commerce",
  "Arts",
  "Science",
  "Law",
  "Design",
  "Aviation",
  "Education",
  "Professional",
  "Agriculture",
  "Diploma",
  "Online",
] as const;

const STATUSES = [
  "12th Student",
  "Graduate",
  "Working Professional",
] as const;

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [countryCode] = useState("+91");
  const [form, setForm] = useState({
    fullName: "",
    whatsapp: "",
    stream: "",
    status: "",
    arthaAi: false,
  });

  const isValid = useMemo(() => {
    return (
      form.fullName.trim().length >= 2 &&
      form.whatsapp.trim().length >= 8 &&
      form.stream &&
      form.status
    );
  }, [form]);

  if (submitted) {
    return (
      <section id="lead-form" className="bg-[#002147]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-white sm:p-10">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <CheckCircle2 className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h2 className="text-balance text-2xl font-semibold tracking-tight">
                  Thank you! An expert from Lead Edu / Artha AI will contact you
                  on WhatsApp within 24 hours.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                  If you want faster recommendations, try the Rank Predictor and
                  share your expected rank/score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="bg-[#002147]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <Shield className="h-4 w-4 text-gold" />
              Lead Capture Form
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get a personalized admissions plan — in one request.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/75">
              Tell us your stream and current status. We’ll connect with you on
              WhatsApp and help you choose the right path — including Artha AI
              upskilling if you want career leverage.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white shadow-sm">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (!isValid) return;
                setSubmitted(true);
              }}
            >
              <div>
                <label className="text-sm font-medium text-white/85">
                  Full Name
                </label>
                <input
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, fullName: e.target.value }))
                  }
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/55 outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/85">
                  WhatsApp Number
                </label>
                <div className="mt-2 flex overflow-hidden rounded-md border border-white/15 bg-white/10">
                  <div className="flex items-center gap-2 border-r border-white/15 px-3 text-sm font-semibold text-white/80">
                    {countryCode}
                  </div>
                  <input
                    value={form.whatsapp}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, whatsapp: e.target.value }))
                    }
                    type="tel"
                    name="whatsapp"
                    inputMode="numeric"
                    placeholder="XXXXX XXXXX"
                    autoComplete="tel"
                    className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/55 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-white/85">
                    Interested Stream
                  </label>
                  <select
                    value={form.stream}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, stream: e.target.value }))
                    }
                    name="stream"
                    className="mt-2 w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  >
                    <option value="" disabled className="text-slate-900">
                      Select stream
                    </option>
                    {STREAMS.map((s) => (
                      <option key={s} value={s} className="text-slate-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/85">
                    Current Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, status: e.target.value }))
                    }
                    name="status"
                    className="mt-2 w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  >
                    <option value="" disabled className="text-slate-900">
                      Select status
                    </option>
                    {STATUSES.map((s) => (
                      <option key={s} value={s} className="text-slate-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
                <input
                  checked={form.arthaAi}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, arthaAi: e.target.checked }))
                  }
                  type="checkbox"
                  name="arthaAi"
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 accent-[#D4AF37]"
                />
                <span className="text-sm text-white/85">
                  I want to enhance my degree with AI skills
                </span>
              </label>

              <button
                type="submit"
                disabled={!isValid}
                className={[
                  "inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition",
                  !isValid
                    ? "bg-white/10 text-white/50"
                    : "bg-gold text-navy hover:shadow-[0_0_0_6px_rgba(212,175,55,0.18)] hover:opacity-95",
                ].join(" ")}
              >
                Submit Request
              </button>

              <p className="text-xs leading-5 text-white/70">
                Your data is safe. We only use it to provide personalized
                education guidance.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

