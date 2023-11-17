import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerOverlay, setHamburgerOverlay] = useState(false);

  const toggleHamburgerOverlay = () => {
    setHamburgerOverlay(!hamburgerOverlay);
    console.log(hamburgerOverlay);
  };

  // const hamburgerOverlayOff = () => {
  //   setHamburgerOverlay(false)
  // }

  return (
    <nav className="fixed w-full bg-[#0d1322] border-b">
      <div className="flex z-30 text-white justify-between px-6 md:px-12 py-5">
        <div className="flex items-center">
          <span className="font-semibold text-2xl">Jay Leverton</span>
        </div>

        <div className="hidden items-center text-end font-normal md:flex ">
          <div className="flex-1">
            <ul className="flex gap-8 text-lg">
              <a href="/#">
                <li className="hover:text-fuchsia-600 transition">Home</li>
              </a>
              <a href="/#">
                <li className="hover:text-fuchsia-600 transition">About</li>
              </a>
              <a href="/#">
                <li className="hover:text-fuchsia-600 transition">Projects</li>
              </a>
              <a href="/#">
                <li className="hover:text-fuchsia-600 transition">Contact</li>
              </a>
              <a href="/#">
                <li className="hover:text-fuchsia-600 transition">Blog</li>
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
        className={`hamburger-menu-overlay top-0 z-40 absolute bg-slate-900 h-screen w-screen mx-auto md:hidden ${
          hamburgerOverlay ? "visible" : "hidden"
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
        <ul className="z-40 flex flex-col h-screen justify-between text-center text-4xl my-auto py-16 border-[8px] rounded-3xl bg-slate-800 border-slate-900">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Projects</li>
          <li className="">Contact</li>
          <li className="">Blog</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
