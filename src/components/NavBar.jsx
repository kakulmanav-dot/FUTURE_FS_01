import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav>
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:py-4 py-8 z-50">
          <div className="w-32 flex items-center justify-center gap-2">
            <img
              src={logo}
              className="rounded-full w-14 h-14 object-cover"
              alt=""
            />
            <p className="sm:text-3xl text-2xl font-light text-white italic sm:font-semibold">
              Kakul
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-8 text-white">
              <a
                href="/home"
                className="hover:border-white border-b border-transparent transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:border-white border-b border-transparent transition-all duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:border-white border-b border-transparent transition-all duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:border-white border-b border-transparent transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:border-white border-b border-transparent transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden block">
            <FiMenu
              size={26}
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <div className="sm:block hidden">
            <a href="#contact" className="bg-slate-600 rounded px-4 py-2 text-white">
              Reach Me
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            menuOpen
              ? "fixed top-0 z-100 right-0 bottom-0 w-1/2 rounded bg-transparent text-white"
              : "h-0 w-0 overflow-hidden"
          } transition-all duration-300`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="flex justify-end p-6 cursor-pointer"></div>
          <ul className="flex flex-col items-center px-5 text-lg gap-2 mt-5 font-medium">
            <a
              href="#home"
              className="px-4 py-2 rounded-full inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full inline-block"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:border-white border-b border-transparent transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full inline-block"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
