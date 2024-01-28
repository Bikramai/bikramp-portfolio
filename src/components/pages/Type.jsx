import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Engineer",
          "I am an Entrepreneur.",
          "Committed Open Source Contributor",
          "Passionate Software Developer Enthuiast!",
          "Fullstack Development Enthusiast!",
          "Effective Problem Solver!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type