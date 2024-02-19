import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Whatsapp from "../public/whatsapp.svg";
import linkedin from "../public/LinkedIn logo.svg";
import facebook from "../public/facebook.svg";
import email from "../public/email.svg";
import phone from "../public/phone.svg";

const Footer = () => {
  return (
    <div className="w-[100%] h-[316px] xl:w-[100%] xl:h-[316px] sm:h-[439px] bg-black flex flex-col items-center  justify-center">
      <div className="w-[1200px] h-[180px] xl:w-[696px] xl:h-[180px] flex justify-between sm:w-[312px] sm:h-[303px] sm:flex-wrap ">
        <div className="w-[600px] h-[91px] xl:w-[348px] sm:w-[312px] sm:h-[91px] flex flex-col sm:items-center sm:text-center">
          <div className="w-[72px] h-[64px]">
            <Image src={logo} alt="logo/img" />
          </div>
          <div className="w-[344px] h-[19px]">
            <p className=" capitalize opacity-[70%] text-white">
              We provide your needs
            </p>
          </div>
        </div>
        <div className="w-[600px] h-[180px] xl:w-[348px] sm:w-[312px]    flex">
          <div className="w-[300px] h-[180px]  xl:w-[174px] sm:w-[156px] text-white flex flex-col">
            <div className="w-[100%] h-[32px]">
              <p className="opacity-[70%]">Quick Links</p>
            </div>
            <div>
              <ul>
                <li>About us </li>
                <li>Why Us</li>
                <li>Clients</li>
                <li>Our Work</li>
              </ul>
            </div>
          </div>
          <div className="w-[300px] h-[180px] xl:w-[174px] sm:w-[156px] flex flex-col">
            <div className="w-[100%] h-[32px] ">
              <p className="opacity-[70%] text-white">Contact Us</p>
            </div>
            <div>
              <ul className="text-white">
                <li>
                  <div className="w-[100%] h-[32px]  flex gap-2 items-center text-white">
                    <div>
                      <Image src={phone} alt="phone/img" />
                    </div>
                    <div>
                      <p>+ 201028262616</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w-[100%] h-[32px]  flex gap-2 items-center text-white">
                    <div>
                      <Image src={email} alt="email/img" />
                    </div>
                    <div>
                      <p>Info@asdc.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w-[100%] h-[32px]  flex gap-2 items-center text-white">
                    <div>
                      <Image src={linkedin} alt="linkedin/img" />
                    </div>
                    <div>
                      <Image src={facebook} alt="facebook/img" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] h-[32px] xl:w-[696px] sm:w-[312px] ">
<p className="text-center text-white capitalize opacity-[70%]">@2024 ASDC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
