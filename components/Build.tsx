"use client"

import Image from "next/image";
import pic from "../public/pic.png";
import Link from "next/link";
import useScreenWidth from "@/Hooks/useScreenWidth";
import { useTranslations } from "next-intl";

function Build() {
  const width=useScreenWidth();
  const t=useTranslations();
  return (
    
      <div className=" flex px-20 justify-between  mt-20 flex-wrap max-md:px-4 max-md:gap-10 max-md:justify-center mb-20 overflow-hidden ">
        <div className="pt-6 flex flex-col justify-between basis-1/3 max-xl:basis-full max-xl:items-center max-md:basis-full gap-6 max-md:items-center max-md:text-center ">
          <div className="">
            <h1 className="font-bold
             text-4xl max-md:text-2xl">{t("Let's Build Something Extraordinary Together")}</h1>
          </div>
          <div className=" ">
            <p className="capitalize " data-aos="fade-left">{t("build_description")}</p>
          </div>
          <div className=" flex items-center gap-3 ">
            <div className="   ">
            <button className="border px-4 py-2 rounded border-black   hover:bg-black hover:text-white duration-300">
            <Link href="/contactus"> {t("Contact us")} </Link>
          </button>
            </div>
            <div className="  ">
                <button className="bg-black text-white rounded px-4 py-2  hover:text-black hover:bg-white duration-300">{t("get a qoute now")}</button>
            </div>
          </div>
        </div>
        <div className="max-md:hidden basis-1/2 max-xl:basis-full " data-aos='fade-right'>
          <Image src={pic} alt="image" className= "rounded-md w-full max-xl:mt-5"  />
        </div>
      </div>
  
  );
}

export default Build;