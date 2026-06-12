"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesSection } from "@/data/nat";

export default function Services() {
  const { sectionLabel, intro, services, closing } = servicesSection;

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 });

  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-28 text-foreground lg:py-36"
      style={{
        background: "oklch(0.97 0.005 230)",
      }}
    >
      {/* Floating orb */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "oklch(0.85 0.04 220 / 0.15)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{ background: "oklch(0.85 0.04 220 / 0.10)" }}
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

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

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {intro}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-16 text-sm text-neutral-400"
        >
          Elegimos cada herramienta con intención, cada decisión con propósito.
        </motion.p>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={gridInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 px-6 py-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                {/* Hover accent line */}
                <div className="absolute left-0 top-0 h-full w-[3px] scale-y-0 rounded-r-full bg-foreground transition-transform duration-300 group-hover:scale-y-100" />

                <div className="mb-4 flex items-center gap-3">
                  {/* Number */}
                  <span className="font-mono text-xs text-neutral-300 transition-colors group-hover:text-neutral-400">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/5 transition-colors duration-300 group-hover:bg-foreground/10">
                    <Icon className="h-4 w-4 text-foreground/60 transition-colors duration-300 group-hover:text-foreground" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold leading-snug tracking-wide text-neutral-700 transition-colors group-hover:text-foreground">
                  {service.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Closing */}
        <div ref={closingRef} className="mt-20 border-t border-foreground/8 pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={closingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl lg:text-2xl">
              {closing}
            </p>
            <motion.button
              onClick={() => {
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Comienza tu proyecto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
