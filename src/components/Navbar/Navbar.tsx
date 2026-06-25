// ============================================================
// Navbar — Barra de navegacion fija con efecto de transparencia.
// Incluye menu hamburguesa animado para movil,
// overlay oscuro y scroll suave a cada seccion.
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/nat";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detectar scroll para aplicar fondo semitransparente al header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menu movil esta abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar menu y hacer scroll suave a la seccion indicada
  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          open
            ? "bg-background"
            : scrolled
            ? "bg-background/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#inicio");
            }}
          >
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground uppercase">
                {siteData.brand.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-neutral-400">
                {siteData.brand.suffix}
              </span>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-sm font-medium tracking-wide text-neutral-600 transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contacto");
              }}
              className="hidden md:inline-flex items-center rounded-full border border-foreground px-5 py-2 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Contáctanos
            </a>

            {/* Boton hamburguesa con animacion de transformacion a X */}
            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-6 bg-foreground"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-6 bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-6 bg-foreground"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-neutral-100 overflow-hidden"
            >
              <nav className="px-6 py-4 flex flex-col gap-2">
                {siteData.navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="py-3 px-4 text-lg font-semibold tracking-wide text-foreground hover:bg-neutral-50 rounded-lg transition-colors text-left"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay oscuro que cierra el menu al tocarlo (solo movil) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-30 md:hidden"
            style={{ top: "64px" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
