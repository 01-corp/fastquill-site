/*
 * FastQuill — Home Page
 * Design: "Dispatch System" — operational editorial minimalism
 * Sections: Nav, Hero, Problem, What it does, Changes, How it works,
 *           Safety, Outcome, Social proof, Pricing, Final CTA, Footer
 */

import { useEffect, useRef } from "react";
import {
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  Shield,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

// Asset URLs (tied to webdev project lifecycle)
const CLINIC_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663140832125/guBkUaYJpyn5KTAyF3stuT/fastquill-clinic-abstract-cVN6bESTY5YEtPk7mehhDi.webp";

// ─── Scroll reveal hook ────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Reusable FadeUp wrapper ───────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Section label ─────────────────────────────────────────────────────────
function SectionLabel({ num, text }: { num: string; text: string }) {
  return (
    <div className="section-label flex items-center gap-3 mb-6">
      <span className="text-[oklch(0.32_0.09_264)] font-mono">{num}</span>
      <span className="w-8 h-px bg-[oklch(0.32_0.09_264)] opacity-40 inline-block" />
      <span>{text}</span>
    </div>
  );
}

// ─── Simulated Inbox Panel ─────────────────────────────────────────────────
function InboxDemo() {
  return (
    <div className="inbox-panel w-full max-w-[420px]">
      {/* Header */}
      <div className="inbox-header">
        <span>Patient Inbox</span>
        <span
          className="flex items-center gap-1.5 text-xs font-mono opacity-80"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          LIVE
        </span>
      </div>

      {/* Thread meta */}
      <div className="px-4 py-3 border-b border-[oklch(0.90_0.005_264)]">
        <div
          className="text-xs font-semibold text-[oklch(0.13_0.01_264)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Marcus T. — Implant Consultation
        </div>
        <div
          className="text-xs text-[oklch(0.50_0.01_264)] mt-0.5"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          via website contact form
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 flex flex-col gap-3 bg-white min-h-[260px]">
        {/* Patient message */}
        <div className="flex flex-col">
          <div className="msg-patient" style={{ fontFamily: "var(--font-body)" }}>
            Hi, I'm interested in getting dental implants. What are my options
            and how much does it cost?
          </div>
          <div className="msg-time">Marcus T. · 9:04 AM</div>
        </div>

        {/* FastQuill response */}
        <div className="flex flex-col items-end">
          <div className="msg-fastquill" style={{ fontFamily: "var(--font-body)" }}>
            <div
              className="text-[0.65rem] font-semibold mb-1 opacity-70 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              FastQuill
            </div>
            Hi Marcus — thanks for reaching out. We'd love to walk you through
            your implant options. I've found a few open consultation slots this
            week. Would Thursday at 2 PM or Friday at 10 AM work for you?
          </div>
          <div className="msg-time-white">9:05 AM · 58 seconds later</div>
        </div>

        {/* Patient reply */}
        <div className="flex flex-col">
          <div className="msg-patient" style={{ fontFamily: "var(--font-body)" }}>
            Friday at 10 works great, thank you!
          </div>
          <div className="msg-time">Marcus T. · 9:07 AM</div>
        </div>

        {/* Booking confirmation */}
        <div className="flex flex-col items-end">
          <div className="msg-fastquill" style={{ fontFamily: "var(--font-body)" }}>
            <div
              className="text-[0.65rem] font-semibold mb-1 opacity-70 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              FastQuill
            </div>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-green-300 shrink-0" />
              Confirmed — Friday, 10:00 AM. A calendar invite has been sent to
              your email.
            </span>
          </div>
          <div className="msg-time-white">9:07 AM</div>
        </div>
      </div>

      {/* Footer stat */}
      <div
        className="px-4 py-2.5 bg-[oklch(0.975_0.002_264)] border-t border-[oklch(0.90_0.005_264)] flex items-center justify-between"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="text-[0.65rem] text-[oklch(0.50_0.01_264)] uppercase tracking-widest">
          Response time
        </span>
        <span className="text-[0.75rem] font-medium text-[oklch(0.32_0.09_264)]">
          58 seconds
        </span>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[oklch(0.13_0.01_264)]">
      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[oklch(0.90_0.005_264)]">
        <div className="container flex items-center justify-between h-14">
          <a
            href="#"
            className="flex items-center gap-2 no-underline"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-xl font-bold text-[oklch(0.32_0.09_264)] tracking-tight">
              FastQuill
            </span>
          </a>
          <div
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[oklch(0.40_0.01_264)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <a href="#how-it-works" className="hover:text-[oklch(0.32_0.09_264)] transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-[oklch(0.32_0.09_264)] transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-[oklch(0.32_0.09_264)] transition-colors">
              Contact
            </a>
          </div>
          <a href="#contact" className="btn-cta text-sm py-2.5 px-5">
            Get a demo
          </a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[oklch(0.90_0.005_264)] relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663140832125/guBkUaYJpyn5KTAyF3stuT/fastquill-hero-bg-UoTP2KE4d8y8S8GdwTT3Ke.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="section-label mb-5">
                Inbound Response Operator · Dental Practices
              </div>
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-[oklch(0.13_0.01_264)] leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every patient inquiry gets answered in under{" "}
                <span className="text-[oklch(0.32_0.09_264)]">2 minutes.</span>
              </h1>
              <p
                className="text-lg text-[oklch(0.40_0.01_264)] mb-8 max-w-[520px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                FastQuill captures, qualifies, and books your inbound implant
                and cosmetic dentistry leads — so no patient inquiry goes
                unanswered or cold.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="#contact" className="btn-cta">
                  Get a live demo for your clinic
                  <ArrowRight size={16} />
                </a>
                <a href="#how-it-works" className="btn-secondary">
                  See how it works
                </a>
              </div>
              <p
                className="text-xs text-[oklch(0.55_0.01_264)] tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Built for high-value dental practices handling implant and
                restorative cases.
              </p>
            </div>

            {/* Right: Inbox demo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px]">
                <InboxDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <section className="py-10 bg-[oklch(0.975_0.002_264)] border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "< 2 min", label: "Average response time" },
              { stat: "24 / 7", label: "Inquiry coverage" },
              { stat: "100%", label: "Inquiries acknowledged" },
              { stat: "7 days", label: "Time to measurable impact" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-left">
                <div className="stat-mono text-3xl md:text-4xl mb-1">{stat}</div>
                <div
                  className="text-xs text-[oklch(0.50_0.01_264)] tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <SectionLabel num="01" text="The Problem" />
              <h2
                className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Most implant patients don't convert because response is too slow.
              </h2>
              <p
                className="text-base text-[oklch(0.40_0.01_264)] mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                You don't lose patients because of demand. You lose them between
                inquiry and response.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <ul
                className="space-y-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {[
                  "Patients contact multiple clinics at once",
                  "The first fast response usually wins the case",
                  "Many inquiries go unanswered for hours — or never get followed up",
                  "Staff is busy, and lead follow-up is inconsistent",
                  "High-value implant cases quietly disappear",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full border-2 border-[oklch(0.70_0.01_264)] flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.52_0.14_55)]" />
                    </span>
                    <span className="text-[oklch(0.30_0.01_264)] text-[0.9375rem] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What FastQuill does ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[oklch(0.975_0.002_264)] border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <FadeUp>
            <SectionLabel num="02" text="What FastQuill Does" />
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-4 max-w-[600px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FastQuill runs your inbound patient intake automatically.
            </h2>
            <p
              className="text-base text-[oklch(0.40_0.01_264)] mb-14 max-w-[520px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Three operations. No workflow disruption. Immediate impact.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[oklch(0.90_0.005_264)] rounded-sm overflow-hidden">
            {[
              {
                num: "1",
                icon: <Clock size={22} className="text-[oklch(0.32_0.09_264)]" />,
                title: "Instant Response",
                body: "Every web inquiry or email is answered within minutes — automatically, every time, around the clock.",
              },
              {
                num: "2",
                icon: <CheckCircle size={22} className="text-[oklch(0.32_0.09_264)]" />,
                title: "Smart Qualification",
                body: "Patients are filtered by treatment type, intent, and readiness. Only high-intent leads move forward.",
              },
              {
                num: "3",
                icon: <Calendar size={22} className="text-[oklch(0.32_0.09_264)]" />,
                title: "Booking + Follow-up",
                body: "Qualified patients are booked directly into your calendar or continuously followed up until they convert.",
              },
            ].map(({ num, icon, title, body }, i) => (
              <FadeUp key={num} delay={i * 80}>
                <div
                  className={`p-8 bg-white h-full ${i < 2 ? "md:border-r border-b md:border-b-0 border-[oklch(0.90_0.005_264)]" : ""}`}
                >
                  <div
                    className="text-[oklch(0.75_0.005_264)] font-mono text-xs mb-5 tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    STEP {num}
                  </div>
                  <div className="mb-4">{icon}</div>
                  <h3
                    className="text-lg font-bold text-[oklch(0.13_0.01_264)] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm text-[oklch(0.40_0.01_264)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── What changes in 7 days ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionLabel num="03" text="What Changes" />
              <h2
                className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What improves in 7 days.
              </h2>
              <ul className="space-y-4" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  "Faster response time — minutes instead of hours",
                  "Higher consultation booking rate from existing traffic",
                  "Fewer missed or forgotten leads",
                  "More predictable weekly schedule",
                  "Less staff time spent on repetitive inbox handling",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <TrendingUp
                      size={16}
                      className="text-[oklch(0.52_0.14_55)] mt-0.5 shrink-0"
                    />
                    <span className="text-[0.9375rem] text-[oklch(0.30_0.01_264)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={100}>
              <img
                src={CLINIC_IMG}
                alt="Modern dental clinic reception"
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: "360px" }}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 md:py-28 bg-[oklch(0.975_0.002_264)] border-b border-[oklch(0.90_0.005_264)]"
      >
        <div className="container">
          <FadeUp>
            <SectionLabel num="04" text="Setup Process" />
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-4 max-w-[560px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Simple setup. No workflow disruption.
            </h2>
            <p
              className="text-base text-[oklch(0.40_0.01_264)] mb-14 max-w-[500px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              You remain fully in control of clinical decisions and patient
              care. We only manage intake, qualification, and scheduling.
            </p>
          </FadeUp>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[1.375rem] top-8 bottom-8 w-px bg-[oklch(0.90_0.005_264)] hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Connect your inbox",
                  body: "We connect to your existing contact form, email inbox, or patient portal. No new software required.",
                },
                {
                  step: "02",
                  title: "Sync your calendar",
                  body: "We sync with your appointment calendar to see real-time availability and book directly.",
                },
                {
                  step: "03",
                  title: "Configure your clinic rules",
                  body: "We configure hours, services, escalation cases, and intake boundaries specific to your practice.",
                },
                {
                  step: "04",
                  title: "Go live immediately",
                  body: "FastQuill begins handling all new inbound inquiries. You review a daily summary. Nothing else changes.",
                },
              ].map(({ step, title, body }, i) => (
                <FadeUp key={step} delay={i * 60}>
                  <div className="flex items-start gap-6 md:gap-8">
                    <div
                      className="w-11 h-11 rounded-full bg-white border-2 border-[oklch(0.32_0.09_264)] flex items-center justify-center shrink-0 z-10"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 500, color: "oklch(0.32 0.09 264)" }}
                    >
                      {step}
                    </div>
                    <div className="pt-1.5">
                      <h3
                        className="text-base font-bold text-[oklch(0.13_0.01_264)] mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-sm text-[oklch(0.40_0.01_264)] leading-relaxed max-w-[480px]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {body}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety / Control ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <SectionLabel num="05" text="Clinical Safety" />
              <h2
                className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Designed for clinical environments.
              </h2>
              <p
                className="text-base text-[oklch(0.40_0.01_264)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                FastQuill operates strictly within predefined intake boundaries.
                Clinical decisions remain entirely with your team.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="space-y-4">
                {[
                  {
                    icon: <Shield size={18} className="text-[oklch(0.32_0.09_264)]" />,
                    title: "Escalates sensitive cases",
                    body: "Any clinical, urgent, or sensitive inquiry is immediately escalated to your team.",
                  },
                  {
                    icon: <Shield size={18} className="text-[oklch(0.32_0.09_264)]" />,
                    title: "No medical advice",
                    body: "FastQuill does not provide medical advice, diagnosis, or treatment recommendations.",
                  },
                  {
                    icon: <Shield size={18} className="text-[oklch(0.32_0.09_264)]" />,
                    title: "Fully auditable",
                    body: "Complete communication history is available for review at any time.",
                  },
                  {
                    icon: <Shield size={18} className="text-[oklch(0.32_0.09_264)]" />,
                    title: "Pause or adjust anytime",
                    body: "You can pause, modify, or override FastQuill at any point without disruption.",
                  },
                ].map(({ icon, title, body }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 border border-[oklch(0.90_0.005_264)] bg-[oklch(0.975_0.002_264)]"
                  >
                    <div className="mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <div
                        className="text-sm font-semibold text-[oklch(0.13_0.01_264)] mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {title}
                      </div>
                      <div
                        className="text-sm text-[oklch(0.40_0.01_264)]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Outcome framing ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[oklch(0.32_0.09_264)] border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <FadeUp>
            <div
              className="section-label mb-6"
              style={{ color: "oklch(0.75 0.02 264)" }}
            >
              <span
                className="text-[oklch(0.75_0.02_264)] font-mono text-[0.6875rem] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                06 — The Outcome
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-10 max-w-[600px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More of your existing traffic becomes booked consultations.
            </h2>
          </FadeUp>

          <FadeUp delay={100}>
            <div
              className="flex flex-wrap items-center gap-3 md:gap-4 text-white"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {[
                "Same website traffic",
                "Faster response",
                "Structured follow-up",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="px-4 py-2.5 border border-white/30 text-sm font-medium bg-white/10 whitespace-nowrap">
                    {item}
                  </div>
                  {i < 2 && (
                    <span className="text-white/40 text-lg font-light">+</span>
                  )}
                </div>
              ))}
              <span className="text-white/40 text-lg font-light">=</span>
              <div className="px-4 py-2.5 bg-[oklch(0.52_0.14_55)] text-sm font-semibold whitespace-nowrap">
                More booked implant consultations
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Social proof ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[oklch(0.90_0.005_264)]">
        <div className="container">
          <FadeUp>
            <SectionLabel num="07" text="Early Results" />
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Early clinics are already seeing measurable improvements.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <FadeUp>
              <div className="p-8 border border-[oklch(0.90_0.005_264)] h-full">
                <div
                  className="text-xs tracking-widest uppercase text-[oklch(0.50_0.01_264)] mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Florida Implant Practice · Pilot
                </div>
                <blockquote
                  className="text-base text-[oklch(0.25_0.01_264)] leading-relaxed mb-4 italic"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  "We were losing leads we didn't even know about. Within the
                  first week, we had three consultations booked from inquiries
                  that would have gone cold."
                </blockquote>
                <div
                  className="text-sm text-[oklch(0.50_0.01_264)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Practice Director, South Florida
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={80}>
              <div className="p-8 border border-[oklch(0.90_0.005_264)] h-full bg-[oklch(0.975_0.002_264)]">
                <div
                  className="text-xs tracking-widest uppercase text-[oklch(0.50_0.01_264)] mb-6"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Pilot Program · Results Available Upon Request
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { stat: "3×", label: "Faster first response" },
                    { stat: "0", label: "Unanswered inquiries" },
                    { stat: "↑ 40%", label: "Consultation booking rate" },
                    { stat: "< 7d", label: "Time to first impact" },
                  ].map(({ stat, label }) => (
                    <div key={label}>
                      <div
                        className="text-2xl font-medium text-[oklch(0.32_0.09_264)] mb-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {stat}
                      </div>
                      <div
                        className="text-xs text-[oklch(0.50_0.01_264)] uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="py-20 md:py-28 bg-[oklch(0.975_0.002_264)] border-b border-[oklch(0.90_0.005_264)]"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <SectionLabel num="08" text="Pricing" />
              <h2
                className="text-3xl md:text-4xl font-bold text-[oklch(0.13_0.01_264)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Simple monthly setup.
              </h2>
              <p
                className="text-base text-[oklch(0.40_0.01_264)] mb-6 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                FastQuill operates as a managed inbound system for your clinic.
                No per-lead fees. No long-term contracts.
              </p>
              <p
                className="text-sm text-[oklch(0.50_0.01_264)] border-l-2 border-[oklch(0.52_0.14_55)] pl-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Best suited for clinics where a single implant case is worth
                significantly more than monthly intake costs.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="bg-white border border-[oklch(0.90_0.005_264)] p-8">
                <div
                  className="text-xs tracking-widest uppercase text-[oklch(0.50_0.01_264)] mb-6"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Managed Inbound Plan
                </div>
                <div className="space-y-5 mb-8">
                  {[
                    {
                      label: "Setup & onboarding",
                      value: "One-time fee",
                      detail: "Inbox connection, calendar sync, rule configuration",
                    },
                    {
                      label: "Monthly management",
                      value: "Volume-based",
                      detail: "Scales with inbound inquiry volume and scheduling load",
                    },
                    {
                      label: "Commitment",
                      value: "Month-to-month",
                      detail: "Pause or cancel at any time",
                    },
                  ].map(({ label, value, detail }) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 pb-5 border-b border-[oklch(0.90_0.005_264)] last:border-0 last:pb-0"
                    >
                      <div>
                        <div
                          className="text-sm font-semibold text-[oklch(0.13_0.01_264)] mb-0.5"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {label}
                        </div>
                        <div
                          className="text-xs text-[oklch(0.55_0.01_264)]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {detail}
                        </div>
                      </div>
                      <div
                        className="text-sm font-medium text-[oklch(0.32_0.09_264)] whitespace-nowrap"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn-cta justify-center">
                  Request clinic review
                  <ChevronRight size={16} />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 md:py-32 border-b border-[oklch(0.90_0.005_264)]"
      >
        <div className="container">
          <div className="max-w-[640px]">
            <FadeUp>
              <SectionLabel num="09" text="Get Started" />
              <h2
                className="text-3xl md:text-5xl font-bold text-[oklch(0.13_0.01_264)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                See how FastQuill would handle your inbound patients.
              </h2>
              <p
                className="text-base text-[oklch(0.40_0.01_264)] mb-10 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We'll walk through your current intake process and show you
                exactly how FastQuill would operate for your practice — no
                commitment required.
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="mailto:hello@fastquill.com"
                  className="btn-cta"
                >
                  Request clinic review
                  <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:hello@fastquill.com"
                  className="btn-secondary"
                >
                  Talk to us
                </a>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-6 text-sm text-[oklch(0.50_0.01_264)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <a
                  href="mailto:hello@fastquill.com"
                  className="flex items-center gap-2 hover:text-[oklch(0.32_0.09_264)] transition-colors no-underline"
                >
                  <Mail size={15} />
                  hello@fastquill.com
                </a>
                <a
                  href="tel:+1-800-FASTQUILL"
                  className="flex items-center gap-2 hover:text-[oklch(0.32_0.09_264)] transition-colors no-underline"
                >
                  <Phone size={15} />
                  Schedule a call
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div
                className="text-lg font-bold text-[oklch(0.32_0.09_264)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                FastQuill
              </div>
              <div
                className="text-xs text-[oklch(0.55_0.01_264)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Managed inbound response for high-value dental practices.
              </div>
            </div>

            <div
              className="flex flex-col gap-1 text-xs text-[oklch(0.55_0.01_264)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <div>
                FastQuill does not provide medical advice, diagnosis, or
                treatment recommendations.
              </div>
              <div>
                We manage intake, qualification, and scheduling only.
              </div>
            </div>

            <div
              className="text-xs text-[oklch(0.65_0.01_264)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} FastQuill. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
