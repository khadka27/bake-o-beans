'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Specials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const specials = [
    {
      id: 1,
      name: 'Himalayan Blend Latte',
      image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Almond Croissant',
      image: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Matcha Latte',
      image: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Tiramisu',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'Cappuccino',
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      name: 'Chocolate Cake',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

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
          priority
        />
        <div className="absolute inset-0 bg-paper-50/50" />
      </div>

      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-coffee-900 mb-4">
            OUR SPECIALS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-coffee-700/80 max-w-2xl mx-auto leading-relaxed">
            Discover our featured dishes and seasonal favorites
          </p>
        </motion.div>

        {/* Circular Dishes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
          {specials.map((special, index) => (
            <motion.div
              key={special.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring', stiffness: 200 }}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Circular Image Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
                  animate={hoveredIndex === index ? { scale: 1.2, opacity: 0.3 } : { scale: 1, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full border-4 border-clay-500"
                />
              </motion.div>

              {/* Name with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <motion.h3
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-base md:text-lg font-sans font-bold text-coffee-900 uppercase tracking-wide"
                >
                  {special.name}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
