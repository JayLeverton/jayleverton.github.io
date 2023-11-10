import React from "react";
import { Link } from "react-router-dom";

const DebugNavbar = () => {
  return (
    <div className="debug-navbar border w-1/3 mx-auto mt-10 text-white">
      <h3 className="flex flex-col items-center font-semibold underline text-3xl mb-1">
        Debug Navbar
      </h3>
      <nav className="flex flex-col items-center">
        <Link className="font-semibold mt-1" to="/">
          Home
        </Link>
        <Link className="font-semibold mt-1" to="/about">
          About
        </Link>
        <Link className="font-semibold mt-1" to="/projects">
          Projects
        </Link>
        <Link className="font-semibold mt-1" to="/blog">
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default DebugNavbar;
