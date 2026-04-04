import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiExpressdotcom } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import {motion} from "framer-motion"
function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiExpressdotcom />, name: "Express" },

    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },

    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFastapi />, name: "FastAPI" },
  ];
  const repeated = [...skills ];
  return (
    <section
      id="skills"
      className="h-screen w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden "
    >
      <div className="pointer-events-none  absolute bg-gradient-to-r w-[50vw] sm:w-[40vw]  from-[#302b63] via-[#00bf8f] to-[#1cd8d2] top-[10%] sm:top-[-10%] left-[-20%] h-[50vw] sm:h-[30vw] opacity-30 sm:opacity-30 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none  absolute bg-gradient-to-r w-[50vw] sm:w-[40vw]  from-[#302b63] via-[#00bf8f] to-[#1cd8d2] top-[40%] right-[1%] delay-700  h-[50vw] sm:h-[30vw] opacity-30  blur-3xl animate-pulse"></div>

      <motion.div className="flex flex-col items-center justify-center mt-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl mt-8 bg-clip-text text-transparent bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          className="text-xl mt-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Modern Skills | Modern Technologies
        </motion.p>
      </motion.div>

      <div className=" grid grid-cols-3 sm:grid-cols-6  gap-5 sm:gap-25 mt-5 ">
        {
          repeated.map((s,idx)=>(
               <div key={idx} className='flex flex-col items-center justify-center gap-3 mt-6'>
                <span className='text-6xl hover:scale-150 transition-transform' >{s.icon}</span>
                <p className='text-sm'>{s.name}</p>
               </div>
                
          ))
        }
      </div>
    </section>
  );
}

export default Skills