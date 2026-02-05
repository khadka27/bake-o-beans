"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Snowflake,
  Leaf,
  Coffee as CoffeeCup,
  Wine,
  IceCream,
  Utensils,
  Cake,
  Wind,
} from "lucide-react";

interface MenuCategory {
  id: string;
  title: string;
  icon: any;
}

export default function Menu() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const menuCategories: MenuCategory[] = [
    { id: "hot-coffee", title: "Coffee (Hot)", icon: Coffee },
    { id: "iced-coffee", title: "Iced Coffee", icon: Snowflake },
    { id: "matcha", title: "Matcha", icon: Leaf },
    {
      id: "alternative-drinks",
      title: "Alternative Drinks",
      icon: CoffeeCup,
    },
    { id: "drinks", title: "Drinks", icon: Wine },
    {
      id: "smoothies-shakes",
      title: "Smoothies & Shakes",
      icon: IceCream,
    },
    { id: "food", title: "Food", icon: Utensils },
    { id: "bakery", title: "Bakery Items", icon: Cake },
    { id: "hookah", title: "Hukka (Mint)", icon: Wind },
  ];

  return (
    <section
      id="menu"
      className="relative py-14 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background2.webp"
          alt="Menu background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={70}
        />
        {/* <div className="absolute inset-0 bg-paper-50/95 dark:bg-coffee-900/95" /> */}
      </div>

      <div className="relative z-10 content-max px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-coffee-900 dark:text-coffee-900 mb-3 sm:mb-4">
            OUR MENU
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-coffee-800 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore our diverse selection of beverages, food, and treats
          </p>
        </motion.div>

        {/* Menu Categories - Horizontal scroll on mobile, grid on desktop */}
        <div className="sm:hidden mb-6">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 snap-x snap-mandatory mobile-hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="flex-shrink-0 snap-center"
              >
                <Link
                  href={`/menu#${category.id}`}
                  className="group flex flex-col items-center w-24"
                >
                  {/* Circle with Icon */}
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-clay-400 to-clay-600 shadow-lg active:shadow-md transition-all duration-300 flex items-center justify-center mb-3"
                  >
                    <category.icon
                      className="w-10 h-10 text-white"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Category Name */}
                  <h3 className="text-xs font-sans font-bold text-coffee-900 text-center leading-tight">
                    {category.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
          {/* Scroll hint for mobile */}
          <p className="text-xs text-center text-coffee-600/50 mt-2">
            ← Scroll to see more →
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto text-amber-800">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/menu#${category.id}`}
                className="group flex flex-col items-center"
              >
                {/* Circle with Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-clay-400 to-clay-600 dark:from-clay-600 dark:to-clay-800 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center mb-4"
                >
                  {/* Icon */}
                  <category.icon
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white"
                    strokeWidth={1.5}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                </motion.div>

                {/* Category Name */}
                <h3 className="text-sm sm:text-base md:text-lg font-sans font-bold text-coffee-900 dark:text-paper-900 text-center group-hover:text-clay-600 dark:group-hover:text-clay-400 transition-colors max-w-[120px]">
                  {category.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-clay-600 hover:bg-clay-700 active:bg-clay-800 dark:bg-clay-500 dark:hover:bg-clay-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md active:scale-[0.98]"
          >
            <span className="text-sm sm:text-base">View Full Menu</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
