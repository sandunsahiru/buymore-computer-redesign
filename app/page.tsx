import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustBadges />
        <Services />
        <Products />
        <Partners />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
