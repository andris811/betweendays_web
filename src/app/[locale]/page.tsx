import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SeeItInAction from '@/components/SeeItInAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <SeeItInAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
