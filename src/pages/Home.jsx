import React, { useEffect, useMemo, useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground';
import {motion} from "framer-motion"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import avator from "../assets/avator.png"

function Home() {
  const roles = useMemo(()=>["Web Developer","Software Developer"],[])
   const [index,setIndex] = useState(0);
   const [subIndex,setSubIndex] = useState(0);
   const [deleting , setDeleting] = useState(false)

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
    initial:{scale: 1 ,y:0 , filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"},
    hover:{
      scale: 1.2 , y:-3 , 
      filter:"drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.6))",
      transition: {type:"spring" , stiffness:300 , damping:15} 
    },
    tap:{scale:0.95 , y:0 , transition:{duration: 0.08}}
  }
  useEffect(() => {
    const current = roles[index];
    
    let timeout;

    if (!deleting && subIndex < current.length) {
      timeout = setTimeout(() => {
        setSubIndex((v) => v + 1);
      }, 60);
    } else if (!deleting && subIndex === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1200); // pause before deleting
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setSubIndex((v) => v - 1);
      }, 40);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((p) => (p + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [deleting, subIndex, index, roles]);
  return (
    <section className="w-full h-screen flex  bg-black overflow-hidden" id="home">
      <ParticlesBackground />
      
      <div className="absolute inset-0 ">
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw]
   md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full  bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
   opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw]
   md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full  bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
   opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"
        ></div>
      </div>

      <div className="relative z-10  w-full h-full grid grid-cols-2 sm:grid-cols-2 mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center lg:text-left h-full relative p-0 sm:p-15 ">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem] lg:max-w-none">
            <motion.div
              className=" mb-10 sm:mb-3 text-2xl  mt-10 sm:text-2xl flex items-center justify-center md:text-3xl lg:text-2xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span> {roles[index].substring(0, subIndex)}</span>
              <span className="animate-pulse font-light  ml-1 ">|</span>
            </motion.div>
            <motion.h1
              className="text-3xl  sm:text-2xl md:text-3xl lg:text-4xl text-transparent drop-shadow-lg font-bold bg-clip-text 
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />
              <span className="text-white font-bold text-4xl sm:text-3xl md:text-5xl lg:text-6xl lg:whitespace-nowrap">
                Kakul Manav
              </span>
            </motion.h1>
            <motion.p
              className=" text-gray-400  italic mt-6   text-sm sm:text-sm w-full md:text-lg max-w-2xl mx-auto "
              style={{ fontFamily: "sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I create modern websites with clean design and efficient code.
              Passionate about learning, building, and improving every day.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap lg:flex-nowrap w-full items-center justify-center  lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="lg:w-1/2 
               rounded-full text-center  px-5 py-2 font-medium text-lg text-white shadow-lg hover:scale-105 transition-all"
              >
                 My work
              </a>
              <a
                href="kakul-Resume.pdf"
                download
                className="lg:w-1/2 text-center px-5 py-2 font-bold bg-white text-black hover:bg-gray-300 shadow-lg hover:scale-105 transition-all rounded-full"
              >
                My CV
              </a>
            </motion.div>
            
            <div className=" flex gap-4 text-2xl  sm:text-2.5xl md:text-3xl mt-8">
              {social.map(({ Icon, label, href }) => (
                <a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  variants={glowVarient}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative block">
          <motion.img
            src={avator}
            alt="Kakul Manav"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none -r-[30px] max-h-[70vh] sm:max-h-[90vh] w-[min(45vw,780px)]  "
           
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home