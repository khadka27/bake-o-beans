"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import Image from "next/image";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lakeside, Pokhara 33700, Nepal",
      href: "https://maps.google.com/?q=Lakeside,Pokhara,Nepal",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+977 61-XXXXXX",
      href: "tel:+97761XXXXXX",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@bakeobeans.com",
      href: "mailto:hello@bakeobeans.com",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "Mon-Fri: 7AM-9PM, Sat: 8AM-10PM, Sun: 8AM-8PM",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 md:py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        <Image
          src="/images/h1-bacground-img-1.jpg.webp"
          alt="Contact background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* <div className="absolute inset-0 bg-paper-50/95 dark:bg[#F6EFE8]" /> */}
      </div>

      <div
        className="content-max px-5 sm:px-6 lg:px-8 relative z-10"
        suppressHydrationWarning
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-clay-600 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 sm:mt-3 mb-3 sm:mb-4 text-coffee-900 drop-shadow-sm">
            Contact Us
          </h2>
          <p className="text-coffee-800 font-semibold text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Have a question or want to place a special order? We'd love to hear
            from you!
          </p>
        </motion.div>

        <div
          className="content-max mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8"
          suppressHydrationWarning
        >
          {/* Left Column - Contact Info Cards */}
          <div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5"
            suppressHydrationWarning
          >
            {contactInfo.map((info, index) => {
              const CardWrapper = info.href ? "a" : "div";
              const cardProps = info.href
                ? {
                    href: info.href,
                    target: info.href.startsWith("http") ? "_blank" : undefined,
                    rel: info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Card
                    className={`border border-coffee-900/30 hover:border-clay-600 transition-all duration-300 hover:shadow-lg active:shadow-md bg-white/80 backdrop-blur-md shadow-md h-full ${info.href ? "cursor-pointer" : ""}`}
                  >
                    <CardWrapper {...cardProps} className="block">
                      <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                        <motion.div
                          whileTap={{ scale: 0.95 }}
                          className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-clay-600 rounded-xl flex items-center justify-center"
                        >
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div
                          className="flex-1 min-w-0"
                          suppressHydrationWarning
                        >
                          <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1 text-coffee-900">
                            {info.title}
                          </h3>
                          <p className="text-coffee-800 font-semibold text-xs sm:text-sm lg:text-base break-words leading-relaxed">
                            {info.details}
                          </p>
                        </div>
                      </CardContent>
                    </CardWrapper>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-border shadow-md h-[280px] sm:h-[350px] lg:h-full lg:min-h-[420px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d83.9855!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951e8f5d4b1b%3A0x1234567890abcdef!2sLakeside%2C%20Pokhara%2033700%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
