

import About from "../components/about";
import Contact from "../components/contact";
import Intro from "../components/intro";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Gallary from "../components/gallary";
import Slider from "../components/quotes";
import Blog from "../components/blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">

      <Intro />
      <Blog/>
      <About />
      <Skills  />
      <Projects />
      <Gallary />
      <Slider />
      <Contact />
    </main>
  );
}

