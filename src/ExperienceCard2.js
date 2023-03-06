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
        <h4 className="text-4xl font-light">A&D Sales Project Engineer</h4>
        <p className="font-bold text-2xl mt-1">Kollmorgen (a subsidiary of Altra Industrial Motion Corp) </p>
        <div className="flex space-x-2 my-2 rounded-full">
          {/* JavaScript Logo <img className="h-10 w-10 rounded-full" src={?.src} /> */}
          {/* <img className="h-10 w-10 rounded-full" src={?.src} /> */}
          {/* <img className="h-10 w-10 rounded-full" src={?.src} /> */}
        </div>
        <p className="uppercase py-5 text-gray-300">May 2021-June 2022</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Directly supported large OEMs in Aerospace & Defense, Medical, and High Tech/Semi-
             Conductor markets which led to achieving the growth of Kollmorgen direct A&D
                accounts 10% more than the yearly projection of $xxx million.
          </li>
          <li>
                Accomplished the annual objective of generating a significant number of new prototypes for the US A&D region by exceeding the target by 30%.
          </li>
          <li>
              Independent project for a solution how to communicate with KAS(Kollmorgen Automation Suite software) using Python through Ethernet IP Via HTTP.
         </li>
          <li>
             Directly overseeing and managing new designs that are based off the customer spec from receiving the initial spec until the product ships. 
          </li>
         
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
