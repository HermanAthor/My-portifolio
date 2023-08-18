import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import Projects from '@/components/projects'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <ContactMe/>
    </main>
  )
}
