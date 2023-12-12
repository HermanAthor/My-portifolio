import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-5 justify-between bg-[#121212] ">
      <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-20">
        <ul className="flex flex-row bg-black text-white p-2 rounded-full gap-4 px-5 font-sans font-semibold text-lg">
          <a href="#about">
            <li className=" hover:underline">About</li>
          </a>
          <a href="#skills">
            <li className=" hover:underline">Skills</li>
          </a>
          <a href="#projects">
            <li className=" hover:underline">Projects</li>
          </a>
          <a href="#contact">
            <li className=" hover:underline">Contact</li>
          </a>
        </ul>
      </div>
      <div className="absolute top-2 left-2 z-30">
        <Image
          src="/hermanlogo2.svg"
          alt="hermanlogo"
          width={100}
          height={100}
        />
      </div>
      <HeroSection />
      {/* <Hero /> */}
      <AboutMe />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <ContactMe />
    </main>
  );
}
