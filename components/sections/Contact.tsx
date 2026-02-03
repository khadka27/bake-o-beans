"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lakeside, Pokhara 33700, Nepal",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+977 61-XXXXXX",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@bakeobeans.com",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "Mon-Fri: 7AM-9PM, Sat: 8AM-10PM, Sun: 8AM-8PM",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-background relative paper-texture"
      ref={ref}
    >
      <div className="content-max px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-clay-600 dark:text-clay-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-3"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mt-3 mb-4 text-foreground">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a question or want to place a special order? We'd love to hear
            from you!
          </p>
        </motion.div>

        <div className="content-max mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Contact Info Cards */}
          <div className="space-y-5 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Card className="border border-border hover:border-clay-300 dark:hover:border-clay-600 transition-all duration-300 hover:shadow-md bg-card">
                  <CardContent className="p-5 sm:p-6 flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-clay-600 rounded-xl flex items-center justify-center"
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base break-words">
                        {info.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-border shadow-md h-[400px] lg:h-full min-h-[500px] relative"
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
