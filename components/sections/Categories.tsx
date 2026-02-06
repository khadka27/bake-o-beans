"use client";

import { motion, useInView } from "framer-motion";
import { Coffee } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      id: "types-coffee",
      label: "TYPES OF COFFEE",
      description:
        "From classic espresso and cappuccino to flavored lattes and iced coffee, we serve expertly brewed coffee made from freshly roasted beans for every taste.",
      image: "/images/h2-custom-icon-5.png",
    },
    {
      id: "bean-varieties",
      label: "BEAN VARIETIES",
      description:
        "We use high-quality coffee beans selected for rich aroma and balanced flavor, ensuring a smooth and satisfying cup every time you visit Bake O Beans Café.",
      image: "/images/h2-custom-icon-6.png",
    },
    {
      id: "coffee-pastry",
      label: "COFFEE & PASTRY",
      description:
        "Enjoy the perfect pairing of handcrafted coffee and freshly baked pastries, croissants, brownies, and desserts-baked daily with care and passion.",
      image: "/images/h2-custom-icon-7.png",
    },
    {
      id: "coffee-to-go",
      label: "COFFEE TO GO",
      description:
        "Short on time? Grab your favorite coffee to go and enjoy premium café flavors wherever your day takes you in Pokhara.",
      image: "/images/h2-custom-icon-8.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="py-14 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-[0]">
        <Image
          src="/images/h1-bacground-img-1.jpg.webp"
          alt="Categories background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
      </div>

      <div className="content-max px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 text-coffee-900 leading-tight"
          >
            OUR DELICIOUS OFFER
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-clay-600 font-medium text-xs sm:text-sm uppercase tracking-wider mb-4"
          >
            Bake O Beans Café – Simalchaur, Pokhara-8
          </motion.p>

          {/* Separator with Coffee Icon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 py-2 mb-4"
          >
            <div className="w-10 sm:w-12 md:w-16 h-px bg-clay-500" />
            <div className="flex items-center justify-center">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-clay-500" />
            </div>
            <div className="w-10 sm:w-12 md:w-16 h-px bg-clay-500" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-coffee-800 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Experience why we are considered the{" "}
            <strong>best café in Pokhara</strong>. Discover our carefully
            crafted specialty drinks, premium beans, and freshly baked treats at
            Bake O Beans, where we serve the{" "}
            <strong>best coffee in Pokhara</strong> every single day.
          </motion.p>
        </motion.div>

        {/* Categories Grid - 2 columns on mobile */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm hover:translate-y-[-4px] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Icon Image */}
              <div className="mb-4 sm:mb-6 relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-3 bg-clay-50 rounded-full">
                <Image
                  src={category.image}
                  alt={`${category.label} - Best Café & Coffee in Pokhara`}
                  fill
                  className="object-contain opacity-80 brightness-90 contrast-110"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-sans font-bold uppercase mb-2 sm:mb-3 md:mb-4 text-coffee-900 tracking-wide leading-tight">
                {category.label}
              </h3>

              {/* Description - Hidden on small mobile, visible on larger screens */}
              <p className="hidden sm:block text-xs sm:text-sm md:text-base text-coffee-800 leading-relaxed max-w-xs">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
