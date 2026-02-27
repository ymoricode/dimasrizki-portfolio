'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navigation } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]"
    >
      <nav className="container hidden md:grid grid-cols-3 items-center h-20 md:h-24">
        {/* Logo — left */}
        <Link href="/" className="relative z-10 justify-self-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="font-serif text-xl md:text-2xl tracking-tight text-[var(--color-foreground)]">
              Dimas Rizki DS<span className="text-[var(--color-accent)]">.</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation — center */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-8"
        >
          {navigation.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium tracking-wide text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Theme Toggle — right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="justify-self-end"
        >
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Mobile nav bar */}
      <nav className="container flex md:hidden items-center justify-between h-20">
        <Link href="/" className="relative z-[60]">
          <span className="font-serif text-xl tracking-tight text-[var(--color-foreground)]">
            Dimas Rizki DS<span className="text-[var(--color-accent)]">.</span>
          </span>
        </Link>

        {/* Mobile: Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[60] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[var(--color-foreground)]">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-[2px] bg-[var(--color-foreground)]" />
                <span className="w-6 h-[2px] bg-[var(--color-foreground)]" />
                <span className="w-6 h-[2px] bg-[var(--color-foreground)]" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 z-[55] bg-[var(--color-background)] backdrop-blur-3xl flex flex-col pt-20 ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center container">
          <ul className="flex flex-col gap-4">
            {navigation.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[2rem] sm:text-4xl font-bold uppercase tracking-tight text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle — below links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex items-center gap-3 border-t border-[var(--color-border)] pt-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)]">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
