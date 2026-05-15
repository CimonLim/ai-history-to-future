"use client";

import { useEffect } from "react";

export function HashScrollRestorer() {
  useEffect(() => {
    const restore = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      target?.scrollIntoView({ block: "start" });
    };

    const timers = [120, 500, 1200].map((delay) => window.setTimeout(restore, delay));
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
