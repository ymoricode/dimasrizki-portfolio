'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { projects, Project, ProjectCategory } from '@/lib/data';

/**
 * Category Tab Data
 */
const categories: { key: ProjectCategory; label: string; icon: React.ReactNode }[] = [
  {
    key: 'web-development',
    label: 'Web Development',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    key: 'data-analyst',
    label: 'Data Analyst',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

/**
 * Project Card — Compact Grid Card
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-[var(--color-background-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-card)] via-transparent to-transparent opacity-60" />

        {/* Year badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[var(--color-background)]/70 backdrop-blur-sm text-[var(--color-foreground-muted)] border border-[var(--color-border)]/50">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7">
        {/* Role tag */}
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
          {project.role}
        </span>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-serif text-[var(--color-foreground)] mb-3 leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* View Project Link */}
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] hover:gap-3 transition-all duration-300"
        >
          View Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/[0.02] transition-all duration-500 pointer-events-none" />
    </motion.article>
  );
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web-development');

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="work" className="section bg-[var(--color-background-alt)]">
      <div className="container">
        {/* Section Header — Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-12"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="mt-4 mb-4">
            Selected <span className="text-[var(--color-accent)]">Projects</span>
          </h2>
          <p className="text-[var(--color-foreground-muted)] max-w-lg mx-auto text-lg">
            A curated selection of projects showcasing my approach to design, development, and data.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="relative inline-flex gap-1 p-1.5 rounded-full bg-[var(--color-background-card)] border border-[var(--color-border)]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative z-10 flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'text-[var(--color-background)]'
                    : 'text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>

                {/* Active Pill Background */}
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-[var(--color-accent)]"
                    style={{ zIndex: -1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="#" className="btn-outline inline-flex group">
            View All Projects
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
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
