"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Coffee } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero.webp",
    title: "Bake O Beans Café – Best Coffee & Best Café in Pokhara",
    subtitle: "Best Café in Pokhara",
    description:
      "Experience the best coffee in Pokhara and freshly baked pastries at Bake O Beans Café in Simalchaur. Every cup is brewed to perfection in our cozy atmosphere.",
    cta: "Explore Our Menu",
  },
  {
    id: 2,
    image: "/images/hero2.webp",
    title: "The Ultimate Coffee Destination in Simalchaur",
    subtitle: "Best Coffee in Pokhara",
    description:
      "Bake O Beans is widely recognized as the best cafe in Pokhara for premium coffee, fresh bakery items, and a world-class relaxing experience. Perfect for work or catch-ups.",
    cta: "Visit Bake O Beans Café",
  },
  {
    id: 3,
    image: "/images/hero3.webp",
    title: "Handcrafted Flavors in Simalchaur, Pokhara",
    subtitle: "Premium Coffee Heaven",
    description:
      "Visit Bake O Beans Café for the best café experience in Pokhara. Enjoy our freshly brewed specialty coffee and bakery delights made with local love and global quality.",
    cta: "Discover More",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Minimum swipe distance threshold
  const minSwipeDistance = 50;

  // Auto-slide functionality
  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center overflow-hidden bg-coffee-900"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slider Container */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial={hasMounted ? "enter" : "center"}
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
              quality={85}
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-coffee-900/80 via-coffee-900/40 to-coffee-900/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={goToPrevious}
        className="hidden sm:flex absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="hidden sm:flex absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-10 content-max px-5 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center min-h-dvh py-24 sm:py-16 lg:py-20">
          {/* Centered Text Content */}
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              initial={
                hasMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: hasMounted ? 0.2 : 0,
              }}
              className="space-y-4 sm:space-y-6 md:space-y-8 text-white text-center max-w-4xl mx-auto"
            >
              <motion.p
                initial={
                  hasMounted ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: hasMounted ? 0.3 : 0,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] text-paper-100 font-semibold"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>

              <motion.h1
                initial={
                  hasMounted ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: hasMounted ? 0.4 : 0,
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold leading-[1.2] px-2 text-paper-50 drop-shadow-lg"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex items-center justify-center gap-2 py-1 sm:py-2"
              >
                <div className="w-6 sm:w-8 h-px bg-clay-400" />
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-clay-400 rounded-full" />
                  <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-clay-400" />
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-clay-400 rounded-full" />
                </div>
                <div className="w-6 sm:w-8 h-px bg-clay-400" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-xs sm:text-sm md:text-base lg:text-lg text-paper-100/95 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="bg-clay-500 hover:bg-clay-600 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-clay-500/20"
                  onClick={() => {
                    const menuSection = document.getElementById("menu");
                    if (menuSection) {
                      menuSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {heroSlides[currentSlide].cta}
                </Button>
              </motion.div>

              {/* Swipe hint - Mobile only */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="sm:hidden text-xs text-paper-300/60 mt-6"
              >
                ← Swipe to explore →
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 sm:w-8 h-2.5 sm:h-2 bg-clay-400"
                : "w-2.5 sm:w-2 h-2.5 sm:h-2 bg-white/50 hover:bg-white/70 active:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
