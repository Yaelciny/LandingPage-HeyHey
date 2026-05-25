"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSection } from "@/data/nat";

const INTERVAL = 6000;

export default function Hero() {
  const { banners, distinctives, scrollIndicatorText } = heroSection;
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % banners.length),
    [banners.length]
  );

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const titleWords = banners[current].title.split(" ");

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-foreground text-background"
    >
      {/* Animated background circles */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-background/[0.03]"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-60 h-[800px] w-[800px] rounded-full bg-background/[0.02]"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-background/20"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Banner carousel */}
      <div className="relative z-10 flex min-h-[60vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Word-by-word title reveal */}
            <h1 className="flex flex-wrap justify-center gap-x-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
              {titleWords.map((word, i) => (
                <motion.span
                  key={`${current}-${i}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.12,
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle — slide from right */}
            <motion.p
              className="text-lg font-medium tracking-wide text-neutral-300 sm:text-xl md:text-2xl"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            >
              {banners[current].subtitle}
            </motion.p>

            {/* Description — fade up */}
            <motion.p
              className="max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            >
              {banners[current].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Carousel indicators with progress */}
        <div className="mt-12 flex items-center gap-3">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a banner ${i + 1}`}
              className="relative h-[3px] overflow-hidden rounded-full bg-neutral-700"
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
      </div>

      {/* Infinite marquee for distinctives */}
      <div className="relative z-10 mt-16 w-full overflow-hidden border-t border-background/10">
        <motion.div
          className="flex whitespace-nowrap py-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...distinctives, ...distinctives].map((d, i) => (
            <span
              key={i}
              className="mx-8 flex shrink-0 items-center gap-3 text-xs tracking-[0.2em] text-neutral-400 uppercase sm:text-sm"
            >
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-background/30" />
              {d.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
            {scrollIndicatorText}
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-background/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
