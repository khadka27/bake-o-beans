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
    {
      title: "INFORMATION",
      links: [
        { name: "Plans & pricing", href: "#" },
        { name: "Sell your products", href: "#" },
        { name: "Jobs", href: "#" },
      ],
    },
    {
      title: "SOCIAL MEDIA",
      links: [
        { name: "Instagram", href: "#", icon: Instagram },
        { name: "Facebook", href: "#", icon: Facebook },
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "LinkedIn", href: "#", icon: Linkedin },
      ],
    },
  ];

  return (
    <footer className="bg-coffee-900 text-paper-50 relative overflow-hidden">
      <div className="content-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-10">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm sm:text-base font-semibold uppercase mb-4 sm:mb-6 text-clay-400">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {"icon" in link ? (
                      <a
                        href={link.href}
                        className="text-paper-200 hover:text-clay-400 transition-colors inline-flex items-center gap-2 text-xs sm:text-sm"
                        aria-label={link.name}
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-paper-200 hover:text-clay-400 transition-colors text-xs sm:text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-paper-700/30 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="relative h-12 w-40">
              <Image
                src="/images/logo.png"
                alt="Bake O Beans"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-paper-300 text-sm sm:text-base">
              &copy; {currentYear} Bake O Beans. All rights reserved.
            </p>
            <motion.p
              className="text-paper-300 flex items-center gap-2 text-sm sm:text-base"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Crafted with{" "}
              <Heart className="w-4 h-4 text-clay-400 fill-clay-400" /> and
              caffeine
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
