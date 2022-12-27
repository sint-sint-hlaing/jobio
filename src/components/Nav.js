import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className=" bg-green-500 text-white h-[100px] w-full flex flex-row justify-between items-center
     px-3 lg:px-10 cursor-pointer text-lg gap-2 sticky top-0 z-10"
    >
      <div className=" mr-2 lg:hidden" onClick={() => setOpen(true)}>
        <RxHamburgerMenu size="30" className=" hover:text-green-600" />
      </div>
      <div
        className={
          open
            ? "translate-x-0 absolute top-0 left-0 duration-300 ease-in z-50 w-2/3 h-screen lg:w-auto lg:h-auto flex flex-col justify-center items-center gap-5 bg-green-500 lg:bg-transparent lg:flex-row lg:gap-5 lg:relative flex-1 lg:justify-start"
            : "-translate-x-full duration-300 ease-in absolute top-0 left-0 w-2/3 h-screen lg:w-auto lg:h-auto  lg:translate-x-0 flex-1 flex flex-col justify-center items-center gap-5 lg:relative lg:flex-row lg:justify-start lg:gap-5 bg-green-500 lg:bg-transparent"
        }
      >
        <span
          onClick={() => setOpen(false)}
          className=" absolute top-0 right-0 p-5 lg:hidden"
        >
          <IoClose size="30" className="text-white hover:text-green-600" />
        </span>
        <Link to="/">
          <span className=" hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
            Home
          </span>
        </Link>
        <span className=" hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
          Employers
        </span>
        <span className=" hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
          Candidates
        </span>
        <span className=" hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
          Blog
        </span>
        <Link to="/jobs">
          <span className=" hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
            Jobs
          </span>
        </Link>
        <span className=" md:hidden hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
          SignUp
        </span>
        <span className=" md:hidden hover:bg-green-400 w-full text-center py-2 duration-300 ease-linear hover:lg:bg-transparent lg:w-auto">
          Login
        </span>
      </div>
      <div className="flex flex-1  lg:justify-center items-center gap-3">
        <Link to="/">
          <span className=" font-bold text-2xl">Jobio</span>
        </Link>
      </div>
      <div className=" flex flex-1 justify-end items-center gap-5">
        <Link to="jobs/new">
          <button
            className=" rounded-full lg:rounded-none h-12 w-12 lg:w-auto border-2 border-white max-w-40 px-3 hover:bg-white hover:text-green-600 transition duration-300 ease-in flex flex-row justify-center
         items-center"
          >
            <IoMdAdd size="25" />{" "}
            <span className=" hidden lg:inline-block "> Post A Job</span>
          </button>
        </Link>
        <span className=" hidden md:block">SignUp</span>
        <span className=" hidden md:block">Login</span>
      </div>
      <div
        className={
          open
            ? " w-screen h-screen bg-gray-700 opacity-50 absolute top-0 left-0 lg:hidden"
            : "hidden"
        }
      >
        he
      </div>
    </div>
  );
};

export default Nav;
