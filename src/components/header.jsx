import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

export default function Header() {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  let myHeader;
  if (!searchBarActive) {
    myHeader = (
      <header
        className={`${
          hamburgerMenuActive ? "bg-gray" : "bg-black"
        } h-[88px] px-[30px] w-full flex`}
      >
        <div className="w-[30%] h-full flex items-center md:ml-20">
          <img
            src="src/assets/logo.svg"
            alt="logo"
            className="w-[126px] h-8 hover:opacity-70 hover:cursor-pointer transition-opacity"
          />
          <a className=" border-l-2 border-white text-white md:text-2xl pl-4 mt-1 ml-2 hover:cursor-pointer hover:underline whitespace-nowrap">
            Help Center
          </a>
        </div>
        <div className="w-[70%] h-full hidden xl:flex justify-end text-white text-2xl items-center">
          <button className="bg-opacity-10 bg-white border border-white rounded-lg py-[6px] px-[22px] h-[50px] w-[230px]">
            Submit a request
          </button>
          <button className="bg-blue h-[50px] w-[140px] rounded-lg ml-4 mr-20 hover:bg-white hover:text-black transition-colors">
            Sign in
          </button>
        </div>
        <div
          id="hamburger menu"
          className="w-full flex xl:hidden justify-end items-center space-x-4"
        >
          <button
            id="searchButton"
            onClick={() => {
              setSearchBarActive(true);
            }}
          >
            <FaSearch className="text-white w-5 h-5 hover:w-6 hover:h-6 transition-all" />
          </button>
          <button
            id="hamburger lines"
            className="w-[24px] h-fit transition-all"
            onClick={() => {
              setHamburgerMenuActive(!hamburgerMenuActive);
            }}
          >
            <div
              className={`${
                !hamburgerMenuActive ? "flex flex-col space-y-1" : "hidden"
              }`}
            >
              <span className="w-full h-[2px] bg-white"></span>
              <span className="w-full h-[2px] bg-white"></span>
              <span className="w-full h-[2px] bg-white"></span>
            </div>
            <div className={`${hamburgerMenuActive ? "relative" : "hidden"}`}>
              <span className="absolute left-0 w-full h-[2px] rotate-45 bg-white"></span>
              <span className="absolute left-0 w-full h-[2px] -rotate-45 bg-white"></span>
            </div>
          </button>
        </div>
        <div
          id="topBar"
          className={`${
            hamburgerMenuActive
              ? "absolute flex justify-center left-0 top-[88px] w-full h-[180px] bg-gray border-t border-white border-opacity-50 text-white"
              : "hidden"
          }`}
        >
          <div className="flex flex-col w-1/2 justify-center items-center gap-4">
            <a
              href="#"
              className="hover:no-underline hover:opacity-50 transition-opacity text-xl"
            >
              Submit a request
            </a>
            <span className="w-full h-[1px] bg-white bg-opacity-50"></span>
            <a
              href="#"
              className="hover:no-underline hover:opacity-50 transition-opacity text-xl"
            >
              Sign in
            </a>
          </div>
        </div>
      </header>
    );
  } else {
    myHeader = (
      <header className="h-[88px] px-[30px] w-full bg-white flex justify-center items-center">
        <form className=" w-10/12 h-3/6 ">
          <input
            type="text"
            className="w-full px-4 py-4 rounded h-full border border-black"
            placeholder="Search"
          />
        </form>
        <button
          className="w-7 h-7 ml-4"
          onClick={() => {
            setSearchBarActive(false);
          }}
        >
          <RiCloseFill className="h-6 w-6 hover:h-7 hover:w-7 transition-all" />
        </button>
      </header>
    );
  }

  return myHeader;
}
