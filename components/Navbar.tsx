"use client"
import React, {useState } from "react";
import Image from "next/image";
import img from "../public/logo.svg";
import useScreenWidth from "@/Hooks/useScreenWidth";
import Links from "./Links";
import Buttom from "./Buttom";
import SideNavBar from "./SideNavBar";
import DropDown from "./DropDown";



export const Navbar = () => {
  const sidenav=useScreenWidth();
const[nav,setnav]=useState(false);
console.log(nav);
  return (
    <div
      className={`absolute top-0 w-[100%] h-[112px] text-center flex justify-between items-center px-20 pt-10 sm:h-[70px] text-white z-10 ${sidenav&&'pt-0 px-5'} `}>
      <div className="">
        <Image src={img} alt="logo/img" className=" " />
      </div>
    {!sidenav&&<Links/>}
      <div className="flex gap-4 ">
        <div>
        {!sidenav?<Buttom/>:<button onClick={()=>{setnav(!nav)}}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
{nav&&<SideNavBar/>}
</button>
}
        </div>
        <div className="py-2 capitalize">
          <DropDown/>
        </div>
      </div>
    </div>
  );
};
