import React from "react";
import pic from "./images/hpic.png";
import Km from "./images/Kmapp.png"
import { motion } from "framer-motion";
import Project from "./Project";



  
function Projects() {
  const projects = [
    {
      number: 1,
      imageUrl: pic,
      title: "Hobby Hunter",
      link: "https://hobby-hunter-c0a22.web.app",
      description:
        "After building several clones of websites that already exist I wanted to build something that was my own original concept. When my dad retired in 2022 he was having trouble looking for new things or hobbies to occupy his time and that is when I thought of creating Hobb Hunter. Hobby Hunter is a web application that enables users to create a personal profile and share their hobbies along with instructions on how to get started with them. The app is built using REACT Redux and features Google authentication for secure login and logout. Additionally, the app utilizes firebase storage to store the hobbies that users may post.",
    },

    {
      number: 2,
      imageUrl: Km,
      title: "Motor Selector",
      link: "https://dc-motor-selection-tool-react.vercel.app",

      description:
        "This project is significant to me because it was the first application I created after mastering state and props. Its inclusion demonstrates my growth as a developer from my initial stages to the present.",
    },
    // Add more projects here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl" style={{ marginBottom: "2rem" }}>
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0A81F7]/80">
        {projects.map((project) => (
          <Project
            key={project.number}
            projectNumber={project.number}
            imageUrl={project.imageUrl}
            projectTitle={project.title}
            projectLink={project.link}
            projectDescription={project.description}
          />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0A81F7]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects