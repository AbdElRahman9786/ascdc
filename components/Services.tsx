import React from "react";
import Image from "next/image";
import pic1 from "../public/pic (1).png";
import pic2 from "../public/2.png";

function Services() {
  return (
    <div className="  bg-black mb-7 p-5 ">
      
        <div className=" p-5 mb-4">
          <h1 className="text-white text-center font-bold text-5xl ">
            our Services
          </h1>
          <p className="text-white text-center ">
            Empower your facility with our smart solutions & Elevate efficiency
          </p>
        </div>
        <div className="bg-white w-[90%] mx-auto rounded-md max-lg:bg-black max-lg:text-white">
          <div className=" flex flex-col max-lg:flex max-lg:flex-row">
            <div className=" flex items-center justify-center flex-wrap">
              <div className="basis-1/2 p-4 max-lg:basis-full ">
                <Image
                  src={pic2}
                  alt="pic/one"
                  className="w-full shadow-lg"
                />
              </div>
              <div className="  basis-1/2 p-5 max-lg:basis-full max-lg:p-2">
                <div className="">
                  <h1 className="font-bold t text-4xl max-lg:text-xl">
                    Innovative Facility Management Solutions
                  </h1>
                  <p className="font-bold text-lg mb-7">Custom Solutions for Unique Needs</p>
                </div>
                <div>
                  <p className="opacity-[70%]">
                    At ASDC , we specialize in delivering cutting-edge software
                    systems designed to streamline facility management
                    processes. Our tailored solutions are crafted to meet the
                    unique needs of your facility, providing a seamless and
                    efficient experience. team boasts expertise in a diverse
                    range of programming languages, development frameworks, and
                    industry best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center flex-wrap">
             
              <div className="  basis-1/2 p-5 max-lg:basis-full max-lg:p-2 max-md:order-2">
                <div className="">
                  <h1 className="font-bold t text-4xl max-lg:text-xl">
                    Innovative Facility Management Solutions
                  </h1>
                  <p className="font-bold text-lg mb-7">Custom Solutions for Unique Needs</p>
                </div>
                <div>
                  <p className="opacity-[70%]">
                    At ASDC , we specialize in delivering cutting-edge software
                    systems designed to streamline facility management
                    processes. Our tailored solutions are crafted to meet the
                    unique needs of your facility, providing a seamless and
                    efficient experience. team boasts expertise in a diverse
                    range of programming languages, development frameworks, and
                    industry best practices.
                  </p>
                </div>
              </div>
               <div className="basis-1/2 p-4 max-lg:basis-full max-md:order-1">
                <Image
                  src={pic1}
                  alt="pic/one"
                  className="w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default Services;
