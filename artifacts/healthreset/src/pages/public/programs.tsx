import { Link } from "wouter";

const programs = [
  {
    no: "01",
    title: "30-Day Nutrition Intervention",
    duration: "30 days",
    desc: "A focused initiation of dietary and lifestyle modifications, with close monitoring and daily support to build early momentum.",
  },
  {
    no: "02",
    title: "60-Day Metabolic Health Optimization",
    duration: "60 days",
    desc: "An extended intervention to strengthen adherence, improve clinical outcomes, and reinforce behavioural change for conditions like PCOS, prediabetes, and thyroid disorders.",
  },
  {
    no: "03",
    title: "90-Day Comprehensive Lifestyle Transformation",
    duration: "90 days",
    desc: "Long-term, intensive support aimed at sustainable health improvements and durable lifestyle modification — from meal plans to sleep, stress, and activity.",
  },
];

const components = [
  {
    no: "01",
    title: "Comprehensive Clinical Nutrition Assessment",
    items: [
      "Detailed medical, dietary, and lifestyle evaluation",
      "Review of relevant biochemical parameters and clinical reports",
      "Assessment of nutritional deficiencies, metabolic risks, and lifestyle factors",
      "Identification of barriers to adherence and health optimization",
    ],
  },
  {
    no: "02",
    title: "Personalized Nutrition Prescription",
    items: [
      "Customized meal plans based on clinical condition, nutritional requirements, food preferences, cultural practices, and lifestyle",
      "Therapeutic nutrition strategies for metabolic disorders and chronic disease management",
      "Practical meal planning with emphasis on sustainability and adherence",
    ],
  },
  {
    no: "03",
    title: "Lifestyle Modification Framework",
    items: [
      "Sleep, stress, physical activity, and circadian rhythm assessment",
      "Structured recommendations to support metabolic resilience and overall health",
      "Behaviour coaching to facilitate long-term habit formation",
    ],
  },
  {
    no: "04",
    title: "Nutritional Supplement Guidance",
    items: [
      "Evidence-based recommendations where clinically appropriate",
      "Monitoring of supplementation response and tolerability",
    ],
  },
  {
    no: "05",
    title: "Continuous Monitoring & Patient Support",
    items: [
      "Daily monitoring and accountability through digital communication",
      "Ongoing guidance to address challenges and improve adherence",
      "Timely modifications based on patient progress and feedback",
    ],
  },
  {
    no: "06",
    title: "Follow-Up & Outcome Tracking",
    items: [
      "Scheduled follow-up consultations",
      "Monitoring of anthropometric, clinical, and biochemical outcomes",
      "Regular review of progress toward therapeutic goals",
      "Plan adjustments based on response and evolving clinical needs",
    ],
  },
];

const interests = [
  "Obesity and weight management",
  "Prediabetes and Type 2 Diabetes remission support",
  "Metabolic dysfunction-associated steatotic liver disease (MASLD)",
  "Dyslipidaemia",
  "Polycystic Ovary Syndrome (PCOS)",
  "Cardiometabolic health",
  "Gut health optimization",
  "Preventive and lifestyle medicine nutrition",
];

const faqs = [
  {
    q: "Is this only for weight loss?",
    a: "No. While weight management is one focus area, these programs are built around metabolic and hormonal health more broadly — prediabetes, PCOS, fatty liver, cholesterol disorders, gut health, and general preventive nutrition all fall within scope.",
  },
  {
    q: "Are consults in person or online?",
    a: "Both. Consultations are held in person in Gurugram, or over video anywhere in the world. Program structure, monitoring, and support are identical either way.",
  },
  {
    q: "What does 'daily monitoring' actually involve?",
    a: "Regular check-ins through digital communication — reviewing adherence, troubleshooting real-life obstacles, and adjusting the plan as your routine, reports, or progress evolve, rather than waiting for the next scheduled visit.",
  },
  {
    q: "Do you work alongside my doctor?",
    a: "Yes. Nutrition interventions are designed to align with your existing medical management, and I'm glad to coordinate directly with physicians or other members of your care team when useful.",
  },
  {
    q: "How do I choose between the 30, 60, and 90-day programs?",
    a: "The 30-day program suits a focused initiation or a first step. The 60 and 90-day programs are better suited to chronic or hormonal conditions — PCOS, prediabetes, fatty liver — where sustained behaviour change and longer monitoring windows meaningfully improve outcomes.",
  },
];

