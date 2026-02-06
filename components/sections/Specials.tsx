"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Specials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const specials = [
    {
      id: 1,
      name: "Himalayan Blend Latte",
      description:
        "A smooth and aromatic signature latte inspired by Himalayan flavors, crafted with premium coffee beans.",
      image: "/images/our-specials/21563-himalayan-latte-2.jpg",
    },
    {
      id: 2,
      name: "Almond Croissant",
      description:
        "Buttery, flaky, and freshly baked croissant filled with rich almond goodness.",
      image:
        "/images/our-specials/Easy-Chocolate-Almond-Croissants-2-crop.webp",
    },
    {
      id: 3,
      name: "Matcha Latte",
      description:
        "A creamy and refreshing matcha latte made with high-quality matcha.",
      image: "/images/our-specials/IcedMatchaLatte-1.jpg",
    },
    {
      id: 4,
      name: "Tiramisu",
      description:
        "Classic Italian dessert layered with espresso-soaked sponge and mascarpone cream.",
      image: "/images/our-specials/THUMB-VIDEO-2_rev1-56.avif",
    },
    {
      id: 5,
      name: "Cappuccino",
      description:
        "Timeless favorite featuring bold espresso topped with velvety milk foam.",
      image: "/images/our-specials/anleitung-cappuccino-blogheader.webp",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description:
        "Moist, rich, and deeply chocolatey-a must-try dessert for chocolate lovers.",
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="specials"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background2.webp"
          alt="Specials background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-paper-50/50" />
      </div>

      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-coffee-900 mb-2">
            OUR SPECIALS
          </h2>
          <p className="text-clay-600 font-medium text-xs sm:text-sm uppercase tracking-wider mb-4">
            Discover our featured drinks and bakery favorites
          </p>
          <p className="text-sm sm:text-base md:text-lg text-coffee-700/80 max-w-2xl mx-auto leading-relaxed">
            Explore the most loved creations at Bake O Beans Café, Simalchaur,
            Pokhara-8. From signature coffee blends to freshly baked desserts,
            our specials are crafted to highlight bold flavors and customer
            favorites.
          </p>
        </motion.div>

        {/* Circular Dishes Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10"
        >
          {specials.map((special, index) => (
            <motion.div
              key={special.id}
              variants={itemVariants}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Circular Image Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-xl mb-4 cursor-pointer group"
              >
                <Image
                  src={special.image}
                  alt={special.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                />
                <div className="absolute inset-0 bg-coffee-900/20 group-hover:bg-coffee-900/10 transition-colors duration-300" />

                {/* Ring effect on hover */}
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { scale: 1.2, opacity: 0.3 }
                      : { scale: 1, opacity: 0 }
                  }
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full border-4 border-clay-500"
                />
              </motion.div>

              {/* Name with Animation */}
              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-sans font-bold text-coffee-900 uppercase tracking-wide">
                  {special.name}
                </h3>
                <p className="hidden sm:block text-[10px] sm:text-xs text-coffee-700 mt-1 line-clamp-2 px-2">
                  {special.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
