// ============================================================
// Contact — Seccion de contacto con heading gigante animado.
// Muestra telefono, correo e Instagram como enlaces grandes,
// mas un boton CTA que redirige a WhatsApp.
// ============================================================
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contactSection } from "@/data/nat";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  // Desestructurar los datos de contacto desde el archivo centralizado
  const { sectionLabel, info, items, cta, closing } = contactSection;

  // Ref para detectar visibilidad y disparar todas las animaciones
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-28 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 block text-center text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase lg:text-left"
        >
          {sectionLabel}
        </motion.span>

        {/* Heading gigante — cada linea desliza desde abajo */}
        <div className="mb-20 flex flex-col items-center gap-1 overflow-hidden border-b border-neutral-100 pb-20 lg:items-start">
          {["Hablemos", "de tu", "proyecto."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-center text-[clamp(3.5rem,11vw,8rem)] font-black leading-[0.95] tracking-tighter text-foreground lg:text-left"
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Grilla inferior — links de contacto a la izquierda, CTA a la derecha */}
        <div className="grid gap-16 lg:grid-cols-[1fr_auto]">

          {/* Izquierda — enlaces grandes tipograficos hacia WhatsApp, correo e Instagram */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Phone — extra large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <span className="mb-2 block text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                WhatsApp
              </span>
              <a
                href={`https://wa.me/${info.phone.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-end justify-center gap-3 text-3xl font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-neutral-500 sm:text-4xl lg:justify-start lg:text-5xl"
              >
                {info.phone}
                <ArrowUpRight className="mb-1 h-7 w-7 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            {/* Email — large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.62, duration: 0.6, ease: "easeOut" }}
            >
              <span className="mb-2 block text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                Correo electrónico
              </span>
              <a
                href={`mailto:${info.email}`}
                className="group inline-flex items-end justify-center gap-3 text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-neutral-500 sm:text-3xl lg:justify-start lg:text-4xl"
              >
                {info.email}
                <ArrowUpRight className="mb-1 h-6 w-6 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            {/* Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.74, duration: 0.6, ease: "easeOut" }}
            >
              <span className="mb-2 block text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                Instagram
              </span>
              <a
                href={info.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-end justify-center gap-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-neutral-500 sm:text-2xl lg:justify-start lg:text-3xl"
              >
                {info.instagramHandle}
                <ArrowUpRight className="mb-0.5 h-5 w-5 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          {/* Derecha — frase de cierre, boton CTA y direccion fisica */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center justify-between gap-12 lg:max-w-[280px] lg:items-start"
          >
            {/* Closing phrase + CTA */}
            <div>
              <p className="mb-8 text-sm leading-relaxed text-neutral-500">
                {closing}
              </p>
              <motion.a
                href={`https://wa.me/${info.phone.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:scale-[1.04]"
                whileTap={{ scale: 0.97 }}
              >
                {cta}
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Address */}
            <div>
              <span className="mb-2 block text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                Ubicación
              </span>
              <p className="text-xs leading-relaxed text-neutral-500">
                {info.address}
              </p>
              <p className="mt-1 text-xs text-neutral-400">{info.addressNote}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
