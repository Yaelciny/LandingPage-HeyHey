"use client";

import { motion } from "framer-motion";
import { brandName, footerData, navLinks } from "@/data/nat";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand — slide up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-lg font-bold tracking-tight text-white uppercase">
              {brandName}
            </span>
            <p className="mt-1 text-xs text-neutral-400">{footerData.tagline}</p>
          </motion.div>

          {/* Nav links — staggered fade */}
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              >
                <motion.a
                  href={link.href}
                  className="text-xs tracking-wide text-white/40 transition-colors hover:text-white"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Animated divider */}
        <motion.div
          className="mt-10 h-[1px] bg-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        <div className="pt-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs text-neutral-400"
          >
            {footerData.copyright}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
