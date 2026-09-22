"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.0,         
      easing: (t) => t,        
      smooth: true,
      lerp: 0.03,             
      wheelMultiplier: 1.0,    
      normalizeWheel: true,    
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
