'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section 
      id="about" 
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/h1-bacground-img-1.jpg.webp"
          alt="Café background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-coffee-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 sm:mb-8"
          >
            About the Café
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4 sm:space-y-5 mb-8 sm:mb-10"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-paper-100 leading-relaxed font-light">
              We're a neighborhood café serving freshly roasted coffee, handmade pastries, and warm conversations since 2022.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-paper-200/90 leading-relaxed">
              What makes us special? Our premium, ethically sourced coffee beans roasted to perfection, 
              our artisan bakery crafting fresh pastries daily, and our cozy, welcoming ambiance that brings people together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-paper-50 hover:bg-paper-100 text-coffee-900 px-8 py-6 text-base sm:text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-paper-50 group"
              asChild
            >
              <Link href="#about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
