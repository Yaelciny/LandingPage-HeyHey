// ============================================================
// Projects — Seccion de proyectos y proceso de trabajo.
// Muestra el flujo de 4 pasos con lineas conectoras
// y tarjetas de casos de exito con efecto hover premium.
// ============================================================
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projectsSection } from "@/data/nat";
import puzzleImg from "@/assets/otro/manos-armando-rompecabezas.png";
// Removed unused image imports (chessImg, growthImg) after user deleted decorative images

// Paletas de gradiente oscuro para las tarjetas de casos de exito
const CARD_GRADIENTS = [
  "from-slate-900 via-slate-800 to-slate-700",
  "from-zinc-900 via-zinc-800 to-stone-700",
  "from-neutral-900 via-neutral-800 to-neutral-700",
];

// Tipo para el video activo en el lightbox
interface ActiveVideo {
  src: string;
  name: string;
  tags: string;
}

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

  // Estado para el lightbox de video
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Cerrar modal con Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveVideo(null);
  }, []);

  useEffect(() => {
    if (activeVideo) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo, handleKeyDown]);

  // Refs para animar el proceso y los casos solo cuando son visibles
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, amount: 0.3 });

  const casesRef = useRef(null);
  const casesInView = useInView(casesRef, { once: true, amount: 0.2 });

  return (
    <>
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
            className="mt-6 flex w-full justify-center lg:col-span-4 lg:mt-0 lg:justify-end"
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
                  boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => c.video && setActiveVideo({ src: c.video, name: c.name, tags: c.tags })}
              >
                {/* Video area */}
                <div
                  className="relative aspect-[9/16] sm:aspect-[3/4] overflow-hidden"
                >
                  {/* Video siempre visible como fondo de la tarjeta */}
                  {c.video && (
                    <video
                      src={c.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Gradiente cinematico inferior para legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Overlay hover — oscurece + muestra boton play */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/30">
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 scale-75"
                      whileHover={{ scale: 1.15 }}
                    >
                      <svg
                        className="ml-1 h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Info del proyecto superpuesta abajo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="mb-1 text-lg font-bold tracking-tight text-white drop-shadow-lg">
                      {c.name}
                    </h4>
                    <p className="flex items-center gap-2 text-xs font-medium tracking-wide text-white/70 uppercase">
                      <span className="inline-block h-px w-4 bg-white/40" />
                      {c.tags}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* ===== LIGHTBOX / MODAL DE VIDEO CON SONIDO ===== */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="video-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            {/* Contenedor del video */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-[90vw] max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Boton cerrar */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110"
                aria-label="Cerrar video"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video con controles nativos y sonido */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <video
                  ref={modalVideoRef}
                  src={activeVideo.src}
                  autoPlay
                  controls
                  playsInline
                  className="h-auto max-h-[80vh] w-full object-contain"
                />
              </div>

              {/* Info del proyecto debajo del video */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-4 text-center"
              >
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {activeVideo.name}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-white/50 uppercase">
                  {activeVideo.tags}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
