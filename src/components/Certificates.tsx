'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { certificates, Certificate } from '@/lib/data';

/**
 * PARALLAX CONFIGURATION
 */
const PARALLAX_CONFIG = {
  imageOffset: 50,
  cardFloat: 25,
  spring: { stiffness: 80, damping: 25 },
};

/**
 * Certificate Card with Parallax
 */
function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [PARALLAX_CONFIG.cardFloat, 0, -PARALLAX_CONFIG.cardFloat]);
  const imageY = useTransform(scrollYProgress, [0, 1], [PARALLAX_CONFIG.imageOffset, -PARALLAX_CONFIG.imageOffset]);
  
  const cardYSpring = useSpring(cardY, PARALLAX_CONFIG.spring);
  const imageYSpring = useSpring(imageY, PARALLAX_CONFIG.spring);

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ y: cardYSpring }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[var(--color-background-card)] border border-[var(--color-border)] overflow-hidden"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          style={{ y: imageYSpring }}
          className="relative w-full h-[130%]"
        >
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-card)] via-transparent to-transparent" />
        
        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[var(--color-accent)]/20 flex items-center justify-center z-20"
            >
              <motion.a
                href={certificate.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-background)] text-sm font-semibold tracking-wider uppercase hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                View Credential
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold tracking-[0.15em] text-[var(--color-accent)] uppercase">
            {certificate.issuer}
          </span>
          <span className="text-xs text-[var(--color-foreground-subtle)]">
            {certificate.year}
          </span>
        </div>
        <h4 className="text-lg font-serif text-[var(--color-foreground)] leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {certificate.title}
        </h4>
      </div>

      {/* Border Hover Effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[var(--color-accent)] transition-colors duration-500 pointer-events-none" />
      
      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <section id="certificates" className="section bg-[var(--color-background)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <span className="section-label">Credentials</span>
          <h2 className="mt-4 mx-auto max-w-3xl">
            Certifications & <span className="text-[var(--color-accent)]">Achievements</span>
          </h2>
          <p className="mt-6 text-[var(--color-foreground-muted)] max-w-2xl mx-auto text-lg">
            Continuous learning validates expertise. Here are credentials 
            that demonstrate my commitment to excellence.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {displayedCertificates.map((certificate, index) => (
              <CertificateCard 
                key={certificate.id} 
                certificate={certificate} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {certificates.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline inline-flex group"
            >
              {showAll ? 'Show Less' : `View All ${certificates.length} Certificates`}
              <motion.svg 
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none"
              >
                <path
                  d="M3 5L7 9L11 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
