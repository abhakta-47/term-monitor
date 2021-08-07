import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <div className="h-24 flex bg-primary items-center">
      <Link href="#">
        <div className="flex cursor-pointer items-center h-full w-60 bg-white">
          <div>
            <Image
              src={logo}
              alt="logo"
              //  width={200} height={200}
            />
          </div>
          <div className="text-2xl font-normal">
            Term<span className="font-semibold">Monitor</span>
          </div>
        </div>
      </Link>
      <div className="mx-12 flex-grow flex items-center">
        <div className="text-white text-3xl flex-grow">KEYWORDS</div>
        <div className="h-10 rounded-lg bg-white text-primary mr-5 flex items-center">
          <input type="text" name="submit1" id="submit1" />
          <button className="h-100 pl-4 rounded-r-2 flex items-center bg-white text-primary text-xs hover:text-white hover:bg-primary">
            SUBMIT <BsArrowRight fontFamily="bold" fontSize="1rem" />
          </button>
        </div>
        <div className="h-8 w-8 rounded-full bg-white text-primary flex items-center justify-center">
          A
        </div>
      </div>
    </div>
  );
}

export default Header;
