import { useTranslations } from "next-intl";
import React from "react";

function WhyUs() {
  const t = useTranslations();
  return (
    <div className="relative w-full h-[655px] -mt-72 sm:-mt-56 xsm:-mt-36 sm:overflow-x-auto xl:overflow-x-auto  grid items-center  justify-items-center " id="whyus">
      <div className=" px-20  sm:px-10 py-28 w-[1200px]">
        <div className=" w-full h-[19px] ">
          <p className="opacity-[50%]">{t("why US")}</p>
        </div>
        <div className="sm:w-[300px]  h-[80px] ">
          <h1 className="sm:w-[400px] font-bold xlg:w-[600px] text-4xl sm:text-2xl xsm:text-2xl">
            {t("Here’s why people choose to work with ASDC")}
          </h1>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="w-[300px] h-[364] bg-white rounded p-6 shadow-lg">
            <div className=" flex flex-col items-start justify-between gap-5">
              <div className="w-[80px]  h-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold capitalize text-3xl w-[234px] h-[56px]">
                  {t("Expertise You Can Trust")}
                </h1>
              </div>
              <div>
                <p className="w-[274px] h-[140px] opacity-[70%] capitalize">
                  {t(
                    " Our team boasts expertise in a diverse range of programming languages development frameworks, and industry best practices. We stay ahead of the curve ensuring that yourprojects benefit from the latest technological advancements."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[364] bg-white rounded p-6 shadow-lg">
            <div className="  flex flex-col items-start justify-normal h-[328px] gap-5 w-full]">
              <div className="w-[80px]  h-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold capitalize text-3xl w-[218px] h-[56px]">
                  Client-Centric Approach
                </h1>
              </div>
              <div>
                <p className="w-[244px] h-[140px] opacity-[70%] capitalize">
                  our success is our priority. We collaborate closely with you,
                  understanding your goals, and tailoring our solutions to align
                  perfectly with your vision. Your satisfaction is not just a
                  goal; it's our commitment.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[364] bg-white rounded p-6 shadow-lg">
            <div className=" flex flex-col items-start justify-between gap-5">
              <div className="w-[80px]  h-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold capitalize text-3xl w-[234px] h-[60px] ">
                  Innovation at its Core
                </h1>
              </div>
              <div>
                <p className="w-[282px] h-[140px] opacity-[70%] capitalize">
                  nnovation is the heartbeat of our company. We don't just build
                  software; we create experiences. Our solutions are designed to
                  be intuitive, scalable, and future-ready, ensuring your
                  investment stands the test of time.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[390] bg-white rounded p-6 shadow-lg">
            <div className=" flex flex-col items-start justify-normal h-[328px] gap-5">
              <div className="w-[80px]  h-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold capitalize text-3xl w-[281px] h-[30px]">
                  Quality Assurance
                </h1>
              </div>
              <div>
                <p className="w-[250px] h-[140px] opacity-[70%] capitalize">
                  We believe in delivering nothing but excellence. Rigorous
                  testing, code reviews, and quality assurance processes are
                  embedded in our DNA. Your software will not just meet
                  expectations; it will exceed them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
