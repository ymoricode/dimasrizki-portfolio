'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    
    // Get button position for ripple origin
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      // Add new ripple
      const newRipple = { id: Date.now(), x, y };
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }
    
    setIsAnimating(true);
    
    // Change theme immediately
    setTheme(newTheme);
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-[var(--color-border)]" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        ref={buttonRef}
        onClick={toggleTheme}
        className="relative w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-accent)] transition-colors overflow-visible"
        whileTap={{ scale: 0.9 }}
        animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Pulse Ring Animation */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)]"
              style={{ pointerEvents: 'none' }}
            />
          )}
        </AnimatePresence>

        {/* Sun Icon - Shows when in dark mode */}
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>

        {/* Moon Icon - Shows when in light mode */}
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </motion.button>

      {/* Ripple Effects - Emanating from toggle */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ 
            width: 40, 
            height: 40, 
            opacity: 0.4,
            x: ripple.x - 20,
            y: ripple.y - 20,
          }}
          animate={{ 
            width: 200, 
            height: 200, 
            opacity: 0,
            x: ripple.x - 100,
            y: ripple.y - 100,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed rounded-full pointer-events-none z-50"
          style={{
            background: `radial-gradient(circle, var(--color-accent) 0%, transparent 70%)`,
          }}
        />
      ))}
    </>
  );
}
