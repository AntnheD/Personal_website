
import TechStack from '@/components/ui/TechStack';
import Projects from '@/components/projects/Projects';
import ContactForm from '@/components/forms/ContactForm';
import AboutMe from '@/components/ui/AboutMe';
import Footer from '@/components/layout/Footer';
import TestBackground from '@/components/home/TestBackground';

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0f1117] text-black dark:text-white min-h-screen">
      <TestBackground />
     
      <TechStack />
      <AboutMe />
      <Projects />
      <ContactForm />
     <Footer />
    </main>
  );
}
