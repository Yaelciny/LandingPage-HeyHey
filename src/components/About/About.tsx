// ============================================================
// About — Seccion "Sobre Nosotros".
// Incluye concepto palabra por palabra, descripcion,
// tarjetas de valores con hover y cierre con efecto typewriter.
// ============================================================
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutSection } from "@/data/nat";

export default function About() {
  // Desestructurar datos de la seccion desde el archivo centralizado
  const { sectionLabel, concept, description, valuesTitle, values, closing } =
    aboutSection;

  // Refs para detectar cuando la seccion es visible y activar animaciones
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 });

  const conceptWords = concept.split(" ");

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-28 lg:py-36"
    >
      {/* Linea decorativa animada que aparece al hacer scroll */}
      <motion.div
        className="pointer-events-none absolute top-0 left-1/2 h-28 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-200 to-transparent"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Circulo difuminado decorativo de fondo */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase">
            {sectionLabel}
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Concepto principal con animacion palabra por palabra */}
          <div>
            <h2 className="flex flex-wrap gap-x-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {conceptWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* Description — slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-base leading-relaxed text-neutral-500 lg:text-lg">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-20 border-t border-neutral-100 pt-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase"
          >
            {valuesTitle}
          </motion.h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                }}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-neutral-100 bg-white px-6 py-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Efecto de barrido negro al pasar el mouse */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-foreground"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ transformOrigin: "left" }}
                />
                <div className="relative flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full border border-neutral-300 transition-colors duration-300 group-hover:border-background group-hover:bg-background" />
                  <span className="text-sm font-medium leading-snug text-neutral-700 transition-colors duration-300 group-hover:text-background">
                    {value.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frase de cierre con efecto de escritura caracter por caracter */}
        <div ref={closingRef} className="mt-20 border-t border-neutral-100 pt-12">
          <p className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-4xl">
            {closing.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={closingInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: i * 0.02, duration: 0.1 }}
                className="inline-block"
                style={char === " " ? { width: "0.3em" } : undefined}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
