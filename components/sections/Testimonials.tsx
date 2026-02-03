"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
      text: "The vibe, the coffee, the bakery — everything is on point. Perfect hangout spot.",
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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        // Continue from current scroll position
        scrollContainer.scrollLeft += 0.5; // Scroll speed

        // Reset scroll position for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reviews.webp"
          alt="Coffee beans background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-paper-50/90 dark:bg-coffee-900/90" />
      </div>

      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-clay-600 dark:text-clay-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-3"
          >
            Testimonials
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who love our coffee and
            pastries
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: (index % testimonials.length) * 0.05,
              duration: 0.5,
            }}
            className="flex-shrink-0 w-80 sm:w-96"
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-clay-300/50 dark:border-clay-600/50 hover:border-clay-400 dark:hover:border-clay-500 bg-white dark:bg-coffee-900 group">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar className="w-16 h-16 border-2 border-clay-400 dark:border-clay-500 shadow-lg group-hover:border-clay-500 dark:group-hover:border-clay-400 transition-colors">
                      <AvatarFallback className="bg-clay-200 dark:bg-clay-800 text-clay-800 dark:text-clay-200 font-semibold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-bold text-lg sm:text-xl mb-2 text-gray-900 dark:text-white drop-shadow-sm">
                      {testimonial.name}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex-grow">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-clay-200 dark:text-clay-800 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base relative z-10 italic">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Hover hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center text-sm text-muted-foreground mt-8"
      ></motion.p>
    </section>
  );
}
