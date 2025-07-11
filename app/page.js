// "use client";
import ThemeButton from "@/components/ui/theme-button";
import Service from "@/layout/Homepage/Service";
import Main from "@/layout/Homepage/Main";
import Projects from "@/layout/Homepage/Projects";
import Contact from "@/layout/Homepage/Contact";
import Aboutme from "@/layout/Homepage/Aboutme";


export default function Home() {
  return (
    <>
      <Main />
      <Service />
      <Projects />
      <Aboutme />
      <Contact />
    </>
  );
}
