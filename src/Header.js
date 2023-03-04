import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import prof3 from "./images/prof3.JPG";

function Header() {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-8xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/jeremy-carpenter-1119b393/" 
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/buckoon"
          fgColor="gray"
          bgColor="transparent"
        />
     
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/*<SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />


        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {" "}
          Get In Touch
        </p>*/}

        <div className="pt-5 ml-50">
           <Link to="/">
            <button className="heroButton">Home</button>
          </Link>
          <Link to="/about">
            <button className="heroButton">About</button>
          </Link>

          <Link to="/experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link to="/skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link to="/projects">
            <button className="heroButton">Projects</button>
          </Link>

          <Link to="/contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
