"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollAnimations";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  triggerOnce = false, // Ubah default ke false untuk animasi berulang
}: ScrollRevealProps) {
  const elementRef = useScrollReveal({ triggerOnce });

  const getDirectionClass = () => {
    switch (direction) {
      case "left":
        return "scroll-reveal-left";
      case "right":
        return "scroll-reveal-right";
      default:
        return "scroll-reveal";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
