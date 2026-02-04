"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Cozy café interior",
      category: "interior",
    },
    {
      src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Beautiful latte art",
      category: "coffee",
    },
    {
      src: "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Warm café atmosphere",
      category: "interior",
    },
    {
      src: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Perfect cappuccino",
      category: "coffee",
    },
    {
      src: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Customers enjoying coffee",
      category: "customers",
    },
    {
      src: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Artisan coffee preparation",
      category: "coffee",
    },
  ];

  // Toggle active state on tap for mobile
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="gallery"
      className="relative py-14 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/h1-bacground-img-1.jpg.webp"
          alt="Gallery background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-paper-50/50" />
      </div>

      <div className="relative z-10 content-max px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-coffee-900 mb-3 sm:mb-4">
            Our Atmosphere
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-coffee-700/80 max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
            Experience the warm, inviting atmosphere that makes us more than
            just a café—it's a place where moments are made and memories are
            created.
          </p>
        </motion.div>

        {/* Gallery Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg group cursor-pointer transition-all duration-300 aspect-[4/3]"
              onClick={() => handleToggle(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-500 ${
                  activeIndex === index ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-coffee-900/90 via-coffee-900/50 to-transparent flex flex-col justify-end p-3 sm:p-4 md:p-6 transition-opacity duration-300 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 sm:group-hover:opacity-100"
                }`}
              >
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  {image.alt}
                </p>
                <span className="text-white/70 text-xs sm:text-sm capitalize">
                  {image.category}
                </span>
              </div>

              {/* Touch indicator for mobile */}
              <div className="sm:hidden absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="sm:hidden text-xs text-center text-coffee-600/50 mb-6">
          Tap images to see details
        </p>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-clay-600 hover:bg-clay-700 active:bg-clay-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl active:shadow-lg transition-all duration-300 active:scale-[0.98] group"
            asChild
          >
            <a href="#gallery">
              View Gallery
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
