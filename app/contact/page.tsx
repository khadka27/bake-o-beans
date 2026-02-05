import { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import OpeningHours from "@/components/sections/OpeningHours";

export const metadata: Metadata = {
  title: "Contact Us | Bake O Beans Café - Simalchaur, Pokhara-8",
  description:
    "Get in touch with Bake O Beans Café in Simalchaur, Pokhara. Find our location, call us for orders, or check our opening hours. We're the best coffee shop near you in Pokhara.",
  keywords:
    "contact Bake O Beans, café location Pokhara, coffee shop phone number Pokhara, Simalchaur café address, café opening hours Pokhara",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Contact />
      <OpeningHours />
    </main>
  );
}
