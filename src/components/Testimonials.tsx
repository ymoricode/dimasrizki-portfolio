'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { testimonials } from '@/lib/data';

// Split testimonials into two rows
const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="relative flex-shrink-0 w-[280px] p-4 lg:p-5 rounded-xl border border-[var(--color-border)] group hover:border-[var(--color-accent)]/50 transition-all duration-500"
      style={{
        background: 'linear-gradient(145deg, var(--color-background-card) 0%, var(--color-background-alt) 100%)',
      }}
    >
      {/* Content */}
      <div className="relative">
        <p className="text-[13px] leading-relaxed text-[var(--color-foreground-muted)] mb-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        <div className="flex items-center gap-2.5">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center flex-shrink-0">
            <span className="text-xs text-[var(--color-accent)] font-semibold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[var(--color-accent)]">
              @{testimonial.name.split(' ').join('').toLowerCase()}
            </h4>
            <p className="text-[11px] text-[var(--color-foreground-subtle)]">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Duplicate items for seamless infinite loop
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="section bg-[var(--color-background-alt)] overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-accent)] text-2xl font-bold">&rsaquo;</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              What People <span className="text-[var(--color-accent)]">Say</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div ref={ref} className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10"
          style={{ background: 'linear-gradient(to right, var(--color-background-alt), transparent)' }}
        />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10"
          style={{ background: 'linear-gradient(to left, var(--color-background-alt), transparent)' }}
        />

        {/* Row 1 - Scrolls Left */}
        <div className="mb-4 overflow-hidden">
          <div
            className="flex gap-4 testimonial-marquee-left"
            style={{
              width: 'max-content',
            }}
          >
            {row1Items.map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 testimonial-marquee-right"
            style={{
              width: 'max-content',
            }}
          >
            {row2Items.map((testimonial, index) => (
              <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
