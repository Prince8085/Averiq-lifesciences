"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function SlideInVisual({
  children,
  direction = "left",
  delay = 0.1,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const initialX = direction === "left" ? -100 : direction === "right" ? 100 : 0;
  const initialY = direction === "up" ? 40 : 0;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: initialX, y: initialY, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth exponential ease-out
      }}
      whileHover={{ scale: 1.015 }}
      className={`transition-shadow duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
