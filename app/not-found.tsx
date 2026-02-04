"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: any = null;

    const loadLottie = async () => {
      try {
        const lottie = (await import("lottie-web")).default;
        const animationData = await fetch("/Coffee Time.json").then((res) =>
          res.json(),
        );

        if (containerRef.current) {
          animationInstance = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
          });
        }
      } catch (error) {
        console.error("Failed to load animation:", error);
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  return (
    <main className="h-screen bg-gradient-to-b from-paper-50 to-paper-100 dark:from-coffee-950 dark:to-coffee-900 flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="max-w-2xl w-full text-center flex flex-col justify-center h-full">
        {/* Lottie Animation */}
        <div
          ref={containerRef}
          className="w-full max-w-sm mx-auto mb-4"
          style={{ height: "280px" }}
        />

        {/* Error Message */}
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-coffee-900 dark:text-paper-50 mb-3">
              404
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-coffee-800 dark:text-paper-100 mb-3">
              Oops! Coffee Break
            </h2>
            <p className="text-sm sm:text-base text-coffee-700 dark:text-paper-300 max-w-md mx-auto leading-relaxed">
              Looks like this page took a coffee break and didn't come back.
              Let's get you back to something tasty!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button
              asChild
              size="default"
              className="bg-clay-600 hover:bg-clay-700 text-white font-semibold px-6"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="default"
              className="border-clay-600 text-clay-600 hover:bg-clay-50 dark:border-clay-400 dark:text-clay-400 dark:hover:bg-clay-900/20 font-semibold px-6"
            >
              <Link href="/menu" className="flex items-center gap-2">
                View Menu
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="pt-4 mt-4">
            <p className="text-xs sm:text-sm text-coffee-600 dark:text-paper-400">
              Need help? Contact us at{" "}
              <a
                href="mailto:hello@bakeobeans.com"
                className="text-clay-600 hover:text-clay-700 dark:text-clay-400 dark:hover:text-clay-300 underline"
              >
                hello@bakeobeans.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
