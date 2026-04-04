import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


import { motion } from "framer-motion";
function Footer() {
  const social = [
    {
      Icon: FaLinkedin,
      label: "linkedIn",
      href: "https://www.linkedin.com/in/kakul-manav-294568320",
    },
    {
      Icon: FaGithub,
      label: "github",
      href: "https://github.com/kakulmanav-dot",
    },
  ];
       const glowVarient = {
         initial: {
           scale: 1,
           y: 0,
           filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
         },
         hover: {
           scale: 1.2,
           y: -3,
           filter:
             "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.6))",
           transition: { type: "spring", stiffness: 300, damping: 15 },
         },
         tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
       };
  return (
    <div className="w-full  relative bg-black">
      <div
        className="absolute -top-32 -left-32 w-[70vw] sm:w-[30vw] md:w-[30vw] h-[70vw] sm:h-[30vw]
   md:h-[30vw] max-w-[500px] max-h-[500px] rounded-full  bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
   opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[70vw] sm:w-[20vw] md:w-[30vw] h-[70vw] sm:h-[20vw]
   md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full  bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
   opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 relative px-4 sm:px-8  lg:px-10  py-16 md:py-20 flex flex-col items-center text-center space-y-6"
      >
        <h1
          className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            padding: "0 3vw",
            whiteSpace: "nowrap",
            textShadow: "0px 2px 18px rgba(0,0,0,0.45)",
          }}
        >
          Kakul Manav
        </h1>
        <div className="w-24 h-1 md:w-32 rounded-full bg-gradient-to-r from-[#0d558c] via-cyan-300 to-emerald-400"></div>
        <div className="flex gap-5 text-center">
          {social.map(({ Icon, label, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              variants={glowVarient}
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 flex flex-row gap-3 text-3xl "
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="italic text-gray-400 max-w-xl">
          Success is when preparation meets opportunity.
        </p>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Kakul Manav. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}

export default Footer