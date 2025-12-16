import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { ContactFormSection } from '@/components/contact/ContactFormSection';
import { MapSection } from '@/components/contact/MapSection';
import heroTraining from '@/assets/hero-training.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          badge="Contact Us"
          title="Let's Start a"
          highlight="Conversation"
          subtitle="Have questions about our products, services, or bulk orders? We're here to help. Reach out to us and we'll get back to you as soon as possible."
          backgroundImage={heroTraining}
        />
        <ContactFormSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
