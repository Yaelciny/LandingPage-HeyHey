// ============================================================
// Footer — Pie de pagina con marca, navegacion y datos de contacto.
// Incluye iconos sociales animados, links con linea
// decorativa y divisor animado antes del copyright.
// ============================================================
"use client";

import { motion } from "framer-motion";
import { brandName, footerData, navLinks } from "@/data/nat";
import { Mail, Phone, Share2 } from "lucide-react";

export default function Footer() {
  // Funcion de scroll suave reutilizada para los links de navegacion
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black py-16">
      {/* Patron de cuadricula sutil sobre fondo negro */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              {brandName}
            </span>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500">
              {footerData.tagline}
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-neutral-600">
              Transformamos ideas en marcas que se recuerdan. Creatividad con
              estrategia.
            </p>

            {/* Iconos de redes sociales con animacion de hover */}
            <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
              {[
                {
                  href: "https://instagram.com/hey_hey_marketing",
                  icon: Share2,
                  label: "Instagram",
                },
                { href: "mailto:hola@heyheymarketing.mx", icon: Mail, label: "Email" },
                { href: "https://wa.me/523312694198", icon: Phone, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 hover:border-white/30 hover:text-white"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="group inline-flex items-center gap-2 text-xs tracking-wide text-white/40 transition-colors hover:text-white"
                  >
                    <span className="inline-block h-px w-0 bg-white transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
              Contacto
            </p>
            <div className="space-y-3">
              <p className="text-xs text-neutral-600">
                hola@heyheymarketing.mx
              </p>
              <p className="text-xs text-neutral-600">+52 331 269 4198</p>
              <p className="text-xs leading-relaxed text-neutral-600">
                León de los Aldama, Gto.
                <br />
                Atención en toda la República.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Linea divisora animada que se expande desde el centro */}
        <motion.div
          className="mt-12 h-px bg-white/8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs text-neutral-600"
          >
            {footerData.copyright}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
