import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <div
      style={{ minHeight: "5rem" }}
      className="h-20 flex bg-primary items-center"
    >
      <Link href="#" passHref>
        <div className="flex cursor-pointer items-center justify-center h-full w-60 bg-white">
          <div className="mr-1 flex items-center">
            <Image
              src={logo}
              alt="logo"
              //  width={200} height={200}
            />
          </div>
          <div className="text-2xl font-normal">
            Term<span className="font-medium">Monitor</span>
          </div>
        </div>
      </Link>
      <div className="mx-12 flex-grow flex items-center">
        <div className="text-white text-3xl flex-grow">KEYWORDS</div>
        <div className="h-10 rounded-lg bg-white text-primary mr-5 flex items-center">
          <input
            type="text"
            name="submit1"
            id="submit1"
            className="mx-1 px-2 focus:ring-2 focus:ring-pink-800"
          />
          <button className="h-full pl-4 pr-2 rounded-r-lg flex items-center bg-white text-primary text-xs hover:text-white hover:bg-primary">
            SUBMIT{" "}
            <BsArrowRight className="ml-2" fontFamily="bold" fontSize="1rem" />
          </button>
        </div>
        <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center">
          A
        </div>
      </div>
    </div>
  );
}

export default Header;
