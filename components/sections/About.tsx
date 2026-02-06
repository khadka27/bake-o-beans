"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="about"
      className="relative py-14 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Coffee brewing"
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/95 via-coffee-900/85 to-coffee-900/70" />
      </div>

      <div className="relative z-10 content-max px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-clay-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
            >
              Our Story
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
              Where Every Cup <br className="hidden sm:block" />
              <span className="text-clay-400">Tells a Story</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-paper-200 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              At Bake O Beans Café, we believe coffee is more than just a
              drink-it’s a moment to pause, connect, and enjoy. Located in
              Simalchaur, Pokhara-8, our café is a cozy space where quality
              coffee meets warm hospitality.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-paper-300 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              We carefully select premium coffee beans and combine them with
              artisan brewing techniques to create rich, flavorful cups that
              keep you coming back. From freshly brewed coffee to oven-fresh
              pastries, every item is crafted with passion and attention to
              detail.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-paper-300 leading-relaxed mb-8 sm:mb-10 max-w-lg italic">
              Join us at Bake O Beans Café and experience the true essence of
              Pokhara’s growing coffee culture-one cup at a time.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-clay-600 hover:bg-clay-700 active:bg-clay-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl active:shadow-lg transition-all duration-300 active:scale-[0.98] group w-full sm:w-auto"
                asChild
              >
                <a href="#menu">
                  Explore Our Menu
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
