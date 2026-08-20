import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { impacts } from '../data/portfolioData';

// Simple counter component that increments to the target number
const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (like "+", "%")
  const numMatch = value.match(/(\d+)/);
  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * targetNumber));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {targetNumber > 0 ? count : value}{suffix}
    </span>
  );
};

export const Impact = () => {
  return (
    <section className="py-20 relative border-y border-white/5 bg-blue-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors drop-shadow-md">
                <AnimatedCounter value={impact.value} />
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">
                {impact.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
