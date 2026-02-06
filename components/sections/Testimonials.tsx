"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Suman Shrestha",
      text: "Bake O Beans is my go-to place now. Coffee ekdum fresh cha and bakery items are super soft. Cozy vibes, loved it!",
      rating: 5,
    },
    {
      id: 2,
      name: "Anusha Koirala",
      text: "Amazing coffee and even better ambience. Perfect place to relax or work. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ramesh Adhikari",
      text: "Coffee pani ramro, bakery pani fresh. Staff friendly cha. Worth every visit.",
      rating: 5,
    },
    {
      id: 4,
      name: "Pooja Thapa",
      text: "Loved the creativity of this café. Pastries were delicious and coffee was perfectly brewed.",
      rating: 5,
    },
    {
      id: 5,
      name: "Bikash Gurung",
      text: "Finally found a café with both great coffee and bakery items. Bake O Beans never disappoints.",
      rating: 5,
    },
    {
      id: 6,
      name: "Nisha Pokhrel",
      text: "So peaceful and warm place. Coffee ko aroma and fresh bakes make my day better.",
      rating: 5,
    },
    {
      id: 7,
      name: "Amit Rai",
      text: "One of the best cafés in town. Clean, creative, and super tasty food. Will visit again for sure.",
      rating: 5,
    },
    {
      id: 8,
      name: "Shruti Basnet",
      text: "The vibe, the coffee, the bakery - everything is on point. Perfect hangout spot.",
      rating: 5,
    },
    {
      id: 9,
      name: "Kiran Poudel",
      text: "Fresh beans, fresh bakes, and friendly service. Bake O Beans feels like a second home.",
      rating: 5,
    },
    {
      id: 10,
      name: "Manisha Lama",
      text: "Loved the concept and quality. Coffee strong but smooth, bakery items ekdum yum!",
      rating: 5,
    },
    {
      id: 11,
      name: "Parsh Parajuli",
      text: "Bake O Beans is a hidden gem. Quality coffee, tasty bakes, and calm ambience. Highly recommended.",
      rating: 5,
    },
    {
      id: 12,
      name: "Pratiksha Srish",
      text: "Such a cute and cozy café. Coffee pani ramro cha and bakery items are delicious.",
      rating: 5,
    },
    {
      id: 13,
      name: "Subas Poudel",
      text: "Fresh beans, great taste, and friendly service. Yo café ma aauna man lagcha again and again.",
      rating: 5,
    },
    {
      id: 14,
      name: "Sevika Acharya",
      text: "Loved the cleanliness and creativity here. Coffee and bakery both are top-notch.",
      rating: 5,
    },
    {
      id: 15,
      name: "Girishma Khawas",
      text: "Warm atmosphere and really good coffee. Perfect place for a peaceful break.",
      rating: 5,
    },
    {
      id: 16,
      name: "Abishek Khadka",
      text: "Hookah ekdum smooth cha and flavors are fresh. Perfect spot to chill with friends.",
      rating: 5,
    },
    {
      id: 17,
      name: "Rahul Gupta",
      text: "Great coffee and fresh bakery items every time. The place has such a positive vibe. Loved Bake O Beans!",
      rating: 5,
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-[0]">
        <Image
          src="/images/h1-bacground-img-1.jpg.webp"
          alt="Testimonials background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-paper-50/90 dark:bg-coffee-900/90" />
      </div>

      <div className="relative z-10 content-max px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
        <div className="text-center">
          <span className="inline-block text-clay-600 dark:text-clay-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-3 sm:mb-4 text-coffee-900 dark:text-paper-100">
            What Our Customers Say
          </h2>
          <p className="text-coffee-700 dark:text-paper-300 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Join hundreds of satisfied customers who love our coffee and
            pastries
          </p>
        </div>
      </div>

      {/* Auto-scrolling testimonials wrapper */}
      <div
        className="flex overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex w-max gap-4 sm:gap-6 items-stretch animate-infinite-scroll py-8"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[380px] flex"
            >
              <div className="w-full bg-white dark:bg-coffee-900/60 backdrop-blur-md rounded-2xl border-2 border-clay-300/30 dark:border-clay-700 p-6 sm:p-8 flex flex-col hover:border-clay-400 dark:hover:border-clay-500 transition-all duration-300 group shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-clay-100 dark:bg-clay-800 border-2 border-clay-400 flex items-center justify-center text-clay-700 dark:text-clay-200 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-base sm:text-lg text-coffee-900 dark:text-paper-100 truncate mb-1">
                      {testimonial.name}
                    </p>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <p className="text-coffee-700 dark:text-paper-300 leading-relaxed text-sm sm:text-base italic group-hover:text-coffee-900 dark:group-hover:text-paper-100 transition-colors">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center text-xs text-muted-foreground mt-4 px-4"
      >
        Scroll paused on hover
      </motion.p>
    </section>
  );
}
