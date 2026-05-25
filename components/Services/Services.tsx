"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesSection } from "@/data/content";

export default function Services() {
  const { sectionLabel, intro, services, closing } = servicesSection;

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 });

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-neutral-950 py-28 text-white lg:py-36"
    >
      {/* Floating orb */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 block text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase"
        >
          {sectionLabel}
        </motion.span>

        {/* Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-16 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          {intro}
        </motion.h2>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid gap-[1px] bg-white/5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={gridInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              className="group relative bg-neutral-950 px-6 py-8 transition-colors"
            >
              {/* Number */}
              <motion.span
                className="mb-3 block font-mono text-xs text-neutral-600 transition-colors group-hover:text-white"
                whileHover={{ scale: 1.2, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {String(service.id).padStart(2, "0")}
              </motion.span>

              <h3 className="text-sm font-medium leading-snug tracking-wide text-neutral-300 transition-colors group-hover:text-white">
                {service.name}
              </h3>

              {/* Bottom line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 h-0 w-0 border-t-0 border-r-0 border-white/0 transition-all duration-300 group-hover:h-5 group-hover:w-5 group-hover:border-t-2 group-hover:border-r-2 group-hover:border-white/30" />
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <div ref={closingRef} className="mt-20 border-t border-white/10 pt-12">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={closingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-lg font-medium tracking-tight text-neutral-400 sm:text-xl"
          >
            {closing}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
