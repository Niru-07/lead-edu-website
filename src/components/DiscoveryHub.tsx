"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, MapPin, Search, Star, Sparkles } from "lucide-react";

type Tier = "Tier 1" | "Tier 2" | "Tier 3";

type College = {
  id: string;
  name: string;
  location: string;
  rating: number;
  specializations: string[];
  campusImageLabel: string;
  tier: Tier;
  arthaFeatured?: boolean;
};

const CATEGORIES = [
  "Engineering",
  "MBA/PGDM",
  "Medical",
  "Allied Health",
  "AI & Data Science",
] as const;

const COLLEGES: College[] = [
  // TIER 1 - The Giants
  {
    id: "iisc-bangalore",
    name: "IISc Bangalore",
    location: "Bangalore",
    tier: "Tier 1",
    specializations: ["Research", "Science", "AI"],
    rating: 5.0,
    arthaFeatured: true,
    campusImageLabel: "IISc Bangalore Campus",
  },
  {
    id: "nitk-surathkal-mangalore",
    name: "NITK Surathkal",
    location: "Mangalore",
    tier: "Tier 1",
    specializations: ["Engineering", "Technology"],
    rating: 4.9,
    arthaFeatured: true,
    campusImageLabel: "NITK Surathkal Campus",
  },
  {
    id: "mahe-manipal",
    name: "Manipal (MAHE)",
    location: "Manipal",
    tier: "Tier 1",
    specializations: ["Medical", "Engineering", "Management"],
    rating: 4.8,
    arthaFeatured: false,
    campusImageLabel: "Manipal (MAHE) Campus",
  },
  {
    id: "iiit-bangalore",
    name: "IIIT Bangalore",
    location: "Bangalore",
    tier: "Tier 1",
    specializations: ["IT", "Data Science", "AI"],
    rating: 4.9,
    arthaFeatured: true,
    campusImageLabel: "IIIT Bangalore Campus",
  },
  {
    id: "nimhans-bangalore",
    name: "NIMHANS",
    location: "Bangalore",
    tier: "Tier 1",
    specializations: ["Medical", "Psychology"],
    rating: 5.0,
    arthaFeatured: false,
    campusImageLabel: "NIMHANS Campus",
  },
  {
    id: "christ-university-bangalore",
    name: "Christ University",
    location: "Bangalore",
    tier: "Tier 1",
    specializations: ["Commerce", "Arts", "Law"],
    rating: 4.7,
    arthaFeatured: false,
    campusImageLabel: "Christ University Campus",
  },
  {
    id: "st-johns-medical-bangalore",
    name: "St. John’s Medical",
    location: "Bangalore",
    tier: "Tier 1",
    specializations: ["Medical", "Nursing"],
    rating: 4.9,
    arthaFeatured: false,
    campusImageLabel: "St. John’s Medical Campus",
  },

  // TIER 2 - Top 11-25
  {
    id: "rvce-bangalore",
    name: "RVCE",
    location: "Bangalore",
    tier: "Tier 2",
    specializations: ["Engineering", "AI"],
    rating: 4.8,
    arthaFeatured: true,
    campusImageLabel: "RVCE Campus",
  },
  {
    id: "pes-university-bangalore",
    name: "PES University",
    location: "Bangalore",
    tier: "Tier 2",
    specializations: ["Engineering", "Management"],
    rating: 4.6,
    arthaFeatured: true,
    campusImageLabel: "PES University Campus",
  },
  {
    id: "msrit-bangalore",
    name: "MS Ramaiah (MSRIT)",
    location: "Bangalore",
    tier: "Tier 2",
    specializations: ["Engineering", "Medical"],
    rating: 4.7,
    arthaFeatured: true,
    campusImageLabel: "MS Ramaiah (MSRIT) Campus",
  },
  {
    id: "bmsce-bangalore",
    name: "BMSCE",
    location: "Bangalore",
    tier: "Tier 2",
    specializations: ["Engineering"],
    rating: 4.6,
    arthaFeatured: false,
    campusImageLabel: "BMSCE Campus",
  },
  {
    id: "nie-mysore-tier2",
    name: "NIE Mysore",
    location: "Mysore",
    tier: "Tier 2",
    specializations: ["Engineering"],
    rating: 4.5,
    arthaFeatured: false,
    campusImageLabel: "NIE Mysore Campus",
  },
  {
    id: "sjce-mysore",
    name: "SJCE Mysore",
    location: "Mysore",
    tier: "Tier 2",
    specializations: ["Engineering", "Science"],
    rating: 4.5,
    arthaFeatured: false,
    campusImageLabel: "SJCE Mysore Campus",
  },

  // TIER 3 - Top 26-50
  {
    id: "alliance-university-bangalore",
    name: "Alliance University",
    location: "Bangalore",
    tier: "Tier 3",
    specializations: ["Business", "Law"],
    rating: 4.3,
    arthaFeatured: false,
    campusImageLabel: "Alliance University Campus",
  },
  {
    id: "nie-mysore-tier3",
    name: "NIE Mysore",
    location: "Mysore",
    tier: "Tier 3",
    specializations: ["Engineering"],
    rating: 4.4,
    arthaFeatured: false,
    campusImageLabel: "NIE Mysore Campus",
  },
  {
    id: "vvce-mysore",
    name: "Vidyavardhaka (VVCE)",
    location: "Mysore",
    tier: "Tier 3",
    specializations: ["Engineering"],
    rating: 4.2,
    arthaFeatured: false,
    campusImageLabel: "VVCE Campus",
  },
];

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export default function DiscoveryHub() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return COLLEGES.filter((c) => {
      const matchesCategory = (() => {
        if (!activeCategory) return true;
        const specs = c.specializations.map(normalize);
        const cat = normalize(activeCategory);
        if (cat === normalize("AI & Data Science")) {
          return specs.includes("ai") || specs.includes("data science");
        }
        return specs.includes(cat);
      })();
      if (!q) return matchesCategory;

      // Search checks both college name and location (and specializations too).
      const hay = normalize([c.name, c.location, ...c.specializations].join(" "));
      return matchesCategory && hay.includes(q);
    });
  }, [query, activeCategory]);

  return (
    <section className="bg-white">
      {/* Navy header */}
      <div className="bg-[#002147]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                College & Course Discovery Hub
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
                Search institutions and explore specializations. Filter quickly
                and jump into course discovery.
              </p>
            </div>

            <span className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 md:inline-flex">
              Lead Edu Services
            </span>
          </div>

          {/* Search hero */}
          <div className="mt-7">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D4AF37]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Colleges or Courses"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-11 py-3 text-sm text-white placeholder:text-white/60 shadow-sm outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
              />
            </div>

            {/* Specialization chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className={[
                  "rounded-full border px-3 py-1 text-xs font-semibold transition",
                  activeCategory === null
                    ? "border-[#D4AF37]/50 bg-[#D4AF37] text-navy"
                    : "border-white/15 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                All
              </button>
              {CATEGORIES.map((c) => {
                const active = activeCategory === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActiveCategory(active ? null : c)}
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-semibold transition",
                      active
                        ? "border-[#D4AF37]/50 bg-[#D4AF37] text-navy"
                        : "border-white/15 bg-white/5 text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured grid */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-navy">Top Institutions</div>
            <div className="mt-1 text-sm text-slate-600">
              Showing{" "}
              <span className="font-semibold text-navy">{filtered.length}</span>{" "}
              result{filtered.length === 1 ? "" : "s"}
              {activeCategory ? (
                <>
                  {" "}
                  for{" "}
                  <span className="font-semibold text-navy">{activeCategory}</span>
                </>
              ) : null}
              .
            </div>
          </div>

          <Link
            href="/rank-predictor"
            className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:opacity-90"
          >
            Predict My College
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 9).map((c, idx) => {
            const isTopRanked = idx < 10;
            return (
              <article
                key={c.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* campus image placeholder */}
                <div className="relative h-40 bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200/70 to-slate-100" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    <BookOpen className="h-3.5 w-3.5 text-gold" />
                    Campus
                  </div>
                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-slate-500">
                    {c.campusImageLabel}
                  </div>

                  {isTopRanked ? (
                    <div className="absolute left-4 bottom-10 inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/45 bg-white px-2.5 py-1 text-[11px] font-semibold text-navy">
                      {c.tier === "Tier 1" ? "Top Ranked" : c.tier} • {c.tier}
                    </div>
                  ) : null}

                  {c.arthaFeatured ? (
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/40 bg-white px-2.5 py-1 text-[11px] font-semibold text-navy">
                      <Sparkles className="h-3.5 w-3.5 text-gold" />
                      Featured Academy
                    </div>
                  ) : null}
                </div>

                <div className="p-5">
                  <div className="text-base font-semibold tracking-tight text-navy">
                    {c.name}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {c.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-gold" />
                      <span className="font-semibold text-navy">
                        {c.rating.toFixed(1)}
                      </span>
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-slate-500">
                      Top Specializations
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {c.specializations.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      href="/rank-predictor"
                      className="inline-flex w-full items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:opacity-90"
                    >
                      View Courses
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No matches found. Try a different keyword or clear filters.
          </div>
        ) : null}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold text-navy">Industry Insights</div>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <span className="font-semibold text-navy">
                300+ Engineering Colleges
              </span>{" "}
              in Karnataka
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <span className="font-semibold text-navy">120+</span> in Bangalore
              alone
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              Home to{" "}
              <span className="font-semibold text-navy">IISc</span> (#1 in India)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

