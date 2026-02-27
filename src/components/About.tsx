'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '@/lib/data';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
  };

  return (
    <section id="about" className="section bg-[var(--color-background-alt)]">
      <div className="container" ref={ref}>

        {/* Centered label */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="section-label block text-center"
        >
          About Me
        </motion.span>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0.1}
          className="text-center leading-[1.1] mt-6 max-w-3xl mx-auto"
        >
          Crafting digital{' '}
          <span className="text-[var(--color-accent)]">experiences</span>{' '}
          that matter
        </motion.h2>

        {/* Divider accent */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0.15}
          className="w-16 h-[2px] bg-[var(--color-accent)] mx-auto mt-10 mb-10"
        />

        {/* Bio text — narrow column for readability */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0.2}
          className="max-w-2xl mx-auto space-y-6 text-center"
        >
          <p className="text-lg leading-relaxed text-[var(--color-foreground-muted)]">
            {personalInfo.about.intro}
          </p>

          <p className="text-base leading-relaxed text-[var(--color-foreground-muted)]">
            {personalInfo.about.philosophy}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
