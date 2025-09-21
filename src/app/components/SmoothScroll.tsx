"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scrolling untuk anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle anchor clicks
    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return null;
}
