import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import DifferentialSection from '@/components/landing/DifferentialSection';
import AutomationSection from '@/components/landing/AutomationSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ProcessSection from '@/components/landing/ProcessSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import ParticleField from '@/components/landing/ParticleField';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleField />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <DifferentialSection />
      <AutomationSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
