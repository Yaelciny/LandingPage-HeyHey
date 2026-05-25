"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsSection } from "@/data/nat";

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

        {/* Intro word-by-word */}
        <div className="mb-20">
          <h2 className="flex max-w-3xl flex-wrap gap-x-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {intro.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

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
                className="group relative"
              >
                <div className="mb-4 flex items-center gap-4">
                  <motion.span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-foreground text-lg font-bold text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {step.id}
                  </motion.span>
                  {i < process.length - 1 && (
                    <motion.div
                      className="hidden h-[1px] flex-1 bg-neutral-200 lg:block"
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
                </div>
                <h4 className="text-sm font-semibold tracking-wide text-neutral-700">
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
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral-100">
                  <motion.span
                    className="text-7xl font-black text-neutral-200"
                    whileHover={{ scale: 1.3, rotate: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {c.name.charAt(0)}
                  </motion.span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/70">
                    <span className="text-xs font-medium tracking-[0.2em] text-background uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {viewProjectText}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-1 text-lg font-bold tracking-tight text-foreground">
                    {c.name}
                  </h4>
                  <p className="text-sm text-neutral-500">{c.tags}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
