import React from "react";
import AboutMe from "./AboutMe";
import Career from "./Career";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="flex flex-col gap-6 bg-slate-300 dark:bg-slate-800 text-center p-10 my-10">
      <AboutMe />
      <Career />
      <Education />
      <Skills />
    </section>
  );
};

export default About;
