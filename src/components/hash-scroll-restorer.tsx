"use client";

import { useEffect } from "react";

export function HashScrollRestorer() {
  useEffect(() => {
    const restore = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 144;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    };

    window.requestAnimationFrame(restore);
    const timers = [0, 80, 200, 500, 1200, 2600, 4800].map((delay) => window.setTimeout(restore, delay));
    window.addEventListener("hashchange", restore);
    window.addEventListener("load", restore);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", restore);
      window.removeEventListener("load", restore);
    };
  }, []);

  return null;
}
