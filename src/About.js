import React from "react";
import { motion } from "framer-motion";
import profimage from "./images/profimage.PNG";
import Footer from "./Footer";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left max-w-7xl px-5 md:px-10 justify-center mx-auto items-center md:flex-row md:space-x-12 md:items-center"
    >
      <h3 className="md:absolute md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="md:-mb-20 md:flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full object-cover md:rounded-lg xl:w-[500px] xl:h-[600px]"
        alt="Profile"
      />

      <div className="space-y-6 md:space-y-10 md:flex-grow">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0A81F7]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          After graduating college as a Mechanical Engineer in 2015, I began working at Kollmorgen where I gained valuable industry experience. However, two years ago I was also drawn to the world of web development and started learning Javascript, HTML, and CSS on my own time as a hobby. I've grown my skills to the point where I was able to successfully pivot my career and transfer to an IT role as an Oracle Configurator Developer. I'm passionate about continuing to learn and grow my skills in both traditional engineering and web development, and I'm excited to take on new challenges and projects.
        </p>
      </div>
      <Footer />
    </motion.div>
  );
}

export default About;
