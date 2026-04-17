import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import Ticker from '@/components/sections/Ticker';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <Ticker />
      <Services />
      <Projects />
      <Stats />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
