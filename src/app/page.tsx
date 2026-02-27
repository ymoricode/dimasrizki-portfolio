'use client';

import {
  Navbar,
  Hero,
  About,
  Skills,
  Work,
  Certificates,
  Testimonials,
  Contact,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
