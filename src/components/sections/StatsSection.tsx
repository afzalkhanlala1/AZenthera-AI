"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function AnimatedStatCounter({
  value,
  isInView,
}: {
  value: string;
  isInView: boolean;
}) {
  const numericMatch = value.match(/(\d+)/);
  const suffix = value.replace(/\d+/, "").trimStart();
  const prefix = value.replace(/\d+.*$/, "").trimEnd();
  const num = numericMatch ? parseInt(numericMatch[1], 10) : 0;

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, num]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="glass-card rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text">
                  <AnimatedStatCounter value={stat.value} isInView={isInView} />
                </div>
                <p className="text-text-muted mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
