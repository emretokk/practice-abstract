import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Item(props) {
  return (
    <div className="h-[240px] w-[200px] md:w-[350px] xl:w-[600px] flex mb-80 sm:mb-16">
      <img src={props.img} className=" w-[88px] h-[88px]"></img>
      <div className="sm:ml-8 pr-4 flex flex-col ">
        <h1 className=" font-bold text-2xl mb-4">{props.h}</h1>
        <p className=" text-2xl mb-4">{props.text}</p>
        <a className="text-blue" href="#">
          Learn More <FaArrowRightLong className=" inline" size={8} />
        </a>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <main>
      <div className="bg-purple px-[30px] pt-[80px] pb-[115px] flex items-center justify-center">
        <div className="w-full h-fit flex flex-col items-center">
          <span className="text-[25px] sm:text-[40px] md:text-[76px] whitespace-nowrap">
            How can we help?
          </span>
          <form className="w-11/12 md:w-[720px] h-16 relative group">
            <input
              className="w-full h-full border border-black group-hover:border-blue group-focus:border-blue rounded px-4 text-xl transition-colors shadow-xl"
              type="text"
              placeholder="Search"
            />
            <FaArrowRightLong
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 group-hover:text-blue transition-colors"
            />
          </form>
        </div>
      </div>
      <div className="w-full h-fit flex items-center justify-center">
        <div
          id="items-container"
          className="w-full h-fit flex flex-wrap justify-center mt-56"
        >
          <Item
            img="src/assets/a1.png"
            h="Using Abstract"
            text="Abstract lets you manage, version, and document your designs in one place."
          />
          <Item
            img="src/assets/a2.png"
            h="Manage your account"
            text="Configure your account settings, such as your email, profile details, and password."
          />
          <Item
            img="src/assets/a3.png"
            h="Manage organizations, teams, and projects"
            text="Use Abstract organizations, teams, and projects to organize your people and your work."
          />
          <Item
            img="src/assets/a4.png"
            h="Manage billing"
            text="Change subscriptions and payment details."
          />
          <Item
            img="src/assets/a5.png"
            h="Authenticate to Abstract"
            text="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
          />
          <Item
            img="src/assets/a6.png"
            h="Abstract support"
            text="Get in touch with a human."
          />
        </div>
      </div>
    </main>
  );
}
