import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

export const metadata = {
  title: 'About Us | BuyMore Computer',
  description: 'Learn about BuyMore Computer (Pvt) Ltd - Your trusted technology partner since 2015, delivering innovative, reliable, and customized IT solutions across Sri Lanka.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  );
}
