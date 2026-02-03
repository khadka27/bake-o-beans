"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

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
  ];

  return (
    <motion.nav
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-6xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {/* Island Shape Navbar */}
      <div
        className={`rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 dark:bg-coffee-900/95 backdrop-blur-xl shadow-lg border border-border/50"
            : "bg-white/10 backdrop-blur-md border border-white/20"
        }`}
      >
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-10 sm:h-12 w-32 sm:w-40"
            >
              <Image
                src="/images/logo.png"
                alt="Bake O Beans"
                fill
                className="object-contain transition-all duration-300 brightness-0 invert"
                priority
              />
            </motion.div>
          </Link>

          {/* Navigation Links */}
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
                      ? "text-foreground hover:text-clay-600 dark:hover:text-clay-400"
                      : "text-paper-50 hover:text-paper-200"
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
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              isScrolled
                ? "text-foreground hover:bg-clay-50 dark:hover:bg-clay-900/20"
                : "text-paper-50 hover:bg-white/10"
            }`}
            whileTap={{ scale: 0.95 }}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 rounded-full transition-all duration-200 ${
                        isScrolled
                          ? "text-foreground hover:bg-clay-50 dark:hover:bg-clay-900/30 hover:text-clay-600 dark:hover:text-clay-400"
                          : "text-paper-50 hover:bg-white/10 hover:text-paper-200"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
