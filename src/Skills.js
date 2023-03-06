import React from "react";
import { motion } from "framer-motion";
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import Skill3 from "./Skill3";
import Skill4 from "./Skill4";
import Skill5 from "./Skill5";
import Skill6 from "./Skill6";
import Skill7 from "./Skill7";
import Skill8 from "./Skill8";
import Skill9 from "./Skill9";
import Skill10 from "./Skill10";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left sl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col items-center">
          <Skill1 />
          <p className="text-sm text-gray-500 mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill2 />
          <p className="text-sm text-gray-500 mt-2">Javascript 2</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill3 />
          <p className="text-sm text-gray-500 mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill4 />
          <p className="text-sm text-gray-500 mt-2">React JS 4</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill5 />
          <p className="text-sm text-gray-500 mt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill6 />
          <p className="text-sm text-gray-500 mt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill7 />
          <p className="text-sm text-gray-500 mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill8 />
          <p className="text-sm text-gray-500 mt-2">SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill9 />
          <p className="text-sm text-gray-500 mt-2">NEXT JS</p>
        </div>
        <div className="flex flex-col items-center">
          <Skill10 />
          <p className="text-sm text-gray-500 mt-2">Sanity IO</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
