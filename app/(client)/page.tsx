import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Intro from "@/app/components/intro";
import Projects from "@/app/components/projects";
import Skills from "@/app/components/skills";
import Gallary from "@/app/components/gallary";
import Slider from "@/app/components/quotes";
import Blog from "@/app/components/blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <Blog />
      <About />
      <Skills />
      <Projects />
      <Gallary />
      <Slider />
      <Contact />
    </main>
  );
}
