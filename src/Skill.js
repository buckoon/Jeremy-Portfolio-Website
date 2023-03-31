import React from "react";
import { motion } from "framer-motion";

function Skill({ directionLeft, src, name }) {
  return (
    <div className="group p-2 md:p-1 items-center align-middle justify-center text-center h-full">
      <p className="text-sm text-gray-500 mt-2">{name}</p>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md-h-28 xl:w-32 xl:h-32 filter "
      />
    </div>
  );
}


export default Skill;