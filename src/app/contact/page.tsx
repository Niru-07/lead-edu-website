import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Lead Edu Services",
  description:
    "Get in touch with Lead Edu Services for admissions guidance across Karnataka. Contact details and inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-slate-600">
            Tell us your requirement and we’ll guide you with a clear, practical
            next step for admissions and counseling.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-navy">Get in Touch</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We’re based in Bangalore and support students across Karnataka.
                Reach out by phone or email, or use the inquiry form.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <MapPin className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Office Address
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      Bangalore, Karnataka
                      <span className="text-slate-400">
                        {" "}
                        (Area placeholder)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <Phone className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">Phone</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      +91{" "}
                      <span className="text-slate-400">
                        (Phone placeholder)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#002147]/5">
                    <Mail className="h-5 w-5 text-navy" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy">Email</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      info@leadeduservices.com
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#002147] p-5 text-white">
                <div className="text-sm font-semibold">
                  Want faster recommendations?
                </div>
                <p className="mt-1 text-sm leading-6 text-white/80">
                  Use the Rank Predictor and we’ll share a shortlist based on
                  your expected rank/score.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-navy">Inquiry Form</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Share a few details and your message. We’ll get back with the
              right guidance.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone
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

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us your exam, expected rank/score, preferred branch, and what kind of help you need."
                    rows={5}
                    className="mt-2 w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Send Inquiry
              </button>

              <p className="text-xs leading-5 text-slate-500">
                We do not sell your information. We only contact you regarding
                admissions guidance.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-100 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-navy">
                Visit Our Bangalore Office
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Google Maps placeholder (we’ll embed the map next).
              </div>
            </div>
            <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-white text-navy shadow-sm sm:inline-flex">
              <MapPin className="h-5 w-5 text-gold" />
            </div>
          </div>

          <div className="mt-5 h-56 w-full rounded-xl border border-dashed border-slate-300 bg-slate-200/60" />
        </div>
      </section>
    </div>
  );
}

