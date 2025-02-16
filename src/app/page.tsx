import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/sections/AboutMe';
import ContactForm from '@/components/sections/ContactForm';
import ExperienceCard from '@/components/sections/ExperienceCard';
import ProjectGridContainer from '@/components/sections/ProjectContainer';
import ProjectsDetails from '@/components/sections/ProjectDetails';
import ServicesCards from '@/components/sections/ServicesCards';

export default function Home() {
  return (
    <main className='mx-auto max-w-screen-2xl'>
      <HeroSection />
      <AboutMe />
      <ServicesCards />
      <ExperienceCard />
      <ProjectsDetails />
      <ProjectGridContainer />
      <ContactForm />
    </main>
  );
}
