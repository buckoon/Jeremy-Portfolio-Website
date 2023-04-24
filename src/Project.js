import React from "react";
import { motion } from "framer-motion";

function Project({ projectNumber, imageUrl, projectTitle, projectLink, projectDescription }) {
  return (
    <div
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
        src={imageUrl}
        alt=""
        style={{ transition: "transform 0.2s ease-in-out",
        width:"500px",
        height:"auto",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="decoration-[#F7AB0A]/50">
            {projectTitle} (project {projectNumber} of 1)
          </span>
          <a href={projectLink} className="underline text-blue-500 hover:text-blue-700" style={{ display: 'block' }}>
            <span>{projectLink}</span>
          </a>
        </h4>
       <p className="text-lg text-center md:text-left">
          {projectDescription}
       </p>
      </div>

    </div>
  );
}

export default Project
