'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    // Loading complete after 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Handle scroll lock
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.overflowX = 'hidden'; // Keep X hidden for layout
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-background)]"
      >
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-5xl md:text-7xl font-serif text-[var(--color-foreground)]">
            Dimas<span className="text-[var(--color-accent)]">.</span>
          </span>
        </motion.div>

        {/* Progress Line */}
        <div className="w-48 md:w-64 relative">
          <div className="h-[1px] w-full bg-[var(--color-border)]" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: Math.min(progress, 100) / 100 }}
            transition={{ duration: 0.1 }}
            className="absolute top-0 left-0 h-[1px] w-full bg-[var(--color-accent)] origin-left"
          />
        </div>

        {/* Loading Text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xs tracking-[0.3em] uppercase text-[var(--color-foreground-subtle)]"
        >
          Loading
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
}
