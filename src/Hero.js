import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import ProfImage from "./images/prof3.JPG";
import Footer from "./Footer";
import { useMediaQuery } from "@mui/material";

function Hero() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [text, helper] = useTypewriter({
    words: [
      "Hi, My Name is Jeremy",
      "It is nice to meet you!",
      "Thanks for stopping by!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfImage}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
       
        {isSmallScreen ? (
          <h1 className="text-4xl lg:text-5xl font-semibold px-5">
            <span>{text}</span>
            <Cursor cursorColor="#0A81F7" />
          </h1>
        ) : (
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#0A81F7" />
          </h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
