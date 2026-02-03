
import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import About from '@/components/sections/About';
import Menu from '@/components/sections/Menu';
import Specials from '@/components/sections/Specials';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';
import OpeningHours from '@/components/sections/OpeningHours';
import Contact from '@/components/sections/Contact';

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
