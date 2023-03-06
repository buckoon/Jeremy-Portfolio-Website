import React from "react";
import { motion } from "framer-motion";
import Km from "./images/Km.jpg";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={Km}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Oracle Configurator Developer</h4>
        <p className="font-bold text-2xl mt-1">Kollmorgen (a subsidiary of Altra Industrial Motion Corp) </p>
        <div className="flex space-x-2 my-2 rounded-full">
          {/* JavaScript Logo <img className="h-10 w-10 rounded-full" src={?.src} /> */}
          {/* <img className="h-10 w-10 rounded-full" src={?.src} /> */}
          {/* <img className="h-10 w-10 rounded-full" src={?.src} /> */}
        </div>
        <p className="uppercase py-5 text-gray-300">June 2022-Current</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Design and represent the model Configurator UI(User Interface), configuration logic and
            BOM (Bill of Material)
          </li>
          <li>
            Configure, develop, and maintain database models using Oracle Applications and Configurator
            Developer with Oracle 11i/R12
          </li>
          <li>
           Utilize database query tools to support data gathering requirements using
            SQL, Excel, Oracle configurator and Data Loader.

          </li>
          <li>
           Implemented automation to reduce Kollmorgen's order backlog by 200% through
           configuration, development, and maintenance of models using Oracle Applications.
          </li>
          <li>Provide technical support and assistance to different departments concerning Oracle and Istore.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
