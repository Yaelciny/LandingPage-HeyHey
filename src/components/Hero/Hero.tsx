// ============================================================
// Hero — Seccion principal con carrusel de banners animados.
// En movil muestra un video de fondo a pantalla completa.
// En desktop muestra el carrusel con particulas y animaciones.
// Incluye botones CTA y marquee infinito de diferenciadores.
// ============================================================
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSection } from "@/data/nat";

// Intervalo del carrusel en milisegundos (6 segundos por banner)
const INTERVAL = 6000;

export default function Hero() {
  // Desestructurar los datos del hero desde el archivo centralizado
  const { banners, distinctives } = heroSection;
  const [current, setCurrent] = useState(0);

  // Avanzar al siguiente banner de forma ciclica
  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % banners.length),
    [banners.length]
  );

  // Temporizador que cambia el banner automaticamente
  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  // Separar el titulo en palabras para la animacion palabra por palabra
  const titleWords = banners[current].title.split(" ");

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-foreground text-background"
    >
      {/* ========== MOBILE: Video y contenido (visible solo en pantallas < md) ========== */}
      <div className="absolute inset-0 z-20 flex flex-col overflow-hidden md:hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover -z-10 brightness-70"
        >
          <source src="/videos/hh-celular.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </div>

      {/* ========== DESKTOP: Fondo animado con gradientes, particulas y cuadricula (oculto en movil) ========== */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div
          className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-60 h-[800px] w-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-background/20"
            style={{
              top: `${15 + i * 10}%`,
              left: `${5 + i * 12}%`,
              width: i % 3 === 0 ? 6 : 3,
              height: i % 3 === 0 ? 6 : 3,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{
              repeat: Infinity,
              duration: 5 + i,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Contenido principal del carrusel con animacion de entrada/salida (solo en desktop) */}
      <div className="relative z-10 hidden min-h-[65vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center md:flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >

            {/* Titulo con efecto de revelacion palabra por palabra */}
            <h1 className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {titleWords.map((word, i) => (
                <motion.span
                  key={`${current}-${i}`}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitulo con linea decorativa a los lados */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              className="flex items-center justify-center gap-4"
            >
              <span className="hidden h-px w-8 bg-background/30 sm:block" />
              <p className="text-center text-sm font-medium tracking-wide text-background/70 sm:text-lg md:text-xl">
                {banners[current].subtitle}
              </p>
              <span className="hidden h-px w-8 bg-background/30 sm:block" />
            </motion.div>

            {/* Description */}
            <motion.p
              className="max-w-2xl text-center text-sm leading-relaxed text-background/50 sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            >
              {banners[current].description}
            </motion.p>

            {/* Botones de accion — navegan hacia Contacto y Servicios */}
            <motion.div
              className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
            >
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative w-full overflow-hidden rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] sm:w-auto text-center"
              >
                <span className="relative z-10">Habla con nosotros</span>
              </a>
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#servicios")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full rounded-full border border-background/30 px-7 py-3 text-sm font-medium text-background/80 transition-all duration-300 hover:border-background/60 hover:text-background sm:w-auto text-center"
              >
                Ver servicios
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores del carrusel con barra de progreso animada (solo desktop) */}
        <div className="mt-12 hidden items-center gap-3 md:flex">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a banner ${i + 1}`}
              className="relative h-[3px] overflow-hidden rounded-full bg-background/20 transition-all duration-300"
              style={{ width: i === current ? 40 : 16 }}
            >
              {i === current && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-background"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
        {/* Marquee infinito — desplazamiento continuo con los diferenciadores */}
        <div className=" mt-10 relative z-10 w-full overflow-hidden border-t border-background/10">
          <motion.div
            className="flex whitespace-nowrap py-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...distinctives, ...distinctives].map((d, i) => (
              <span
                key={i}
                className="mx-8 flex shrink-0 items-center gap-3 text-xs tracking-[0.2em] text-background/40 uppercase sm:text-sm"
              >
                <span className="inline-block h-1 w-1 rotate-45 bg-background/30" />
                {d.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
}
