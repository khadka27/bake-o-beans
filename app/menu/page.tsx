"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

interface MenuItem {
  name: string;
  price: string;
  variants?: string;
}

interface MenuSection {
  id: string;
  title: string;
  icon: any;
  bgImage: string;
  items: MenuItem[];
}

export default function MenuPage() {
  const menuSections: MenuSection[] = [
    {
      id: "hot-coffee",
      title: "COFFEE (HOT)",
      icon: Coffee,
      bgImage: "/images/menu/COFFEE (HOT).png",
      items: [
        { name: "Espresso", price: "100" },
        { name: "Ristretto", price: "95" },
        { name: "Lungo", price: "120" },
        { name: "Doppio", price: "145" },
        { name: "Americano", price: "120 / 150", variants: "S/D" },
        { name: "Cappuccino", price: "150" },
        { name: "Spanish Latte", price: "170" },
        { name: "Café Latte", price: "160" },
        { name: "Flat White", price: "170" },
        { name: "Latte Macchiato", price: "165" },
        {
          name: "Flavoured Latte",
          price: "230",
          variants: "Caramel, Hazelnut, Honey, Vanilla",
        },
        { name: "Café Mocha", price: "220" },
        { name: "Caramel Mocha", price: "240" },
      ],
    },
    {
      id: "iced-coffee",
      title: "ICED COFFEE",
      icon: Snowflake,
      bgImage: "/images/menu/ICED COFFEE.png",
      items: [
        { name: "Iced Americano", price: "160" },
        { name: "Iced Cappuccino", price: "200" },
        { name: "Iced Latte", price: "220" },
        { name: "Iced Flavoured Latte", price: "250" },
        { name: "Iced Mocha", price: "260" },
        { name: "Iced Caramel Macchiato", price: "250" },
      ],
    },
    {
      id: "matcha",
      title: "MATCHA",
      icon: Leaf,
      bgImage: "/images/menu/MATCHA.png",
      items: [
        { name: "Matcha Latte", price: "240", variants: "Hot / Iced" },
        { name: "Strawberry / Blueberry Matcha Latte", price: "270" },
      ],
    },
    {
      id: "alternative-drinks",
      title: "ALTERNATIVE DRINKS",
      icon: CoffeeCup,
      bgImage: "/images/menu/ALTERNATIVE DRINKS.png",
      items: [
        { name: "Black Tea", price: "30" },
        { name: "Lemon Tea", price: "65" },
        { name: "Green Tea", price: "75" },
        { name: "Milk Tea", price: "50" },
        { name: "Masala Tea", price: "65" },
        { name: "Hot Chocolate", price: "160" },
        { name: "Soda Water", price: "80" },
        { name: "Hot Lemon with Honey", price: "150" },
        { name: "Hot Lemon with Honey & Ginger", price: "180" },
        { name: "Mineral Water", price: "30" },
      ],
    },
    {
      id: "drinks",
      title: "DRINKS",
      icon: Wine,
      bgImage: "/images/menu/DRINKS.png",
      items: [
        { name: "Peach / Lemon / Apple Iced Tea", price: "180" },
        { name: "Mint Lemonade", price: "200" },
        { name: "Virgin Mojito", price: "240" },
        { name: "Coke / Sprite", price: "90" },
      ],
    },
    {
      id: "smoothies-shakes",
      title: "SMOOTHIES & SHAKES",
      icon: IceCream,
      bgImage: "/images/menu/SMOOTHIES & SHAKES.png",
      items: [
        { name: "Strawberry Smoothie", price: "220" },
        { name: "Banana Smoothie", price: "200" },
        { name: "Blueberry Smoothie", price: "240" },
        { name: "Oreo Shake", price: "240" },
        { name: "KitKat Shake", price: "280" },
      ],
    },
    {
      id: "food",
      title: "FOOD",
      icon: Utensils,
      bgImage: "/images/menu/FOOD.png",
      items: [
        { name: "Cheese Sandwich", price: "180" },
        { name: "Chicken Sandwich", price: "220" },
        { name: "Classic Fries", price: "160" },
        { name: "Wai Wai Sadheko", price: "160" },
        { name: "Veg Momo", price: "130" },
        { name: "Chicken Momo", price: "180" },
        { name: "Chicken Jhol Momo", price: "220" },
        { name: "Korean Ramen", price: "320", variants: "Sausage & Egg" },
        { name: "Current Noodles", price: "220", variants: "Sausage & Egg" },
      ],
    },
    {
      id: "bakery",
      title: "BAKERY ITEMS",
      icon: Cake,
      bgImage: "/images/menu/BAKERY ITEMS.png",
      items: [
        { name: "Chocolate Doughnut", price: "80" },
        { name: "Chocolate Brownie", price: "180" },
        { name: "Chocolate Brownie with Ice Cream", price: "230" },
        { name: "Chicken Patties", price: "120" },
        { name: "Butter Croissant", price: "120" },
        { name: "Chocolate Croissant", price: "100" },
        { name: "Cinnamon Roll", price: "100" },
        { name: "Carrot / Banana Cake", price: "120" },
      ],
    },
    {
      id: "hookah",
      title: "HUKKA (MINT)",
      icon: Wind,
      bgImage: "/images/menu/hookah.png",
      items: [
        { name: "Normal Hukka", price: "300" },
        { name: "Cloud Hukka", price: "500" },
        { name: "Extra Coil", price: "50" },
        { name: "Cloud Coil", price: "100" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-paper-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu/COFFEE (HOT).png"
            alt="Menu hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-coffee-900/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-paper-50 mb-4">
            Our Menu
          </h1>
          <p className="text-lg sm:text-xl text-paper-200 max-w-2xl mx-auto">
            Discover our carefully crafted selection of beverages, food, and
            treats
          </p>
        </motion.div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={section.bgImage}
              alt={`${section.title} background`}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className={`absolute inset-0 ${
                sectionIndex % 2 === 0
                  ? "bg-paper-50/95 dark:bg-coffee-900/95"
                  : "bg-coffee-900/95 dark:bg-paper-50/95"
              }`}
            />
          </div>

          <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <section.icon
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${
                    sectionIndex % 2 === 0
                      ? "text-clay-600 dark:text-clay-400"
                      : "text-paper-50 dark:text-coffee-900"
                  }`}
                />
                <h2
                  className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold ${
                    sectionIndex % 2 === 0
                      ? "text-coffee-900 dark:text-paper-50"
                      : "text-paper-50 dark:text-coffee-900"
                  }`}
                >
                  {section.title}
                </h2>
              </div>
            </motion.div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.05, duration: 0.5 }}
                  className={`p-6 rounded-xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    sectionIndex % 2 === 0
                      ? "bg-white/80 dark:bg-coffee-900/80 border-clay-200 dark:border-clay-700 hover:border-clay-400 dark:hover:border-clay-500"
                      : "bg-coffee-900/80 dark:bg-white/80 border-clay-600 dark:border-clay-300 hover:border-clay-400 dark:hover:border-clay-500"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3
                        className={`text-lg sm:text-xl font-semibold mb-1 ${
                          sectionIndex % 2 === 0
                            ? "text-coffee-900 dark:text-paper-50"
                            : "text-paper-50 dark:text-coffee-900"
                        }`}
                      >
                        {item.name}
                      </h3>
                      {item.variants && (
                        <p
                          className={`text-sm ${
                            sectionIndex % 2 === 0
                              ? "text-coffee-700 dark:text-paper-200"
                              : "text-paper-200 dark:text-coffee-700"
                          }`}
                        >
                          {item.variants}
                        </p>
                      )}
                    </div>
                    <div
                      className={`text-xl sm:text-2xl font-bold whitespace-nowrap ${
                        sectionIndex % 2 === 0
                          ? "text-clay-600 dark:text-clay-400"
                          : "text-clay-300 dark:text-clay-600"
                      }`}
                    >
                      ₹{item.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
