"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  type?: "image" | "video";
}

const galleryImages: GalleryItem[] = [
  {
    src: "/images/gallery/bakeobeansvideo1.mp4",
    alt: "Experience Bake O Beans Café at Simalchaur Pokhara",
    category: "Atmosphere",
    type: "video",
  },
  {
    src: "/images/gallery/bakeobeansvideo2.mp4",
    alt: "Come for the coffee, stay for the feeling",
    category: "Coffee",
    type: "video",
  },
  {
    src: "/images/gallery/bakeobeansimage15.webp",
    alt: "Cozy café vibes in Pokhara",
    category: "Atmosphere",
  },
  {
    src: "/images/gallery/bakeobeansimage16.webp",
    alt: "Artisan coffee preparation",
    category: "Craft",
  },
  {
    src: "/images/gallery/bakeobeansimage17.webp",
    alt: "Bakery and sweets",
    category: "Bakery",
  },
  {
    src: "/images/gallery/bakeobeansimage18.webp",
    alt: "Morning brew rituals",
    category: "Coffee",
  },
  {
    src: "/images/gallery/bakeobeansimage19.webp",
    alt: "Fresh croissants daily",
    category: "Bakery",
  },
  {
    src: "/images/gallery/bakeobeansimage20.webp",
    alt: "Refreshing menu items",
    category: "Experience",
  },
  {
    src: "/images/gallery/bakeobeansimage1.webp",
    alt: "Signature interiors",
    category: "Atmosphere",
  },
  {
    src: "/images/gallery/bakeobeansimage2.webp",
    alt: "Latte art perfection",
    category: "Coffee",
  },
  {
    src: "/images/gallery/bakeobeansimage3.webp",
    alt: "Simalchaur coffee culture",
    category: "Community",
  },
  {
    src: "/images/gallery/bakeobeansimage4.webp",
    alt: "Artisan brewing",
    category: "Craft",
  },
  {
    src: "/images/gallery/bakeobeansimage5.webp",
    alt: "Bake O Beans Community",
    category: "Community",
  },
  {
    src: "/images/gallery/bakeobeansimage6.webp",
    alt: "Crafting the perfect cup",
    category: "Craft",
  },
  {
    src: "/images/gallery/bakeobeansimage7.webp",
    alt: "Premium coffee atmosphere",
    category: "Atmosphere",
  },
  {
    src: "/images/gallery/bakeobeansimage8.webp",
    alt: "Café details and vibes",
    category: "Atmosphere",
  },
  {
    src: "/images/gallery/bakeobeansimage9.webp",
    alt: "Artisan bakery selection",
    category: "Bakery",
  },
  {
    src: "/images/gallery/bakeobeansimage10.webp",
    alt: "Precision brewing gear",
    category: "Craft",
  },
  {
    src: "/images/gallery/bakeobeansimage11.webp",
    alt: "Delicious dessert selection",
    category: "Bakery",
  },
  {
    src: "/images/gallery/bakeobeansimage12.webp",
    alt: "Early morning freshness",
    category: "Coffee",
  },
  {
    src: "/images/gallery/bakeobeansimage13.webp",
    alt: "Inviting seating space",
    category: "Atmosphere",
  },
  {
    src: "/images/gallery/bakeobeansimage14.webp",
    alt: "Crafted with passion",
    category: "Craft",
  },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main
      className="min-h-screen bg-[#bdae9e] pt-28 pb-20"
      suppressHydrationWarning
    >
      <div className="content-max px-4" suppressHydrationWarning>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-coffee-900 mb-4"
          >
            Our Atmosphere
          </motion.h1>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            A visual journey through Bake O Beans Café—from the first roast of
            the morning to the cozy evenings in Simalchaur, Pokhara.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg break-inside-avoid"
              onClick={() => setSelectedImage(index)}
            >
              {image.type === "video" ? (
                <video
                  src={image.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="none"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-coffee-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-serif text-xl mb-1">
                  {image.alt}
                </p>
                <span className="text-clay-400 font-medium uppercase tracking-wider text-sm">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-coffee-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-clay-400 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
            {galleryImages[selectedImage].type === "video" ? (
              <video
                src={galleryImages[selectedImage].src}
                muted
                loop
                autoPlay
                playsInline
                controls
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>

          <div className="absolute bottom-10 text-center">
            <p className="text-white text-xl font-serif mb-2">
              {galleryImages[selectedImage].alt}
            </p>
            <p className="text-clay-400 uppercase tracking-widest text-sm">
              {galleryImages[selectedImage].category}
            </p>
          </div>
        </motion.div>
      )}
    </main>
  );
}
