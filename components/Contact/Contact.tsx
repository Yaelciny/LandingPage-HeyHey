"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contactSection } from "@/data/content";

export default function Contact() {
  const { sectionLabel, info, closing } = contactSection;

  const detailsRef = useRef(null);
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.2 });

  const contactItems = [
    { label: "Ubicación", value: info.address, sub: info.addressNote },
    {
      label: "Teléfono / WhatsApp",
      value: info.phone,
      href: `https://wa.me/${info.phone.replace(/\+/g, "")}`,
    },
    {
      label: "Correo electrónico",
      value: info.email,
      href: `mailto:${info.email}`,
    },
    {
      label: "Instagram",
      value: info.instagramHandle,
      href: info.instagram,
    },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-neutral-950 py-28 text-white lg:py-36"
    >
      {/* Animated background orb */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
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

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-16 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          Hablemos de tu proyecto
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2" ref={detailsRef}>
          {/* Contact items — staggered slide in */}
          <div className="space-y-8">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={detailsInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <span className="mb-2 block text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">
                  {item.label}
                </span>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-neutral-300 transition-colors hover:text-white"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.value} →
                  </motion.a>
                ) : (
                  <>
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="mt-1 text-xs text-neutral-500">
                        {item.sub}
                      </p>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              {closing}
            </p>

            <motion.a
              href={`https://wa.me/${info.phone.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-8 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-white px-8 py-3 text-sm font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Sweep fill */}
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-400 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Contáctanos
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 h-4 w-4 transition-colors duration-300 group-hover:text-black"
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
