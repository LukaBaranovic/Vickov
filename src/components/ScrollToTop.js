"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // 1. Reci pregledniku da NE pamti poziciju skrolanja (manualno upravljanje)
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // 2. Odmah skoči na vrh (0, 0)
    window.scrollTo(0, 0);
  }, []);

  return null; // Ova komponenta ne prikazuje ništa na ekranu
}
