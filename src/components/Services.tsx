'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/lib/data';

const icons: Record<string, JSX.Element> = {
  code: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 18L22 12L16 6M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  palette: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="14" r="2" fill="currentColor"/>
    </svg>
  ),
  lightbulb: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.2208 7.20683 13.1599 9 14.1973V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V14.1973C16.7932 13.1599 18 11.2208 18 9C18 5.68629 15.3137 3 12 3Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rocket: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 16.5C3 18 3 21 3 21C3 21 6 21 7.5 19.5C8.32843 18.6716 8.32843 17.3284 7.5 16.5C6.67157 15.6716 5.32843 15.6716 4.5 16.5Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 4C14.5 4 13 5.5 11 7.5L8.5 10L10 14L14 15.5L16.5 13C18.5 11 20 9.5 20 9.5C20 6 17.9706 4.5 14.5 4Z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15" cy="8" r="1" fill="currentColor"/>
    </svg>
  ),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="section bg-[var(--color-background)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-20"
        >
          <span className="section-label">Services</span>
          <h2 className="mt-4 mx-auto max-w-3xl">
            What I <span className="text-[var(--color-accent)]">offer</span>
          </h2>
          <p className="mt-6 text-[var(--color-foreground-muted)] max-w-2xl mx-auto text-lg">
            End-to-end solutions that transform ideas into impactful digital experiences, 
            tailored to elevate your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative p-8 lg:p-10 bg-[var(--color-background-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-500"
            >
              {/* Number */}
              <div className="absolute top-6 right-8">
                <span className="text-7xl font-serif text-[var(--color-foreground)] opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-[var(--color-accent)] transition-all duration-500">
                  0{index + 1}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-foreground-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all duration-300 mb-6">
                {icons[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-serif text-[var(--color-foreground)] mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[var(--color-foreground-muted)] leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-accent)]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex group">
            Start a Project
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
