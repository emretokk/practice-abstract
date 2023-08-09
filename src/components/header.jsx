import React from "react";

export default function Header() {
  return (
    <header className="h-[88px] px-[30px] w-full bg-black flex">
      <div className="w-[30%] h-full flex items-center ml-20">
        <img
          src="src/assets/logo.svg"
          alt="logo"
          className=" w-[126px] h-8 hover:opacity-70 hover:cursor-pointer transition-opacity"
        />
        <a className=" border-l-2 border-white text-white text-2xl pl-4 mt-1 ml-2 hover:cursor-pointer hover:underline">
          Help Center
        </a>
      </div>
      <div className="w-[70%] h-full flex justify-end text-white text-2xl items-center">
        <button className="bg-opacity-10 bg-white border border-white rounded-lg py-[6px] px-[22px] h-[50px] w-[230px]">
          Submit a request
        </button>
        <button className="bg-blue h-[50px] w-[140px] rounded-lg ml-4 mr-20 hover:bg-white hover:text-black transition-colors">
          Sign in
        </button>
      </div>
    </header>
  );
}
