// ============================================================
// Projects — Seccion de proyectos y proceso de trabajo.
// Muestra el flujo de 4 pasos con lineas conectoras
// y tarjetas de casos de exito con efecto hover premium.
// ============================================================
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { projectsSection } from "@/data/nat";
import puzzleImg from "@/assets/otro/manos-armando-rompecabezas.png";
import chessImg from "@/assets/otro/piezas-ajedrez.jpg";
import growthImg from "@/assets/otro/regando-arbol-dinero.png";

// Paletas de gradiente oscuro para las tarjetas de casos de exito
const CARD_GRADIENTS = [
  "from-slate-900 via-slate-800 to-slate-700",
  "from-zinc-900 via-zinc-800 to-stone-700",
  "from-neutral-900 via-neutral-800 to-neutral-700",
];

export default function Projects() {
  // Desestructurar datos de proyectos desde el archivo centralizado
  const {
    sectionLabel,
    intro,
    processTitle,
    process,
    casesTitle,
    cases,
    viewProjectText,
  } = projectsSection;

  // Refs para animar el proceso y los casos solo cuando son visibles
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
          className="mb-4 block text-center text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase lg:text-left"
        >
          {sectionLabel}
        </motion.span>

        {/* Intro title + Imagen del puzzle (AGRANDADA) */}
        <div className="mb-20 grid items-end gap-10 lg:grid-cols-12">
          <div className="text-center lg:col-span-8 lg:text-left">
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
              className="mx-auto max-w-xl text-center text-sm leading-relaxed text-neutral-400 sm:text-base lg:mx-0 lg:text-left"
            >
              {intro}
            </motion.p>
          </div>

          {/* Imagen del puzzle — construir pieza por pieza (AGRANDADA y visible en movil) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 mt-6 flex justify-center lg:col-span-4 lg:mt-0 lg:justify-end"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-3xl shadow-lg lg:h-52 lg:w-52">
              <Image
                src={puzzleImg}
                alt="Manos armando un rompecabezas — proceso colaborativo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 128px, 208px"
              />
              {/* Gradiente mas suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Process */}
        <div className="mb-24" ref={processRef}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 text-center text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase lg:text-left"
          >
            {processTitle}
          </motion.h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
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
                {/* Numero del paso con animacion de rotacion al hover */}
                <div className="mb-5 flex items-center justify-center gap-2 sm:justify-between">
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

                {/* Linea conectora entre pasos (solo en pantallas grandes) */}
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

        {/* Cases — con imagen de ajedrez y arbol de crecimiento */}
        <div ref={casesRef} className="relative">
          {/* Imagen de ajedrez como fondo decorativo — estrategia ganadora (AGRANDADA y visible en movil) */}
          <div className="pointer-events-none absolute -right-10 top-0 z-0">
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative h-64 w-64 overflow-hidden rounded-full opacity-[0.05] lg:h-96 lg:w-96 lg:opacity-20"
            >
              <Image
                src={chessImg}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 256px, 384px"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Imagen del arbol de dinero — hacer crecer tu marca */}
          <div className="pointer-events-none absolute -left-16 bottom-10 z-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative h-48 w-40 overflow-hidden rounded-3xl opacity-[0.05] lg:h-64 lg:w-52 lg:opacity-30"
            >
              <Image
                src={growthImg}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 160px, 208px"
                aria-hidden="true"
              />
            </motion.div>
          </div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 text-center text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase lg:text-left"
          >
            {casesTitle}
          </motion.h3>

          <div className="relative grid gap-6 sm:grid-cols-3">
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
                {/* Gradiente oscuro como fondo de la tarjeta */}
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

                  {/* Overlay que aparece al pasar el mouse con texto "Ver proyecto" */}
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
