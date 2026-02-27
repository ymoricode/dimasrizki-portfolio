'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { processSteps } from '@/lib/data';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="section bg-[var(--color-background-card)] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20"
        >
          <div>
            <span className="section-label">My Process</span>
            <h2 className="mt-4">
              From <span className="text-[var(--color-accent)]">concept</span> to reality
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-[var(--color-foreground-muted)] leading-relaxed">
              A structured, results-driven approach that ensures every project 
              is delivered with precision, clarity, and exceptional quality.
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-[2.5rem] lg:left-[4rem] top-0 bottom-0 w-[1px] bg-[var(--color-border)]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative grid lg:grid-cols-[8rem_1fr] gap-6 lg:gap-12 py-10 lg:py-14 group"
            >
              {/* Step Number */}
              <div className="relative">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="w-20 h-20 flex items-center justify-center bg-[var(--color-background)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors duration-300 relative z-10"
                >
                  <span className="text-3xl font-serif text-[var(--color-accent)]">
                    {step.step}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 border-b border-[var(--color-border)] pb-10 lg:pb-14">
                <h3 className="text-2xl lg:text-3xl font-serif text-[var(--color-foreground)] min-w-[200px] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[var(--color-foreground-muted)] leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
