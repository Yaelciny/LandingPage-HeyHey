"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsSection } from "@/data/nat";

// Brand-inspired gradient palettes for case study cards
const CARD_GRADIENTS = [
  "from-slate-900 via-slate-800 to-slate-700",
  "from-zinc-900 via-zinc-800 to-stone-700",
  "from-neutral-900 via-neutral-800 to-neutral-700",
];

export default function Projects() {
  const {
    sectionLabel,
    intro,
    processTitle,
    process,
    casesTitle,
    cases,
    viewProjectText,
  } = projectsSection;

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, amount: 0.3 });

  const casesRef = useRef(null);
  const casesInView = useInView(casesRef, { once: true, amount: 0.2 });

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-background py-28 lg:py-36"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase"
        >
          {sectionLabel}
        </motion.span>

        {/* Intro title */}
        <div className="mb-6">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {["Proyectos que", "hablan", "por sí solos"].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mb-20 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base"
        >
          {intro}
        </motion.p>

        {/* Process */}
        <div className="mb-24" ref={processRef}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase"
          >
            {processTitle}
          </motion.h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={
                  processInView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Step number badge */}
                <div className="mb-5 flex items-center justify-between">
                  <motion.span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-base font-bold text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {step.id}
                  </motion.span>
                  {i < process.length - 1 && (
                    <svg
                      className="h-4 w-4 text-neutral-200 lg:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>

                {/* Connector line (lg only) */}
                {i < process.length - 1 && (
                  <motion.div
                    className="absolute right-0 top-[3.5rem] hidden h-[1px] w-8 translate-x-full bg-neutral-200 lg:block"
                    initial={{ scaleX: 0 }}
                    animate={processInView ? { scaleX: 1 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.2,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                )}

                <h4 className="text-sm font-semibold tracking-wide text-neutral-800 transition-colors group-hover:text-foreground">
                  {step.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cases */}
        <div ref={casesRef}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase"
          >
            {casesTitle}
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-3">
            {cases.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 50 }}
                animate={casesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                }}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Dark gradient image placeholder */}
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]}`}
                >
                  {/* Large letter decoration */}
                  <motion.span
                    className="text-8xl font-black text-white/10 select-none"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {c.name.charAt(0)}
                  </motion.span>

                  {/* Subtle dot grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-colors duration-400 group-hover:bg-black/50">
                    <span className="text-xs font-semibold tracking-[0.3em] text-white uppercase opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      {viewProjectText}
                    </span>
                    <div className="mt-2 h-px w-8 bg-white/60 opacity-0 transition-all duration-300 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100" />
                  </div>
                </div>

                <div className="bg-white p-6">
                  <h4 className="mb-1 text-base font-bold tracking-tight text-foreground">
                    {c.name}
                  </h4>
                  <p className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
                    {c.tags}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
