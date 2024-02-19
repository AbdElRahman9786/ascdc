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
    <div className="w-[100%] h-auto">
      <div className="w-[100%] h-[100%] flex px-20 sm:px-3 py-[120px] justify-between gap-16 sm:flex-col sm:gap-0 sm:justify-center  ">
        <div className="w-[600px] h-[336px] pt-6 flex flex-col justify-between xl:text-center xsm:h-[463px]">
          <div className="w-[100%]">
            <h1 className="font-bold
             text-4xl w-[556px] h-[92px] sm:w-[397px] sm:text-2xl sm:text-center xsm:text-left">{t("Let's Build Something Extraordinary Together")}</h1>
          </div>
          <div className="h-[100px] opacity-[70%]">
            <p className="sm:text-center sm:w-[410px] capitalize sm:pr-10 xsm:w-[400px]xsm:text-sm xsm:w-[300px]">Embark on a journey of digital transformation with ASDC. Whether you have a specific project in mind or need guidance on where to start, we're here to help. Let's collaborate, innovate, and bring your ideas to life. Welcome to a world of limitless possibilities. Welcome to ASDC.</p>
          </div>
          <div className="w-[325px] h-[56px] flex items-center gap-16 sm:w-[80%] sm:items-center sm:justify-start sm:mt-9  xl:w-[100%] xl:items-center xl:justify-center xsm:w-[44%]">
            <div className="w-[136px] border-black  ">
            <button className="border px-4 py-2 rounded border-black">
            <Link href="/contactus"> {t("Contact us")} </Link>
          </button>
            </div>
            <div className="w-[182px] h-[50px]  ">
                <button className="bg-black text-white rounded-md px-4 py-4">{t("get a qoute now")}</button>
            </div>
          </div>
        </div>
        <div className={`${width&&'invisible h-0'}`}>
          <Image src={pic} alt="image" className={`w-[600px] h-[368px] rounded-md sm:w-[100%]  `}  />
        </div>
      </div>
    </div>
  );
}

export default Build;