import React from "react";
import Image from "next/image";
import pic1 from "../public/pic (1).png";
import pic2 from "../public/2.png";

function Services() {
  return (
    <div className="w-[100%] h-[1220px] bg-black  ">
      <div className="flex flex-col items-center justify-evenly h-[100%]">
        <div className=" w-[1200px] h-[56px] sm:w-[269px] sm:h-[38px]">
          <h1 className="text-white text-center font-bold text-5xl sm:text-2xl">
            our Services
          </h1>
          <p className="text-white text-center ">
            Empower your facility with our smart solutions & Elevate efficiency
          </p>
        </div>
        <div className="bg-white sm:bg-black xl:bg-black w-[1200px] h-[892px] p-8 rounded-md sm:w-[360px] sm:h-[790px] sm:text-white xl:text-white xl:w-[696px] xl:h-[517px]">
          <div className=" lg:flex sm:grid sm:grid-cols-2 xl:flex">
            <div className=" flex w-[1136px] h-[464px] sm:w-[140px] sm:h-[616px]  justify-center  sm:flex-col  xl:flex-col xl:w-[336px] xl:h-[517px]">
              <div className="w-[545px] h-[364px] sm:w-[140px] sm:h-[616px]">
                <Image
                  src={pic2}
                  alt="pic/one"
                  className="w-[100%] h-[100%] sm:w-[140px] sm:h-[102px] xl:w-[336px] xl:h-[225px]"
                />
              </div>
              <div className="w-[559px] h-[464px] p-6 flex flex-col items-start justify-start gap-6 sm:w-[140px] sm:h-[490px] xl:w-[336px] xl:h-[268px]">
                <div>
                  <h1 className="font-bold t text-3xl sm:text-xl">
                    Innovative Facility Management Solutions
                  </h1>
                  <p>Custom Solutions for Unique Needs</p>
                </div>
                <div>
                  <p className="opacity-[70%]">
                    At ASDC , we specialize in delivering cutting-edge software
                    systems designed to streamline facility management
                    processes. Our tailored solutions are crafted to meet the
                    unique needs of your facility, providing a seamless and
                    efficient experience. team boasts expertise in a diverse
                    range of programming languages, development frameworks, and
                    industry best practices.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex w-[1136px] h-[464px]  justify-center flex-row-reverse sm:flex-col sm:w-[140px] sm:h-[616px] xl:flex-col xl:w-[336px] xl:h-[517px] ">
              <div className="w-[545px] h-[364px] sm:w-[140px] sm:h-[616px]">
                <Image
                  src={pic1}
                  alt="pic/one"
                  className="w-[100%] h-[100%] sm:w-[140px] sm:h-[102px] xl:w-[336px] xl:h-[225px]"
                />
              </div>
              <div className="w-[559px] h-[464px] p-6 flex flex-col items-start justify-start gap-6 sm:w-[140px] sm:h-[490px] xl:w-[336px] xl:h-[268px]">
                <div className="">
                  <h1 className="font-bold t text-3xl capitalize sm:text-xl">
                    Facility Workforce Management App
                  </h1>
                  <p>Empower Your Team with Technology</p>
                </div>
                <div>
                  <p className="opacity-[70%] ">
                    Revolutionize the way you manage your facility workforce
                    with our intuitive and feature-rich app. From scheduling and
                    task assignment to performance tracking and real-time
                    communication, our app is your comprehensive solution for
                    workforce optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
