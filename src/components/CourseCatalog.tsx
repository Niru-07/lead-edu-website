"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Landmark,
  Leaf,
  Monitor,
  Palette,
  Plane,
  Scale,
  Stethoscope,
  University,
  Wallet,
  Sparkles,
} from "lucide-react";

type CategoryId =
  | "engineering"
  | "medical"
  | "commerce"
  | "arts"
  | "science"
  | "law"
  | "design"
  | "aviation"
  | "education"
  | "professional"
  | "agriculture"
  | "diploma"
  | "online";

type CourseCategory = {
  id: CategoryId;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  ug: string[];
  pg: string[];
  aiEnhanced: boolean;
};

const CATEGORIES: CourseCategory[] = [
  {
    id: "engineering",
    title: "Engineering",
    icon: Cpu,
    ug: ["B.E. / B.Tech", "B.Arch", "BCA (Tech Track)"],
    pg: ["M.E. / M.Tech", "MCA", "PhD (Engineering)"],
    aiEnhanced: true,
  },
  {
    id: "medical",
    title: "Medical",
    icon: Stethoscope,
    ug: ["MBBS", "BDS", "BAMS / BHMS"],
    pg: ["MD / MS", "MDS", "MHA (Hospital Administration)"],
    aiEnhanced: false,
  },
  {
    id: "commerce",
    title: "Commerce",
    icon: Wallet,
    ug: ["B.Com", "BBA", "BMS"],
    pg: ["M.Com", "MBA / PGDM", "MSc (Finance / Analytics)"],
    aiEnhanced: false,
  },
  {
    id: "arts",
    title: "Arts",
    icon: Landmark,
    ug: ["BA (Psychology / Economics / Sociology)", "BA (English)", "BFA"],
    pg: ["MA (Psychology / Economics)", "MA (English)", "MSW"],
    aiEnhanced: false,
  },
  {
    id: "science",
    title: "Science",
    icon: University,
    ug: ["BSc", "BSc (CS / Data)", "BSc (Biotech)"],
    pg: ["MSc", "MSc (Data Science)", "PhD (Science)"],
    aiEnhanced: true,
  },
  {
    id: "law",
    title: "Law",
    icon: Scale,
    ug: ["BA LLB", "BBA LLB", "LLB"],
    pg: ["LLM", "MBA (Business Law Track)"],
    aiEnhanced: false,
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    ug: ["B.Des", "BFA (Applied Arts)", "UI/UX (Degree Track)"],
    pg: ["M.Des", "MA (Design)", "PG Diploma (UX / Product)"],
    aiEnhanced: true,
  },
  {
    id: "aviation",
    title: "Aviation",
    icon: Plane,
    ug: ["BSc (Aviation)", "BBA (Aviation Management)", "CPL (Pilot Training)"],
    pg: ["MBA (Aviation)", "MSc (Aviation / Airport Ops)"],
    aiEnhanced: false,
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    ug: ["B.Ed", "BA/BSc + B.Ed (Integrated)", "D.El.Ed"],
    pg: ["M.Ed", "MA (Education)", "PG Diploma (Counseling)"],
    aiEnhanced: false,
  },
  {
    id: "professional",
    title: "Professional",
    icon: Briefcase,
    ug: ["CA Foundation Track", "CS Foundation Track", "CMA Foundation Track"],
    pg: ["CA Final Track", "CS Professional", "CMA Final Track"],
    aiEnhanced: false,
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: Leaf,
    ug: ["BSc (Agriculture)", "BSc (Horticulture)", "BTech (Food Tech)"],
    pg: ["MSc (Agriculture)", "MTech (Food Tech)", "PhD (Agri Sciences)"],
    aiEnhanced: false,
  },
  {
    id: "diploma",
    title: "Diploma",
    icon: BookOpen,
    ug: ["Diploma (Engineering)", "Diploma (Pharmacy)", "Diploma (Hotel Mgmt)"],
    pg: ["Lateral Entry (B.E./B.Tech)", "Advanced Diploma (Specializations)"],
    aiEnhanced: false,
  },
  {
    id: "online",
    title: "Online",
    icon: Monitor,
    ug: ["Online UG (BBA / BCA / BA)", "Micro-credentials (Industry)", "Bootcamps"],
    pg: ["Online PG (MBA / MSc)", "Professional Certificates", "Career Switch Tracks"],
    aiEnhanced: true,
  },
];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);

  const active = useMemo(
    () =>
      activeCategory ? CATEGORIES.find((c) => c.id === activeCategory) : null,
    [activeCategory]
  );

  const scrollToPanel = () => {
    document
      .getElementById("course-catalog-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Course Catalog
          </h2>
          <p className="max-w-3xl text-pretty text-base leading-7 text-slate-600">
            Explore streams, then quickly view common UG/PG pathways. Built like
            a premium directory — fast, clean, and practical.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div>
            {/* Category grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                const isActive = c.id === active?.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() =>
                      setActiveCategory((prev) => {
                        const next = prev === c.id ? null : c.id;
                        if (next) {
                          // Ensure users immediately see the expanded view.
                          setTimeout(scrollToPanel, 0);
                        }
                        return next;
                      })
                    }
                    className={[
                      "text-left rounded-2xl border bg-white p-5 transition",
                      isActive
                        ? "border-[#D4AF37]/60 shadow-sm"
                        : "border-slate-200 hover:border-[#D4AF37]/45 hover:shadow-sm",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#002147]/5">
                        <Icon className="h-5 w-5 text-navy" />
                      </span>
                      {c.aiEnhanced ? (
                        <span className="rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-2.5 py-1 text-[11px] font-semibold text-navy">
                          Artha AI
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-4 text-sm font-semibold text-navy">
                      {c.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Click to view UG/PG courses
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick-view list */}
            {active ? (
              <div
                id="course-catalog-panel"
                className="mt-6 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      Quick‑View: {active.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Common course paths (UG / PG).
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {active.aiEnhanced ? (
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/55 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-navy">
                        <Sparkles className="h-4 w-4 text-gold" />
                        Artha AI Enhanced Career Path Available
                      </div>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => {
                        document
                          .getElementById("lead-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-navy transition hover:bg-slate-50"
                    >
                      Enquire about this Stream
                    </button>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">
                      UG Courses
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {active.ug.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">
                      PG Courses
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {active.pg.map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div
                id="course-catalog-panel"
                className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600"
              >
                Select a stream above to view the UG/PG course paths.
              </div>
            )}

            {/* Reality check footer */}
            <div className="mt-6 rounded-2xl border border-[#D4AF37]/55 bg-white p-6">
              <div className="text-sm font-semibold text-navy">
                Consultant&apos;s Note
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                With 6,000+ colleges in Karnataka, the seat you get matters less
                than the skills you build. For any path you choose, Artha AI
                provides the skills to dominate the Tier-1 job market.
              </p>
            </div>
          </div>

          {/* Big picture sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-navy">Quick Insights</div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="font-semibold text-navy">6,000+</span>{" "}
                  Colleges across Karnataka
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="font-semibold text-navy">
                    Entrance Exam Guide
                  </span>
                  : KCET, COMEDK, NEET
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  Search{" "}
                  <span className="font-semibold text-navy">1,000s</span> of
                  specialized degree paths
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

