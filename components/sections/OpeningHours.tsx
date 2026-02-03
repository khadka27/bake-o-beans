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
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/roasted-coffee-beans.webp"
          alt="Coffee beans background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-paper-50/50" />
      </div>

      <div className="relative z-10 content-max px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-coffee-900">
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
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Side - Opening Hours */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-clay-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-coffee-900">
                    Opening Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-lg sm:text-xl font-sans font-semibold text-coffee-900 mb-2">
                      Monday – Sunday
                    </p>
                    <p className="text-2xl sm:text-3xl font-sans font-bold text-clay-600">
                      7:00 AM – 7:00 PM
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-coffee-700 italic">
                    Open all days of the week
                  </p>
                </div>
              </div>

              {/* Right Side - Current Time & Status */}
              <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right border-t md:border-t-0 md:border-l border-coffee-200 pt-8 md:pt-0 md:pl-12">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-coffee-700 font-medium">
                    Current Nepal Time
                  </p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-coffee-900">
                    {currentTime || "Loading..."}
                  </p>

                  {/* Status Badge */}
                  <div className="flex justify-center md:justify-end pt-4">
                    <span
                      className={`inline-flex items-center px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md ${
                        isOpen
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full mr-2 ${
                          isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
                        }`}
                      />
                      {isOpen ? "Open Now" : "Closed"}
                    </span>
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
