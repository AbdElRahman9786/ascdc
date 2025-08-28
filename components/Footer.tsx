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
    <div className=" bg-[#212121] p-20 max-lg:p-3 max-lg:py-20">
      <div className="flex justify-between gap-6 w-[80%] mx-auto mb-10 flex-wrap">
       
          <div className="basis-1/3">
            <Image src={logo} alt="logo/img" />
             <p className=" capitalize opacity-[70%] text-white">
              We provide your needs
            </p>
          </div>
          
           
          
        
        
          <div className=" text-white flex flex-col">
            <div className="">
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
          <div className=" flex flex-col">
            <div className=" ">
              <p className="opacity-[70%] text-white">Contact Us</p>
            </div>
            <div>
              <ul className="text-white">
                <li>
                  <div className="  flex gap-2 items-center text-white">
                    <div>
                      <Image src={phone} alt="phone/img" />
                    </div>
                    <div>
                      <p>+ 201028262616</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="  flex gap-2 items-center text-white">
                    <div>
                      <Image src={email} alt="email/img" />
                    </div>
                    <div>
                      <p>Info@asdc.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="  flex gap-2 items-center text-white">
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
      <div className=" ">
<p className="text-center text-white capitalize opacity-[70%]">@2024 ASDC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
