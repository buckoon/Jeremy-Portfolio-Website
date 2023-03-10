import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import CSS from "./images/css.png";
import Js from "./images/javascript.png";
import HTML from "./images/html.png";
import ReactJS from "./images/react.png";
import TailwindCSS from "./images/tailwind.png";
import Firebase from "./images/firebase.png";
import GitHub from "./images/github.png";
import SQL from "./images/sql.png";
import NEXTJS from "./images/NEXT.jpg";
import SanityIO from "./images/sanity.png";
import TypeScript from "./images/typescript.png";
import Footer from "./Footer";

function Skills() {
  const directionLeft = true;
  const skills = [
    { name: "CSS", src: CSS },
    { name: "Javascript", src: Js },
    { name: "HTML", src: HTML },
    { name: "React JS", src: ReactJS },
    { name: "Tailwind CSS", src: TailwindCSS },
    { name: "Firebase", src: Firebase },
    { name: "GitHub", src: GitHub },
    { name: "SQL", src: SQL },
    { name: "NEXT JS", src: NEXTJS },
    { name: "Sanity IO", src: SanityIO },
    { name: "TypeScript", src: TypeScript },
  ];

  return (
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        y: directionLeft ? 100 : -100,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      className="flex relative flex-col text-center md:text-left sl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div className="flex flex-col items-center" key={skill.name}>
            <Skill
              directionLeft={directionLeft}
              src={skill.src}
              name={skill.name}
            />
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Skills;
