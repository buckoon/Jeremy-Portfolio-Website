import React from "react";
import { Link } from "react-router-dom";
import prof3 from "./images/prof3.JPG";

function Footer() {
  return (
    <div>
      <Link to="/">
        <footer className="absolute bottom-0 right-0 mr-10 mb-10">
          <div className="flex items-center justify-center">
            <img
              src={prof3}
              alt="Homepage"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer "
            />
            <button className="uppercase hidden md:inline-flex text-sm text-gray-400 ml-1">
              Home
            </button>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Footer;
