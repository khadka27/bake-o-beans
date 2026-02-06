import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Bake O Beans Café",
  description:
    "Learn about how Bake O Beans Café uses cookies and how you can manage your preferences.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-paper-50 dark:bg-coffee-950">
      {/* Header */}
      <div className="bg-coffee-900 text-paper-50 py-16 sm:py-20 md:py-24">
        <div className="content-max px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-clay-400 hover:text-clay-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans">
            Cookie Policy
          </h1>
          <p className="text-paper-300 mt-4">Last updated: February 4, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="content-max px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto prose prose-coffee dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently, provide a better user
              experience, and provide information to the owners of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              How We Use Cookies
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mb-4">
              Bake O Beans Café uses cookies to:
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Keep you signed in to your account</li>
              <li>Understand how you use our website</li>
              <li>Improve our website and services</li>
              <li>Show you relevant content and advertisements</li>
              <li>Analyze website traffic and performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              Types of Cookies We Use
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-coffee-900 dark:text-paper-100 mb-3">
                1. Essential Cookies
              </h3>
              <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
                These cookies are necessary for the website to function
                properly. They enable basic functions like page navigation,
                access to secure areas, and remembering items in your shopping
                cart.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-coffee-900 dark:text-paper-100 mb-3">
                2. Performance Cookies
              </h3>
              <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
                These cookies collect information about how visitors use our
                website, such as which pages are visited most often. This helps
                us improve the way our website works.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-coffee-900 dark:text-paper-100 mb-3">
                3. Functionality Cookies
              </h3>
              <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
                These cookies allow our website to remember choices you make
                (such as your username, language, or region) and provide
                enhanced, personalized features.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-coffee-900 dark:text-paper-100 mb-3">
                4. Targeting/Advertising Cookies
              </h3>
              <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
                These cookies are used to deliver advertisements that are
                relevant to you. They also limit the number of times you see an
                advertisement and help measure the effectiveness of advertising
                campaigns.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We may also use third-party cookies from trusted partners, such as
              Google Analytics, to help us understand how you use our website
              and improve our services. These cookies are subject to the
              respective privacy policies of these external services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              Managing Cookies
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>
                <strong>Browser Settings:</strong> Most browsers allow you to
                refuse or accept cookies. You can usually find these settings in
                the "Options" or "Preferences" menu of your browser.
              </li>
              <li>
                <strong>Opt-Out Tools:</strong> You can opt out of targeted
                advertising cookies through industry opt-out pages.
              </li>
              <li>
                <strong>Delete Cookies:</strong> You can delete all cookies that
                are already on your device through your browser settings.
              </li>
            </ul>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mt-4">
              Please note that if you choose to block or delete cookies, some
              features of our website may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              Browser-Specific Instructions
            </h2>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security →
                Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Options → Privacy & Security → Cookies
                and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and
                website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions →
                Cookies and site data
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              Changes to This Cookie Policy
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. Please check this page regularly for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              Contact Us
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              If you have any questions about our use of cookies, please contact
              us at:
            </p>
            <p className="text-coffee-800 dark:text-paper-300 mt-2">
              Email: hello@bakeobeans.com
              <br />
              Phone: +977 61-XXXXXX
              <br />
              Address: Lakeside, Pokhara, Nepal
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
