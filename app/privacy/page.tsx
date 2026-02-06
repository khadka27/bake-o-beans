import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bake O Beans Café",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your information at Bake O Beans Café.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-paper-300 mt-4">Last updated: February 4, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="content-max px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto prose prose-coffee dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mb-4">
              We collect information to provide better services to our
              customers. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number when you place an order or subscribe to our
                newsletter
              </li>
              <li>
                <strong>Order Information:</strong> Details about your orders,
                preferences, and purchase history
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, device information, and cookies
              </li>
              <li>
                <strong>Location Information:</strong> Approximate location for
                delivery services
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our services</li>
              <li>
                Send promotional emails and newsletters (with your consent)
              </li>
              <li>Improve our website, products, and services</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2 mt-4">
              <li>
                Service providers who assist us in operating our website and
                business
              </li>
              <li>Payment processors for secure transaction processing</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyze site traffic, and personalize
              content. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              5. Data Security
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              6. Your Rights
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              Our services are not directed to children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              with an updated "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              9. Contact Us
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at:
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
