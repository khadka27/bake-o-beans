"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
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

      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-coffee-900 mb-4">
            Our Atmosphere
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-coffee-700/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Experience the warm, inviting atmosphere that makes us more than just a café—it's a place where moments are made and memories are created.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl group cursor-pointer transition-all duration-300 aspect-[4/3]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-coffee-900/90 via-coffee-900/50 to-transparent flex flex-col justify-end p-4 sm:p-6"
              >
                <p className="text-white text-base sm:text-lg font-semibold">
                  {image.alt}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="bg-clay-600 hover:bg-clay-700 text-white px-8 py-6 text-base sm:text-lg rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a href="#gallery">
              View Gallery
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
