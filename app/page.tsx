import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";

// Lazy load sections below the fold
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: true,
});
const Menu = dynamic(() => import("@/components/sections/Menu"), { ssr: true });
const Specials = dynamic(() => import("@/components/sections/Specials"), {
  ssr: true,
});
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), {
  ssr: true,
});
const Gallery = dynamic(() => import("@/components/sections/Gallery"), {
  ssr: true,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true },
);
const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
  ssr: true,
});
const OpeningHours = dynamic(
  () => import("@/components/sections/OpeningHours"),
  { ssr: true },
);
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <About />
      <Menu />
      <Specials />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <OpeningHours />
      <Contact />
    </main>
  );
}
