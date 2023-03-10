import React from "react";
import { motion } from "framer-motion";


function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
     whileInView={{ opacity: .7 }}
      transition={{ duration: 3 }}>
      <h4 className= "absolute bottom-0 right-2 text-xs pb-2 pr-2  text-gray-500">This Website was built using REACT JS and Tailwind CSS</h4>
    </motion.div>
  );
}

export default Footer;
