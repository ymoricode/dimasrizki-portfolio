'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { personalInfo } from '@/lib/data';

/**
 * Typewriter Component for Roles
 */
const roles = [
  'Front End Developer.',
  'Data Analyst.', 
  'UI UX Designer.',
];

function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="text-[var(--color-accent)]">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-[var(--color-accent)] ml-1 align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageYSpring = useSpring(imageY, { stiffness: 100, damping: 30 });
  
  // Parallax for background elements
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const y1Spring = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-[100svh] bg-[var(--color-background)]"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1Spring }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
        >
          <div className="w-full h-full" 
               style={{ background: 'radial-gradient(circle, rgba(109, 93, 246, 0.3) 0%, transparent 70%)' }} 
          />
        </motion.div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-10 flex flex-col min-h-[100svh]"
      >
        {/* Mobile Layout: stacked vertically, image at bottom */}
        <div className="flex flex-col justify-between flex-1 pt-20 md:pt-28 lg:pt-32">
          
          {/* Desktop: 2-col grid / Mobile: stacked */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-10 lg:gap-16 items-center flex-1">
            
            {/* Left Column - Text Content */}
            <div className="text-left flex flex-col justify-center">
              {/* Big Hello */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-2 md:mb-4 text-[2.75rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-sans font-bold leading-[1.05] text-[var(--color-foreground)] tracking-tight"
              >
                HELLO.
              </motion.h1>

              {/* Typewriter Role */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 md:mb-8 lg:mb-10 text-[var(--color-foreground-muted)] italic"
              >
                I&apos;m Dimas, a <TypewriterText />
              </motion.p>

              {/* CTAs - Side by side, rounded pill style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-row items-center gap-3"
              >
                <a 
                  href="#contact" 
                  className="btn-primary rounded-full group text-xs sm:text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 4L12 13L2 4"/>
                  </svg>
                  Get in touch
                  <span className="transition-transform group-hover:translate-x-0.5">»</span>
                </a>
                <a 
                  href="/cv-dimas-rizki.pdf" 
                  download 
                  className="btn-outline rounded-full group text-xs sm:text-sm"
                >
                  CV
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1V10M7 10L3 6M7 10L11 6M1 13H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-end justify-center lg:items-center mt-4 lg:mt-0"
            >
              {/* Image Container */}
              <div className="relative w-[260px] h-[320px] sm:w-[280px] sm:h-[360px] md:w-[340px] md:h-[430px] lg:w-[380px] lg:h-[480px] xl:w-[420px] xl:h-[530px] overflow-hidden rounded-2xl lg:rounded-none">
                {/* Parallax Image */}
                <motion.div
                  style={{ y: imageYSpring }}
                  className="relative w-full h-[110%]"
                >
                  <Image
                    src="/images/avatardimas.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-40" />
                
                {/* Border */}
                <div className="absolute inset-0 border border-[var(--color-border)] rounded-2xl lg:rounded-none" />
              </div>

              {/* Decorative dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-16 right-[10%] sm:right-[15%] lg:right-[-12px] w-3 h-3 rounded-full bg-[var(--color-accent)]"
              />

              {/* Decorative Lines - Desktop only */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="hidden lg:block absolute -right-6 top-1/4 w-[1px] h-24 bg-gradient-to-b from-[var(--color-accent)] to-transparent origin-top"
              />
            </motion.div>
          </div>

          {/* Bottom spacing */}
          <div className="pb-4 md:pb-8 lg:pb-16" />
        </div>
      </motion.div>
    </section>
  );
}
