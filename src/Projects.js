import React from "react";
import aboutPic from "./images/wed.jpg";
import { motion } from "framer-motion";

function Projects() {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl" style={{marginBottom: "2rem"}}>
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={aboutPic.src}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className=" decoration-[#F7AB0A]/50">
                  Hobby Hunter (project {i +1} of {projects.length}): 
                </span>
                <div className="text-lg">
                  <a href="https://hobby-hunter-c0a22.web.app" className="underline text-blue-500 hover:text-blue-700">
                     hobby-hunter-c0a22.web.app
                  </a>
                </div>
              </h4>
              <p className="text-lg text-center md:text-left">
              Hobby Hunter is a web application that enables users to create a personal profile and share their hobbies along with instructions on how to get started with them. The app is built using REACT Redux and features Google authentication for secure login and logout. Additionally, the app utilizes firebase storage to store the hobbies that users may post.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
