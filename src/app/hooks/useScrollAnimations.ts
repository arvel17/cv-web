"use client";

import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            if (options.triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!options.triggerOnce) {
            // Tambahkan delay kecil sebelum remove class untuk smooth transition
            setTimeout(() => {
              if (!entry.isIntersecting) {
                entry.target.classList.remove("revealed");
              }
            }, 100);
          }
        });
      },
      {
        threshold: options.threshold || 0.15, // Tingkatkan threshold sedikit
        rootMargin: options.rootMargin || "-10% 0px -10% 0px", // Margin untuk trigger lebih smooth
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return elementRef;
}

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return elementRef;
}
