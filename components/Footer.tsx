"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Coffee,
} from "lucide-react";
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
        { name: "Terms of use", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "Cookies", href: "#" },
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
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  return (
    <footer className="bg-coffee-900 text-paper-50 relative overflow-hidden safe-area-inset">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
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
      <div className="content-max px-5 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 relative z-10">


        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4 md:mb-6 text-clay-400">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-paper-200 hover:text-clay-400 active:text-clay-300 transition-colors text-xs sm:text-sm block py-0.5"
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
            <h3 className="text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4 md:mb-6 text-clay-400">
              FOLLOW US
            </h3>
            {/* Social Icons - Grid on mobile */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white/5 hover:bg-white/10 active:bg-white/15 rounded-xl flex items-center justify-center text-paper-200 hover:text-clay-400 transition-all duration-300"
                  aria-label={link.name}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
            {/* Logo */}
            <div className="relative h-10 sm:h-12 w-32 sm:w-40">
              <Image
                src="/images/logo.png"
                alt="Bake O Beans"
                fill
                className="object-contain brightness-0 invert"
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
