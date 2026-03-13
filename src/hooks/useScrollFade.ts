"use client";

import { useEffect, useRef } from "react";

export function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = el.querySelectorAll(".scroll-fade");
    targets.forEach((t) => observer.observe(t));

    // Also observe the container itself if it has the class
    if (el.classList.contains("scroll-fade")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
