import React, { useEffect, useMemo, useState, useRef } from "react";
import header_img from "../assets/header_img.png";
import hero from "../assets/hero3.png";
import project_img_2 from "../assets/project_img_2.jpg";
import { useMotionValueEvent, useScroll } from "framer-motion";
import gallery from "../assets/gallery-3.png";
import { AnimatePresence ,motion} from "framer-motion";

// ✅ Fix 1 — renamed to useIsMobile
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

function Project() {
  // ✅ 
  const isMobile = useIsMobile();
  const sceneRef = useRef();

  const project = useMemo(
    () => [
      {
        title: "Real Estate",
        link: "https://real-estate66.vercel.app/",
        bgcolor: "#6c3573",
        image: isMobile ? project_img_2 : header_img,
      },
      {
        title: "Edusity",
        link: "https://educity-t9jo.vercel.app/",
        bgcolor: "#482daa",
        image: isMobile ? gallery : hero,
      },
    ],
    [isMobile],
  );

  // ✅ 
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  // ✅ 
  const thresholds = project.map((_, i) => (i + 1) / project.length);

  const [activeIndex, setActiveIndex] = useState(0);

  // 
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = project[activeIndex];

  
  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * project.length}vh`,
        backgroundColor: activeProject.bgcolor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 flex flex-col text-center  h-screen">
        <h2
          className={` text-4xl flex text-center justify-center items-center   font-semibold  z-10 ${isMobile ? "mt-13 py-10" : "mt-8 py-7"}`}
        >
          My Projects
        </h2>
        <div
          className={`w-full relative flex-1 flex items-center justify-center ${isMobile ? "-mt-4" : ""}`}
        >
          {project.map((pro, idx) => (
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0 sm:mt-7
                 transition-all duration-500 ${
                   activeIndex === idx
                     ? "opacity-100 z-20"
                     : "opacity-0 z-0 pointer-events-none"
                 }`}
              key={pro.title}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  {activeIndex === idx && (
                    <motion.h3
                      className={`block text-center text-[clamp(1rem,4vw,4rem)] text-white/95 
                      sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0 italic 
                      font-semibold`}
                      style={{
                        bottom: isMobile ? "auto" : "85%", // ← pushes title so image overlaps top half
                        left: isMobile ? "0" : "-2%",
                        textAlign: isMobile ? "left" : "left",
                      }}
                      key={pro.title}
                      initial={{ opacity: 0, y: -24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {pro.title}
                    </motion.h3>
                  )}
                </AnimatePresence>
                <div
                  className={`relative z-2 md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                    isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                  }
                h-[60vh] sm:h-[66vh]`}
                  style={{ zIndex: 1, transition: "box-shadow 250ms ease" }}
                >
                  <img
                    src={pro.image}
                    alt={pro.title}
                    className={` w-full h-full drop-shadow-xl md:drop-shadow-2xl ${isMobile ? "object-cover w-full" : ""}
                `}
                    style={{
                      zIndex: 10,
                      position: "relative",

                      filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                      transition: "filter 200ms ease",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-3  transition-all z-50">
          <a
            href={activeProject?.link}
            target="_blank" // ← opens in new tab
            rel="noopener noreferrer"
            className={`text-center    bg-white  text-blue-800 font-bold hover:bg-gray-300  w-40  px-6 py-2 rounded `}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
