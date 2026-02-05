"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee, MapPin, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/#about", label: "ABOUT" },
    { href: "/#gallery", label: "GALLERY" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[90%] max-w-6xl safe-area-inset"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        suppressHydrationWarning
      >
        {/* Island Shape Navbar */}
        <div
          className={`rounded-2xl sm:rounded-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 transition-all duration-500 ${
            isScrolled
              ? "bg-background/95 dark:bg-coffee-900/95 backdrop-blur-xl shadow-lg border border-border/50"
              : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}
          suppressHydrationWarning
        >
          <div className="flex items-center justify-between h-11 sm:h-12 md:h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center group touch-target">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative h-9 sm:h-10 md:h-12 w-28 sm:w-32 md:w-40"
              >
                <Image
                  src="/images/logo.png"
                  alt="Bake O Beans Café"
                  fill
                  className={`object-contain transition-all duration-300 ${isScrolled ? "dark:brightness-0 dark:invert" : "brightness-0 invert"}`}
                  priority
                />
              </motion.div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group px-4 py-2 rounded-full transition-all duration-300"
                >
                  <span
                    className={`relative text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                      isScrolled
                        ? "text-paper-50 dark:text-paper-50 hover:text-clay-400 dark:hover:text-clay-400"
                        : "text-paper-50 hover:text-clay-400"
                    }`}
                  >
                    {link.label}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-clay-500 group-hover:w-3/4 transition-all duration-300 rounded-full"
                    whileHover={{ width: "75%" }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isScrolled ? "bg-clay-600/10" : "bg-white/10"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-300 ${
                isScrolled
                  ? "text-coffee-900 dark:text-paper-100 hover:bg-clay-50 dark:hover:bg-clay-900/20 active:bg-clay-100"
                  : "text-paper-50 hover:bg-white/10 active:bg-white/20"
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-coffee-900/95 backdrop-blur-lg z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="fixed inset-x-0 top-20 bottom-0 z-40 lg:hidden overflow-y-auto safe-area-inset"
            >
              <div className="flex flex-col h-full px-6 py-8">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          className="flex items-center py-4 px-5 text-xl font-medium text-paper-50 hover:text-clay-400 hover:bg-white/5 rounded-2xl transition-all duration-300 active:scale-[0.98]"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-clay-500 mr-4 text-sm font-normal">
                            0{index + 1}
                          </span>
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Bottom Section with Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-auto pt-8 border-t border-white/10"
                >
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <MapPin className="w-5 h-5 text-clay-400" />
                      <div>
                        <p className="text-xs text-paper-400">Visit Us</p>
                        <p className="text-sm text-paper-100">
                          Simalchaur, Pokhara
                        </p>
                      </div>
                    </Link>
                    <a
                      href="tel:+97761XXXXXX"
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-clay-400" />
                      <div>
                        <p className="text-xs text-paper-400">Call Us</p>
                        <p className="text-sm text-paper-100">+977 61-XXXXXX</p>
                      </div>
                    </a>
                  </div>

                  {/* Decorative Element */}
                  <div className="flex items-center justify-center gap-3 text-paper-400">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-clay-500/50" />
                    <Coffee className="w-5 h-5 text-clay-500" />
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-clay-500/50" />
                  </div>

                  <p className="text-center text-paper-500 text-sm mt-4">
                    Coffee • Bakery • Good Vibes
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
