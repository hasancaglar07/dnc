import CustomCursor from '@/components/layout/CustomCursor';
import Navigation from '@/components/layout/Navigation';
import CinematicHero from '@/components/sections/CinematicHero';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <CinematicHero />
      <ScrollToTop />
    </>
  );
}
