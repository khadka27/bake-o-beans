"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "COFFEE",
      links: [
        { name: "Hot Coffee", href: "#menu" },
        { name: "Cold Coffee", href: "#menu" },
        { name: "Espresso", href: "#menu" },
        { name: "Latte", href: "#menu" },
      ],
    },
    {
      title: "PRIVACY",
      links: [
        { name: "Terms of use", href: "/terms" },
        { name: "Privacy policy", href: "/privacy" },
        { name: "Cookies", href: "/cookies" },
      ],
    },
    {
      title: "SERVICES",
      links: [
        { name: "Shop", href: "#menu" },
        { name: "Order ahead", href: "#contact" },
        { name: "Menu", href: "#menu" },
      ],
    },
    {
      title: "ABOUT US",
      links: [
        { name: "Find a location", href: "#contact" },
        { name: "About us", href: "#about" },
        { name: "Our story", href: "#about" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: () => (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: () => (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: () => (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: () => (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-coffee-900 text-paper-50 relative overflow-hidden safe-area-inset">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" suppressHydrationWarning>
        <Image
          src="/images/coffee-beans-background-design_1160504-18065.webp"
          alt="Specials background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* <div className="absolute inset-0 bg-paper-50/50" /> */}
      </div>
      <div
        className="content-max px-5 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 relative z-10"
        suppressHydrationWarning
      >
        {/* Main Footer Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10"
          suppressHydrationWarning
        >
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm sm:text-base font-bold uppercase mb-4 sm:mb-5 md:mb-6 text-clay-400 tracking-wider font-sans">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-paper-200 hover:text-clay-400 active:text-clay-300 transition-colors text-sm sm:text-base block py-1 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Media Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="col-span-2 sm:col-span-3 lg:col-span-1"
          >
            <h3 className="text-sm sm:text-base font-bold uppercase mb-4 sm:mb-5 md:mb-6 text-clay-400 tracking-wider font-sans">
              FOLLOW US
            </h3>
            {/* Social Icons - Grid on mobile */}
            <div className="flex gap-3 sm:gap-4" suppressHydrationWarning>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/5 hover:bg-white/10 active:bg-white/15 rounded-xl flex items-center justify-center text-paper-200 hover:text-clay-400 transition-all duration-300"
                  aria-label={link.name}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-paper-700/30 pt-6 sm:pt-8"
        >
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left"
            suppressHydrationWarning
          >
            {/* Logo */}
            <div
              className="relative h-24 sm:h-24 w-32 sm:w-40"
              suppressHydrationWarning
            >
              <Image
                src="/images/logo.png"
                alt="Bake O Beans"
                fill
                className="object-contain brightness-0 invert"
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 200px"
                priority
              />
            </div>

            {/* Copyright */}
            <p className="text-paper-300 text-xs sm:text-sm md:text-base order-3 sm:order-2">
              &copy; {currentYear} Bake O Beans. All rights reserved.
            </p>

            {/* Made with love */}
            <motion.div
              className="flex items-center gap-2 text-paper-300 text-xs sm:text-sm md:text-base order-2 sm:order-3"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-clay-400 fill-clay-400" />
              <span>and</span>
              <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-clay-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
