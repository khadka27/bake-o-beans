import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-paper-300 mt-4">Last updated: February 4, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="content-max px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto prose prose-coffee dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              By accessing and using Bake O Beans website and services, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these terms, please do not use
              our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              2. Use of Services
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in a
              way that does not infringe the rights of, restrict, or inhibit
              anyone else's use and enjoyment of the website.
            </p>
            <ul className="list-disc pl-6 text-coffee-800 dark:text-paper-300 space-y-2">
              <li>You must be at least 13 years old to use our services</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account
              </li>
              <li>
                You agree not to misuse our services or help anyone else do so
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              3. Orders and Payments
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              All orders placed through our website are subject to acceptance
              and availability. We reserve the right to refuse any order. Prices
              are subject to change without notice. Payment must be made at the
              time of order or pickup.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Bake O Beans and is
              protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              Bake O Beans shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Your
              continued use of our services following any changes constitutes
              acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-coffee-900 dark:text-paper-100 mb-4">
              7. Contact Information
            </h2>
            <p className="text-coffee-800 dark:text-paper-300 leading-relaxed">
              If you have any questions about these Terms of Use, please contact
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
