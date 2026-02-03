"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function FaviconSwitcher() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";

    // Update favicon
    const favicon16 = document.querySelector(
      'link[rel="icon"][sizes="16x16"]',
    ) as HTMLLinkElement;
    const favicon32 = document.querySelector(
      'link[rel="icon"][sizes="32x32"]',
    ) as HTMLLinkElement;
    const appleTouchIcon = document.querySelector(
      'link[rel="apple-touch-icon"]',
    ) as HTMLLinkElement;

    if (favicon16) {
      favicon16.href = isDark
        ? "/favicon-16x16-dark.png"
        : "/favicon-16x16.png";
    }

    if (favicon32) {
      favicon32.href = isDark
        ? "/favicon-32x32-dark.png"
        : "/favicon-32x32.png";
    }

    if (appleTouchIcon) {
      appleTouchIcon.href = isDark
        ? "/apple-touch-icon-dark.png"
        : "/apple-touch-icon.png";
    }

    // Update theme color meta tag
    const themeColorMeta = document.querySelector(
      'meta[name="theme-color"]',
    ) as HTMLMetaElement;
    if (themeColorMeta) {
      themeColorMeta.content = isDark ? "#1a1410" : "#FAF8F5";
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = isDark ? "#1a1410" : "#FAF8F5";
      document.head.appendChild(meta);
    }
  }, [theme, systemTheme]);

  return null;
}