export default function Programs() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 mx-auto max-w-[1600px] w-full">
        <div className="max-w-3xl">
          <span className="text-[12px] tracking-[0.2em] uppercase text-olive">— Programs</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-[-0.03em] text-ink md:text-7xl">
            Personalized nutrition,
            <br />
            <em className="italic text-olive/90">clinically</em> delivered.
          </h1>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed">
            Individualized, evidence-based dietary and lifestyle intervention programs aimed at
            improving metabolic health, enhancing treatment outcomes, and supporting long-term
            behaviour change.
          </p>
        </div>
      </section>

      {/* Program tiers */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Three ways to begin.
            </h2>
            <p className="mt-4 max-w-xl text-ink/70">
              Each program includes a comprehensive clinical assessment, a personalized nutrition
              prescription, and continuous monitoring. Held in person in Gurugram, or over video —
              worldwide.
            </p>
          </div>

          <div className="space-y-px overflow-hidden rounded-[32px] border border-ink/10 bg-cream">
            {programs.map((p, i) => (
              <article
                key={p.no}
                className="group relative grid grid-cols-12 items-start gap-4 bg-cream px-6 py-12 transition-colors hover:bg-sand/40 md:px-12 md:py-16"
              >
                <div className="col-span-2 font-display text-2xl text-ink/40 md:col-span-1 md:text-3xl">
                  {p.no}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-ink/50">
                    <span>{p.duration}</span>
                  </div>
                </div>
                <p className="col-span-12 max-w-xl text-pretty text-base leading-relaxed text-ink/70 md:col-span-5 md:col-start-7 md:text-lg">
                  {p.desc}
                </p>
                <div className="col-span-12 mt-6 flex md:col-span-1 md:col-start-12 md:mt-0 md:justify-end">
                  <Link
                    href="/consultations"
                    className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 text-ink transition-all group-hover:bg-ink group-hover:text-cream"
                  >
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                {i < programs.length - 1 && (
                  <div className="absolute inset-x-6 bottom-0 h-px bg-ink/10 md:inset-x-12" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program components */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16 grid grid-cols-12 gap-4 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-olive">
                — What's included
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Every program, in full.
              </h2>
            </div>
            <p className="col-span-12 max-w-md text-ink/70 md:col-span-5 md:col-start-8 md:self-end">
              Regardless of duration, every program is built on the same six pillars — assessment,
              prescription, lifestyle, supplementation, monitoring, and follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {components.map((c) => (
              <div key={c.no} className="border-t border-ink/10 pt-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg text-ink/30">{c.no}</span>
                  <h3 className="font-display text-xl tracking-tight text-ink md:text-2xl">
                    {c.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of special interest */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16 grid grid-cols-12 gap-4 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-olive">
                — Areas of focus
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Conditions I work with.
              </h2>
            </div>
            <p className="col-span-12 max-w-md text-ink/70 md:col-span-5 md:col-start-8 md:self-end">
              While programs are personalized to every individual, these are the areas where
              nutrition intervention tends to have the most clinical leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[32px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest, i) => (
              <div
                key={i}
                className="flex min-h-[140px] flex-col justify-between bg-cream p-6 transition-colors hover:bg-sand/40 md:p-8"
              >
                <span className="font-display text-xl text-ink/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-lg leading-snug tracking-tight text-ink md:text-xl">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative care */}
      <section className="bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[12px] tracking-[0.2em] uppercase text-cream/50">
                — Collaborative care
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] tracking-[-0.02em] text-cream md:text-5xl">
                Working alongside
                <br />
                your care team.
              </h2>
            </div>
            <p className="col-span-12 max-w-lg text-lg leading-relaxed text-cream/75 md:col-span-5 md:col-start-8 md:self-end">
              I believe in working closely with physicians and multidisciplinary healthcare teams
              to provide integrated, patient-centered care. Nutrition interventions are aligned
              with medical management plans, ensuring a coordinated approach to improving patient
              outcomes and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16 md:mb-20">
            <span className="text-[12px] tracking-[0.2em] uppercase text-olive">— FAQ</span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Common questions.
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-ink/10 border-t border-b border-ink/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6 md:py-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-display text-xl tracking-tight text-ink md:text-2xl">
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] border border-ink/10 bg-cream px-8 py-14 md:flex-row md:items-center md:px-16 md:py-20">
            <div>
              <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
                Ready to begin?
              </h2>
              <p className="mt-4 max-w-md text-ink/70">
                Book a consultation to discuss which program fits your goals, condition, and
                timeline.
              </p>
            </div>
            <Link
              href="/consultations"
              className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[13px] tracking-[0.06em] uppercase text-cream transition-all hover:bg-olive"
            >
              Book a Consult
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
