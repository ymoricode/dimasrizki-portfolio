'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Pesan berhasil dikirim!' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Gagal mengirim pesan.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Terjadi kesalahan jaringan. Silakan coba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };


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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="contact" className="section bg-[var(--color-background)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{ background: 'radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%)' }} 
        />
      </div>

      <div className="container relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column - Info */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <span className="section-label">Get in Touch</span>
              <h2 className="mt-4">
                Let&apos;s create something <span className="text-[var(--color-accent)]">remarkable</span>
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-[var(--color-foreground-muted)] leading-relaxed mb-10"
            >
              Ready to elevate your digital presence? I&apos;m always excited to 
              collaborate on projects that push boundaries and create real impact.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 mb-10">
              <div className="group">
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)] mb-2">
                  Email
                </h4>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-xl lg:text-2xl font-serif text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)] mb-2">
                  Location
                </h4>
                <p className="text-xl lg:text-2xl font-serif text-[var(--color-foreground)]">
                  {personalInfo.location}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)]">
                Connect
              </span>
              <div className="w-8 h-[1px] bg-[var(--color-border)]" />
              {[
                { name: 'LinkedIn', url: personalInfo.social.linkedin, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'GitHub', url: personalInfo.social.github, icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' },
                { name: 'Instagram', url: personalInfo.social.instagram, icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-foreground-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon}/>
                  </svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)] mb-4"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none text-lg text-[var(--color-foreground)] transition-colors placeholder:text-[var(--color-foreground-subtle)]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)] mb-4"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none text-lg text-[var(--color-foreground)] transition-colors placeholder:text-[var(--color-foreground-subtle)]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)] mb-4"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-accent)] focus:outline-none text-lg text-[var(--color-foreground)] transition-colors resize-none placeholder:text-[var(--color-foreground-subtle)]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 2L7 9M14 2L9.5 14L7 9M14 2L2 6.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-6 p-4 text-center text-sm font-medium ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {submitStatus.type === 'success' ? '✅ ' : '❌ '}
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
