'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="section bg-[var(--color-background-alt)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 mx-auto max-w-3xl">
            What clients <span className="text-[var(--color-accent)]">say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative p-8 lg:p-10 bg-[var(--color-background-card)] border border-[var(--color-border)] group hover:border-[var(--color-accent)]/50 transition-colors duration-500"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8">
                <span className="text-8xl font-serif text-[var(--color-accent)] opacity-10 leading-none select-none">
                  &ldquo;
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="var(--color-accent)">
                    <path d="M8 0L10.3511 5.18237L16 5.87336L11.768 9.81763L12.9389 16L8 12.9824L3.06107 16L4.23196 9.81763L0 5.87336L5.64886 5.18237L8 0Z"/>
                  </svg>
                ))}
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-lg leading-relaxed text-[var(--color-foreground)] mb-8 font-serif italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center">
                    <span className="text-[var(--color-accent)] font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-foreground)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[var(--color-foreground-subtle)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
