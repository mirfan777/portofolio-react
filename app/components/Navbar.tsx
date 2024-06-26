"use client";
import DarkModeToggle from "./DarkModeToggle";
import { FaGithub , FaLinkedin , FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="fixed z-50 w-full">
        <div className="navbar bg-base-100 dark:bg-midnight-950 dark:text-white text-midnight-950 drop-shadow-2xl  " >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow dark:bg-slate-800 bg-slate-100 dark:text-white text-midnight-950 light:bg-slate-100 rounded-box w-52">
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#about">About</a></li>
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#experience">Experience</a></li>
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#projects">Projects</a></li>
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#contact">Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-aquamarine-700 dark:text-aquamarine-500 drop-shadow-[2px_5px_5px_rgba(20, 237, 211, 1)] " href="#home">M/I</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  dark:text-white text-midnight-950">
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#about">About</a></li>
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#experience">Experience</a></li>
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#projects">Projects</a></li>
              <li><a className="hover:text-aquamarine-700 dark:hover:text-aquamarine-500" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <DarkModeToggle />
        </div>
      </div> 



      <ol className="fixed z-50 bottom-20 left-10 overflow-hidden space-y-8 lg:block hidden">
      <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full   after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
          <a className="flex items-center font-medium w-full  " target="blank" href="https://github.com/mirfan777">
              <span className="w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8"><FaGithub className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 lg:w-8 lg:h-8 " /></span>
          </a>
      </li>
      <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full   after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
          <a className="flex items-center font-medium w-full  " target="blank" href="https://www.linkedin.com/in/maulana-irfan-bbb098209/">
              <span className="w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8"><FaLinkedin className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 lg:w-8 lg:h-8 "/></span>
          </a>
      </li>
      <li className="relative flex-1 ">
          <a className="flex items-center font-medium w-full  " target="blank" href="https://www.instagram.com/maw_lana08/">
              <span className="w-8 h-8  rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8"><FaInstagram className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 lg:w-8 lg:h-8 "/></span>
          </a>
      </li>
      <li className="relative flex-1 ">
          <a className="flex items-center font-medium w-full  " target="blank" href="https://twitter.com">
              <span className="w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8"><FaSquareXTwitter className="hover:fill-aquamarine-500 dark:hover:fill-aquamarine-500 dark:fill-slate-500 fill-slate-700 lg:w-8 lg:h-8 "/></span>
          </a>
      </li>
      </ol>
    </nav>
  );
}

export default Navbar;