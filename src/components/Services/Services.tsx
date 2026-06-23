// ============================================================
// Services — Grilla de servicios con imagenes ilustrativas.
// Cada tarjeta muestra una imagen o icono de respaldo,
// con animaciones de entrada y hover premium.
// ============================================================
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { servicesSection } from "@/data/nat";
import keyboardImg from "@/assets/otro/black-computer-keyboard (1).jpg.jpeg";
import goldenImg from "@/assets/otro/IMG_5663.png";

export default function Services() {
  // Desestructurar datos de servicios desde el archivo centralizado
  const { sectionLabel, intro, services, closing } = servicesSection;

  // Refs para activar animaciones solo cuando la grilla y el cierre son visibles
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, amount: 0.5 });

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-foreground py-28 text-background lg:py-36"
    >
      {/* Orbes de brillo ambiental — efecto decorativo de fondo */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full blur-[120px]"
        style={{ background: "oklch(0.55 0.12 220 / 0.12)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{ background: "oklch(0.6 0.1 280 / 0.08)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      {/* Patron de cuadricula sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* Section header */}
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 block text-xs font-medium tracking-[0.3em] text-background/40 uppercase"
            >
              {sectionLabel}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl lg:text-5xl"
            >
              {intro}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-sm text-background/40"
            >
              Elegimos cada herramienta con intención, cada decisión con propósito.
            </motion.p>
          </div>

          {/* Imagen decorativa del teclado "IDEA" — creatividad + digital (AGRANDADA y visible en movil) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="col-span-12 mt-6 flex justify-center lg:col-span-4 lg:mt-0 lg:justify-end"
          >
            <motion.div
              className="relative h-32 w-48 overflow-hidden rounded-2xl opacity-80 transition-opacity duration-500 hover:opacity-100 lg:h-48 lg:w-64 lg:opacity-90"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image
                src={keyboardImg}
                alt="Teclado con tecla IDEA — creatividad digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 192px, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Grilla de tarjetas de servicios */}
        <div
          ref={gridRef}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.08]"
              >
                {/* Brillo con gradiente al pasar el mouse */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Imagen ilustrativa del servicio o icono de respaldo */}
                <div className="relative mb-5 flex items-start justify-between">
                  <div className="relative h-16 w-20 shrink-0">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-contain opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                        sizes="64px"
                      />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/5">
                        <Icon className="h-7 w-7 text-white/60" />
                      </div>
                    )}
                  </div>

                </div>

                {/* Service name */}
                <h3 className="relative text-base font-semibold leading-snug tracking-tight text-background/80 transition-colors duration-300 group-hover:text-background">
                  {service.name}
                </h3>

                {/* Barra de acento inferior que se expande en hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Seccion de cierre con frase, boton CTA e imagen dorada */}
        <div ref={closingRef} className="mt-20 border-t border-white/[0.08] pt-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Imagen dorada — persona que destaca (visible en movil) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={closingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="order-last col-span-12 mt-6 flex justify-center lg:order-first lg:col-span-3 lg:mt-0"
            >
              <div className="relative h-40 w-32 overflow-hidden rounded-3xl opacity-100 shadow-xl lg:h-56 lg:w-44">
                <Image
                  src={goldenImg}
                  alt="Persona dorada destacando — diferenciarse es clave"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 128px, 176px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Texto de cierre + CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={closingInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:col-span-9"
            >
              <p className="text-lg font-semibold tracking-tight text-background sm:text-xl lg:text-2xl">
                {closing}
              </p>
              <motion.button
                onClick={() => {
                  document
                    .querySelector("#contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:scale-105"
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
      </div>
    </section>
  );
}
