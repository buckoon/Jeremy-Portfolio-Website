import React from "react";
import Vt from "./images/VT.png";
import Km from "./images/Km.jpg";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Footer from "./Footer";


function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-gray-500 text-2xl">
        EXPERIENCE
      </h3>


      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0A81F7]/80">
        <ExperienceCard
        image = {Km}
        title="Oracle Configurator Developer"
        company="Kollmorgen (a subsidiary of Altra Industrial Motion Corp)"
        date="June 2022-Current"
        responsibility1="Design and represent the model Configurator UI(User Interface), configuration logic and BOM (Bill of Material)"
        responsibilty2="Configure, develop, and maintain database models using Oracle Applications and Configurator
        Developer with Oracle 11i/R12"
        responsibility3="Analyzing, generating and maintaining massive amounts of data using 
        SQL, Excel, Oracle configurator and Data Loader."
        responsibility4="Implemented automation to reduce Kollmorgen's order backlog by 200% through
        configuration, development, and maintenance of models using Oracle Applications."
        responsibility5="Provide technical support and assistance to different departments concerning Oracle and Istore."
        />
        <ExperienceCard 
        image = {Km}
        title="A&D Sales Project Engineer"
        company="Kollmorgen (a subsidiary of Altra Industrial Motion Corp)"
        date="May 2021-June 2022"
        responsibility1="Directly supported large OEMs in Aerospace & Defense, Medical, and High Tech/Semi-
        Conductor markets which led to achieving the growth of Kollmorgen direct A&D
           accounts 10% more than the yearly projection of $xxx million."
        responsibility2="Accomplished the annual objective of generating a significant number of new prototypes for the US A&D region by exceeding the target by 30%."
        responsibility3=" Independent project for a solution how to communicate with KAS(Kollmorgen Automation Suite software) using Python through Ethernet IP Via HTTP."
        responsibility4="Directly overseeing and managing new designs that are based off the customer spec from receiving the initial spec until the product ships."
        responsibility5=""/>

        <ExperienceCard 
        image = {Km}
        title="Application Engineer"
        company="Kollmorgen (a subsidiary of Altra Industrial Motion Corp)"
        date="June 2015-April 2021"
        responsibility1="Contributed to the achievement $16.43 mil in new business for the year 2020"
        responsibilty2="Worked with customers performing engineering calculations daily in order to come up with a design solution based off customer requirements"
        responsibility3=" Improved our customer on time responses (less than 2 days) from 34% to 90%"
        responsibility4="Lead multiple Kaizen events where one resulted in the achievement of the KPI on time delivery improving from 54% to 80% "
        responsibility5=""/> 

        <ExperienceCard 
        image = {Vt}
        title="Education"
        company="Virginia Tech"
        date="August 2012- June 2015"
        responsibility1="Bachelors of Science in Mechanical Engineering from Virginia Tech"
        responsibilty2="President of the Virginia Tech ME Honor Society 2014-2015"
        responsibility3=""
        responsibility4=""
        responsibility5=""/>    
       
        
      </div>
      <Footer />
    </motion.div>
  );
}

export default WorkExperience;
