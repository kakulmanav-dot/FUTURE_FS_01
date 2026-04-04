import React from "react";
import myImage from "../assets/myImage.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      className="relative py-2 w-full min-h-screen overflow-hidden bg-black pointer-events-none"
      id="about"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute bg-gradient-to-r w-[50vw] sm:w-[40vw] from-[#302b63] via-[#00bf8f] to-[#1cd8d2] top-[10%] sm:top-[-10%] left-[-20%] h-[50vw] sm:h-[30vw] opacity-30 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute bg-gradient-to-r w-[50vw] sm:w-[40vw] from-[#302b63] via-[#00bf8f] to-[#1cd8d2] top-[40%] right-[1%] delay-700 h-[50vw] sm:h-[30vw] opacity-30 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none sm:hidden block absolute bg-gradient-to-r w-[50vw] sm:w-[40vw] from-[#302b63] via-[#00bf8f] to-[#1cd8d2] delay-300 bottom-[-10%] left-[-20%] h-[50vw] sm:h-[30vw] opacity-30 blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-50 flex sm:flex-row flex-col items-center sm:items-start w-full justify-center gap-7 p-10 sm:p-30">
        <div className="w-2/3 sm:w-40">
          <motion.img
            src={myImage}
            alt=""
            className="overflow-hidden  rounded sm:rounded object-cover w-100 sm:w-full h-120 sm:h-60 p-5 sm:p-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>

        <motion.div className="text-white w-full sm:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-5xl font-bold"
          >
            Kakul Manav
          </motion.h1>

          <p className="mt-3 text-lg">Full Stack Developer</p>

          <motion.p
            className="text-gray-400 mt-5 text-sm sm:text-medium md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            I possess a solid foundation in core web technologies I build
            responsive and interactive user interfaces. I have experience
            working with modern frameworks like React and styling tools such as
            Tailwind CSS to create clean and efficient designs. I focus on
            writing clean, maintainable code and solving problems effectively
            while learning new technologies.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="border border-gray-400 bg-transparent px-5 sm:px-12 rounded py-2 sm:py-4">
              <p className="text-sm">
                Speciality <br /> <span className="font-bold">Full Stack</span>
              </p>
            </div>
            <div className="border border-gray-400 bg-transparent px-5 sm:px-9 rounded py-1 sm:py-4">
              <p className="text-sm">
                Focus <br /> <span className="font-bold">Performance & UX</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex mt-8 sm:mt-4 gap-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/projects" onMouseMove={()=> {console.log("hello")}}
              className="bg-white rounded text-black z-100 px-5 py-2 hover:scale-105 transition-all duration-300 inline-block"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border z-100 rounded text-white px-5 py-2 hover:scale-105 transition-all duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
