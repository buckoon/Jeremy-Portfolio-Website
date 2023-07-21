import React from "react";
import pic from "./images/hobby hunter sample pic.png";
import Kn from "./images/newsite.png";
import { motion } from "framer-motion";
import Project from "./Project";
import Footer from "./Footer";

function Projects() {
  const projects = [
    {
      number: 1,
      imageUrl: Kn,
      title: "MERN Stack Hobby Hunter",
      link: "https://hobby-hunter.onrender.com",
      description:
        "This project is currently being developed as the second version of Hobby Hunter. To have more control over the project's functionality, I decided to utilize the MERN Stack, which allows me to create a custom backend. Alongside this, I also redesigned the React portion of the project.\n\nThe concept for this website originated from my aspiration to build something original, rather than replicating existing websites. When my father retired in 2022, he encountered difficulties in finding new hobbies or activities to occupy his time. This served as the inspiration behind Hobby Hunter. It is a web application that empowers users to create personal profiles and share their hobbies, including detailed instructions on how to get started with each one. Built using the MERN Stack (MongoDB, Express, React, Node.js) and incorporating Redux for state management, the application encompasses various features. These include user authentication, the ability to create posts, as well as like and comment on them. Moreover, it includes a weather forecaster and a random hobby generator. Currently, my focus is on implementing the functionality to add friends and the user profile component for each user, which I aim to complete this weekend. Following that, I plan to incorporate a search bar to enable users to query different hobbies.",
    },
    {
      number: 2,
      imageUrl: pic,
      title: "Hobby Hunter",
      link: "https://hobby-hunter-pro.vercel.app",
      description:
        "After building several clones of websites that already exist, I wanted to build something that was my own original concept. When my dad retired in 2022, he was having trouble looking for new things or hobbies to occupy his time, and that is when I thought of creating Hobby Hunter. Hobby Hunter is a web application that enables users to create a personal profile and share their hobbies along with instructions on how to get started with a hobby. The app is built using REACT Redux and features Google authentication for secure login and logout. Additionally, the app utilizes Firebase Storage to store the hobbies that users may post. Even though the app has been deployed to production, it is still a work in progress as I am currently expanding the backend using Node.js, Express, and MongoDB. Building out the backend will provide additional opportunities, such as the ability to modify a user's profile after creation and the ability to engage in conversation with other users. Additionally, it may allow for the implementation of other advanced features.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-auto relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
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
      <Footer />
    </motion.div>
  );
}

export default Projects;
