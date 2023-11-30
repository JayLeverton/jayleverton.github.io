import React, { useState } from "react";

const Navbar = () => {
  const [hamburgerOverlay, setHamburgerOverlay] = useState(false);

  const toggleHamburgerOverlay = () => {
    setHamburgerOverlay(!hamburgerOverlay);
    console.log(hamburgerOverlay);
  };

  return (
    <nav className="bg-tertiary-bg-color sticky top-0 w-full border-b">
      <div className="flex z-30 justify-between px-6 md:px-12 py-5">
        <div className="flex items-center">
          <span className="font-semibold text-2xl">Jay Leverton</span>
        </div>

        <div className="hidden items-center text-end font-normal md:flex ">
          <div className="flex-1">
            <ul className="flex gap-8 text-lg">
              <a className="" href="#home">
                <li className="hover:text-highlight-text-color transition">
                  Home
                </li>
              </a>
              <a className="" href="#about">
                <li className="hover:text-highlight-text-color transition">
                  About
                </li>
              </a>
              <a className="" href="#projects">
                <li className="hover:text-highlight-text-color transition">
                  Projects
                </li>
              </a>
              <a className="" href="#contact">
                <li className="hover:text-highlight-text-color transition">
                  Contact
                </li>
              </a>
              <a className="" href="/#">
                <li className="hover:text-highlight-text-color transition">
                  Blog
                </li>
              </a>
            </ul>
          </div>
        </div>

        {/*  */}
        {/* Hamburger menu */}
        <button
          className="hamburger-menu-button overflow-hidden flex justify-end items-center w-8 h-8 m-0 p-0 md:hidden"
          onClick={toggleHamburgerOverlay}
        >
          <svg
            width="100px"
            height="100px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M2 12.32H22"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 18.32H22"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 6.32001H22"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <div
        className={`bg-primary-bg-color hamburger-menu-overlay top-0 z-40 absolute h-screen w-screen mx-auto transition-transform ease-in-out duration-[400ms] md:hidden ${
          hamburgerOverlay ? "translate-x-0" : "translate-x-[-800px]"
        }`}
      >
        <button
          className="absolute overflow-hidden top-0 right-0 w-10 h-10 mr-4 mt-4"
          onClick={toggleHamburgerOverlay}
        >
          <svg
            className="absolute top-[-6px] left-[-6px]"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M19 5L4.99998 19M5.00001 5L19 19"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <div className="flex flex-col z-40 h-screen border-slate-900 my-auto text-3xl text-center justify-center">
          <ul className="flex flex-col gap-[3rem]">
            <a className="" href="#home" onClick={toggleHamburgerOverlay}>
              Home
            </a>
            <a className="" href="#about" onClick={toggleHamburgerOverlay}>
              About
            </a>
            <a className="" href="#projects" onClick={toggleHamburgerOverlay}>
              Projects
            </a>
            <a className="" href="#contact" onClick={toggleHamburgerOverlay}>
              Contact
            </a>
            <a className="" href="/#" onClick={toggleHamburgerOverlay}>
              Blog
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
