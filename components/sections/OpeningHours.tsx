"use client";

import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function OpeningHours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Nepal timezone (Asia/Kathmandu)
      const now = new Date();

      // Format time string for display
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kathmandu",
      });

      // Get hours and minutes in Nepal timezone for status check
      const nepalTimeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kathmandu",
      });

      // Parse hours and minutes
      const [hours, minutes] = nepalTimeString.split(":").map(Number);
      const currentMinutes = hours * 60 + minutes;

      // Check if open (7:00 AM - 7:00 PM = 7:00 - 19:00)
      const openTime = 7 * 60; // 7:00 AM = 420 minutes
      const closeTime = 19 * 60; // 7:00 PM = 1140 minutes
      const isCurrentlyOpen =
        currentMinutes >= openTime && currentMinutes < closeTime;

      setCurrentTime(timeString);
      setIsOpen(isCurrentlyOpen);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="location"
      className="relative py-14 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        <Image
          src="/images/h1-bacground-img-1.jpg.webp"
          alt="Opening hours background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-paper-50/50 dark:bg-coffee-900/60"
          suppressHydrationWarning
        />
      </div>

      <div
        className="relative z-10 content-max px-5 sm:px-6 lg:px-8"
        suppressHydrationWarning
      >
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold text-coffee-900 dark:text-paper-100 px-4">
            Welcome to Bake O Beans
          </h2>
        </motion.div>

        {/* Opening Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="bg-white/95 dark:bg-coffee-900/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl sm:shadow-2xl"
            suppressHydrationWarning
          >
            <div
              className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12"
              suppressHydrationWarning
            >
              {/* Left Side - Opening Hours */}
              <div
                className="flex flex-col justify-center"
                suppressHydrationWarning
              >
                <div
                  className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                  suppressHydrationWarning
                >
                  <div
                    className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-clay-600 rounded-xl flex items-center justify-center"
                    suppressHydrationWarning
                  >
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-coffee-900 dark:text-paper-100">
                    Opening Hours
                  </h3>
                </div>

                <div
                  className="space-y-3 sm:space-y-4"
                  suppressHydrationWarning
                >
                  <div suppressHydrationWarning>
                    <p className="text-base sm:text-lg md:text-xl font-sans font-semibold text-coffee-900 dark:text-paper-100 mb-1 sm:mb-2">
                      Monday – Sunday
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-clay-600">
                      7:00 AM – 7:00 PM
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-coffee-700 dark:text-paper-300 italic">
                    Open all days of the week
                  </p>
                </div>
              </div>

              {/* Right Side - Current Time & Status */}
              <div
                className="flex flex-col justify-center items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l border-coffee-200 dark:border-paper-700/30 pt-6 sm:pt-8 md:pt-0 md:pl-8 lg:pl-12"
                suppressHydrationWarning
              >
                <div
                  className="space-y-3 sm:space-y-4"
                  suppressHydrationWarning
                >
                  <p className="text-xs sm:text-sm md:text-base text-coffee-700 dark:text-paper-300 font-medium">
                    Current Nepal Time
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-coffee-900 dark:text-paper-100">
                    {currentTime || "Loading..."}
                  </p>

                  {/* Status Badge */}
                  <div
                    className="flex justify-center md:justify-end pt-2 sm:pt-4"
                    suppressHydrationWarning
                  >
                    <motion.span
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-md ${
                        isOpen
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mr-2 ${
                          isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                        }`}
                      />
                      {isOpen ? "Open Now" : "Closed"}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
