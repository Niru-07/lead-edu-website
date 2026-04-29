import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-base font-semibold text-navy">
              Lead Edu Services
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Education consultancy based in Karnataka — admissions guidance,
              counseling, and a clear plan from shortlist to final choice.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-navy">Quick Links</div>
            <div className="grid gap-2 text-sm">
              <Link className="text-slate-700 hover:text-navy" href="/">
                Home
              </Link>
              <Link className="text-slate-700 hover:text-navy" href="/services">
                Services
              </Link>
              <Link
                className="text-slate-700 hover:text-navy"
                href="/rank-predictor"
              >
                Rank Predictor
              </Link>
              <Link className="text-slate-700 hover:text-navy" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-navy">Contact</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>Karnataka, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />
                <span>hello@leadeduservices.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Lead Edu Services.</span>
          <span className="text-slate-500">Professional guidance. Clear outcomes.</span>
        </div>
      </div>
    </footer>
  );
}

