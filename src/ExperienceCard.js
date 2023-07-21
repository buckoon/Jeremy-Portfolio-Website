import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({
  image,
  title,
  company,
  date,
  responsibility1,
  responsibility2,
  responsibility3,
  responsibility4,
  responsibility5,
}) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 md:h-48 md:w-48 xl:h-[200px] xl:w-[200px] rounded-full object-cover object-center"
        src={image}
        alt="Company Logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{title}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">{company}</p>

        <p className="uppercase py-2 md:py-5 text-gray-300 text-sm md:text-lg">
          {date}
        </p>
        <ul className="list-disc space-y-3 md:space-y-4 ml-2 text-sm md:text-lg">
          {responsibility1 && <li>{responsibility1}</li>}
          {responsibility2 && <li>{responsibility2}</li>}
          {responsibility3 && <li>{responsibility3}</li>}
          {responsibility4 && <li>{responsibility4}</li>}
          {responsibility5 && <li>{responsibility5}</li>}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
