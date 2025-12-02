"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;        // número final
  duration?: number;  // duración animación
  decimals?: number;  // cantidad de decimales
}

export default function CountUp({ end, duration = 2000, decimals = 0 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const current = Number((progress * end).toFixed(decimals));
            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
