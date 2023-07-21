import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Clear as ClearIcon } from '@mui/icons-material';
import { useMediaQuery } from "@mui/material";

function Header() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

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

      {isNonMobileScreens ? (
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
          <div className="pt-7 ml-5">
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
      ) : (
        <>
          {!isMenuOpen && ( // Only show the MenuIcon when the menu is closed
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
              <div className="mt-3">
                <MenuIcon
                  onClick={handleMenuToggle}
                  className="w-8 h-8 cursor-pointer text-gray-400 hover:text-gray-600"
                />
              </div>
            </motion.div>
          )}
          {isMenuOpen && (
          // Show a dropdown menu for navigation links on smaller screens
          <motion.div
            initial={{
              opacity: 0,
              y: -40, // Adjust the margin-top value to move the dropdown higher or lower
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-44 bg-transparent border border-gray-300 shadow-md mt-14 mr-5 rounded-md p-2"
          >
            {/* Add the X symbol to close the menu */}
            <div className="flex justify-end">
              <ClearIcon
                onClick={handleMenuToggle}
                className="w-8 h-8 cursor-pointer text-gray-400 hover:text-gray-600"
              />
            </div>
            
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
          </motion.div>
        )}
        </>
      )}
    </div>
  );
}

export default Header;
