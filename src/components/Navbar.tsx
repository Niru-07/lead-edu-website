"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/rank-predictor", label: "Rank Predictor" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-sm font-semibold text-white">
              <span className="absolute inset-0 rounded-lg ring-2 ring-[#D4AF37]/35" />
              <span className="relative">LE</span>
            </span>
            <span className="font-semibold tracking-tight text-navy">
              Lead Edu Services
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(l.href)
                    ? "bg-slate-100 text-navy"
                    : "text-slate-700 hover:bg-slate-50 hover:text-navy",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              <PhoneCall className="h-4 w-4" />
              Get Consultation
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="pb-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(l.href)
                      ? "bg-slate-100 text-navy"
                      : "text-slate-700 hover:bg-slate-50 hover:text-navy",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:opacity-90"
              >
                <PhoneCall className="h-4 w-4" />
                Get Consultation
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

