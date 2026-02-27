'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Skills data with content
 */
const skillsData = [
  {
    id: 'programming',
    title: 'PROGRAMMING LANGUAGES',
    skills: ['JS', 'REACT.JS', 'NEXT.JS', 'TAILWIND', 'VUE.JS', 'PHP', 'NODE.JS', 'LARAVEL'],
    direction: 'left', // marquee direction
  },
  {
    id: 'data',
    title: 'DATA ANALYST',
    skills: ['PYTHON', 'PANDAS', 'NUMPY', 'SQL', 'EXCEL', 'DATA VISUALIZATION', 'POWER BI'],
    direction: 'right',
  },
  {
    id: 'tools',
    title: 'TOOLS',
    skills: ['GIT', 'FIGMA  ', 'GITHUB', 'FIGMA', 'EXCEL', 'DOCKER', 'VS CODE', 'POWER BI', 'ANTIGRAVITY', 'CANVA'],
    direction: 'left',
  },
  {
    id: 'design',
    title: 'UI / UX DESIGN',
    skills: ['WIREFRAMING', 'PROTOTYPING', 'DESIGN SYSTEM', 'USABILITY TESTING'],
    direction: 'right',
  },
];

/**
 * Marquee Component - Infinite horizontal scroll
 */
function Marquee({ 
  skills, 
  direction = 'left',
  duration = 20,
}: { 
  skills: string[]; 
  direction?: 'left' | 'right';
  duration?: number;
}) {
  // Triple the skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        }}
        transition={{
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="inline-flex items-center text-sm md:text-base tracking-[0.15em] text-[var(--color-foreground-muted)]"
          >
            {skill}
            <span className="mx-4 md:mx-6 text-[var(--color-foreground-subtle)]">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Skill Row with Hover-Reveal + Marquee
 */
function SkillRow({ 
  title, 
  skills, 
  direction,
  index,
}: { 
  title: string; 
  skills: string[];
  direction: 'left' | 'right';
  index: number;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="border-t border-[var(--color-border)]"
    >
      {/* Row Container */}
      <div 
        className="py-6 md:py-8 text-center cursor-default relative overflow-hidden"
        // Desktop: hover
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        // Mobile: tap to toggle
        onClick={() => setIsActive(!isActive)}
        data-cursor-hover="true"
      >
        {/* Title and Content swap */}
        <AnimatePresence mode="wait">
          {!isActive ? (
            // Title (default state)
            <motion.h3 
              key="title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl lg:text-2xl font-sans font-bold tracking-[0.15em] md:tracking-[0.25em] text-[var(--color-foreground)] uppercase"
            >
              {title}
            </motion.h3>
          ) : (
            // Marquee Content (on hover/tap)
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Marquee 
                skills={skills} 
                direction={direction}
                duration={4}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/**
 * Skills Section Component
 */
export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-16 lg:py-24 bg-[var(--color-background)]"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-[var(--color-foreground)]">
            Skills & <span className="text-[var(--color-accent)]">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Rows */}
        <div className="max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillRow
              key={skill.id}
              title={skill.title}
              skills={skill.skills}
              direction={skill.direction as 'left' | 'right'}
              index={index}
            />
          ))}
          
          {/* Bottom border */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-[var(--color-border)]"
          />
        </div>

        {/* Hover hint - desktop only */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="hidden md:block text-center mt-10 text-xs tracking-[0.2em] uppercase text-[var(--color-foreground-subtle)]"
        >
          Hover to reveal
        </motion.p>
      </div>
    </section>
  );
}
