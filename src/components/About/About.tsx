// ============================================================
// About — Seccion "Sobre Nosotros".
// Incluye concepto palabra por palabra, descripcion,
// tarjetas de valores con hover y cierre con efecto typewriter.
// ============================================================
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { aboutSection } from "@/data/nat";
import aboutImg from "@/assets/otro/IMG_5662.png";
import bulbManImg from "@/assets/otro/IMG_5666.png";

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

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagen visual — persona azul entre la multitud (AGRANDADA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl lg:max-w-none">
              <Image
                src={aboutImg}
                alt="Persona destacada entre la multitud — tu marca tiene algo unico"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 42vw"
              />
              {/* Gradiente inferior mucho mas suave para no quitarle color */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Concepto + descripcion */}
          <div className="space-y-10 lg:col-span-7">
            {/* Concepto principal con animacion palabra por palabra */}
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

            {/* Descripcion — desliza desde la derecha */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base leading-relaxed text-neutral-500 lg:text-lg"
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 border-t border-neutral-100 pt-16">
          <div className="mb-10">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase"
            >
              {valuesTitle}
            </motion.h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-neutral-100 bg-white px-6 py-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Efecto de barrido negro al pasar el mouse — ahora con CSS puro */}
                <div
                  className="absolute inset-0 rounded-2xl bg-foreground origin-left scale-x-0 transition-transform duration-400 ease-in-out group-hover:scale-x-100"
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

        {/* Nueva ubicacion del hombre foco + Frase de cierre */}
        <div ref={closingRef} className="mt-24 border-t border-neutral-100 pt-16">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-last lg:order-first"
            >
              <div className="relative h-40 w-32 overflow-hidden rounded-3xl shadow-lg lg:h-56 lg:w-48">
                <Image
                  src={bulbManImg}
                  alt="Hombre con cabeza de foco — creatividad e ideas"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 128px, 192px"
                />
              </div>
            </motion.div>

            <div className="flex-1 lg:pl-10">
              <p className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-left lg:text-4xl">
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
        </div>
      </div>
    </section>
  );
}
