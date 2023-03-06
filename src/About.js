import React from "react";
import { motion } from "framer-motion";
import profimage from "./images/profimage.PNG";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        src={profimage}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10 flex-grow">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
        After graduating college as a Mechanical Engineer in 2015, I began working at Kollmorgen where I gained valuable industry experience. However, two years ago I was also drawn to the world of web development and started learning Javascript, HTML, and CSS on my own time as a hobby. I've grown my skills to the point where I was able to successfully pivot my career and transfer to an IT role as an Oracle Configurator developer. I'm passionate about continuing to learn and grow my skills in both traditional engineering and web development, and I'm excited to take on new challenges and projects.
       
  
        </p>
      </div>
    </motion.div>
  );
}

export default About;
