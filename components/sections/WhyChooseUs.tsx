"use client";

import { motion, useInView } from "framer-motion";
import { Coffee, Croissant, Leaf, Wifi } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      icon: Coffee,
      title: "Freshly Roasted Beans",
      description:
        "We use premium-quality coffee beans and roast them fresh to deliver rich aroma, bold flavor, and a consistently perfect cup at Bake O Beans Café.",
    },
    {
      icon: Croissant,
      title: "Handmade Pastries Daily",
      description:
        "Our pastries are baked fresh every day using traditional recipes and carefully selected ingredients to ensure taste, texture, and freshness.",
    },
    {
      icon: Leaf,
      title: "Organic & Locally Sourced",
      description:
        "We prioritize organic ingredients and support local farmers, bringing you high-quality, sustainable products straight from trusted sources.",
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi & Cozy Seating",
      description:
        "Relax in our warm, comfortable café with free high-speed Wi-Fi-ideal for work, meetings, or unwinding over great coffee.",
    },
  ];

  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background2.webp"
          alt="Why Choose Us background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={70}
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
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-coffee-700/80 max-w-2xl mx-auto leading-relaxed">
            Discover what makes us different and why we're the perfect choice
            for your coffee experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-clay-600 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                {/* SVG Icon */}
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-coffee-900 mb-3 group-hover:text-clay-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-coffee-700/70 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
