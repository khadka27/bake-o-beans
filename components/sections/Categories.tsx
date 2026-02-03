'use client';

import { motion, useInView } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const categories = [
    {
      id: 'types-coffee',
      label: 'TYPES OF COFFEE',
      description: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo',
      image: '/images/h2-custom-icon-5.png',
    },
    {
      id: 'bean-varieties',
      label: 'BEAN VARIETIES',
      description: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo',
      image: '/images/h2-custom-icon-6.png',
    },
    {
      id: 'coffee-pastry',
      label: 'COFFEE & PASTRY',
      description: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo',
      image: '/images/h2-custom-icon-7.png',
    },
    {
      id: 'coffee-to-go',
      label: 'COFFEE TO GO',
      description: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo',
      image: '/images/h2-custom-icon-8.png',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative" ref={ref}>
      <div className="content-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-coffee-900">
            OUR DELICIOUS OFFER
          </h2>
          
          {/* Separator with Coffee Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 py-2 mb-4"
          >
            <div className="w-12 sm:w-16 h-px bg-clay-500" />
            <div className="flex items-center justify-center">
              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-clay-500" />
            </div>
            <div className="w-12 sm:w-16 h-px bg-clay-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-coffee-700/80 max-w-2xl mx-auto leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mb-6 relative w-20 h-20 sm:w-24 sm:h-24"
              >
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </motion.div>
              
              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-sans font-bold uppercase mb-3 sm:mb-4 text-coffee-900 tracking-wide">
                {category.label}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-coffee-700/70 leading-relaxed max-w-xs">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
