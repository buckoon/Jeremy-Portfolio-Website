import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutPic from "./images/wed.jpg";
import prof3 from "./images/prof3.JPG";

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
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={aboutPic.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10 flex-grow">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          background story how you became a programmer
          blahblahblahk'sdgnoaigno'iangsog
          l;lsmaglmpadsmfgp;sgkdmhg'khm'gfkmhdfkgmhgfd'kmhdkfgl'mhg'fslm'lsfkmj'klmjkmfks;lksfj'm
        </p>
      </div>
    </motion.div>
  );
}

export default About;
