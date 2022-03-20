import React from "react";

import profile from "../Style/Imgs/portfolio.jpeg";

function Header() {
  return (
    <div className="static w-screen h-[161px] left-0 top-0 mt-[24px] mr-0">
      {/* Blue bar up top */}
      <div className="absolute w-screen h-[49px] left-0 top-0 bg-light-blue">
        <div className="absolute flex w-[104.32px] h-[21px] left-[427px] top-[13px] bg-white rounded-xl ">
          <p className="mx-auto my-auto font-Roboto text-[9px] text-dark-grey tracking-[1.5px] ">
            Register now
          </p>
        </div>
        <div className="absolute text-[14px] w-[466.05px] font-Roboto left-[545.95px] top-[14px] text-white">
          <p>
            Happy birthday, App Framework! How to build integrations with
            Contentful
          </p>
        </div>
      </div>
      {/* LOGO */}
      <div className="absolute w-[268.76px] h-[30.72px] left-[124.62px] top-[61.64px]">
        <h1 className="absolute font-Poppins text-[18px] tracking-[3.07162px] ">
          NOTHING HELD BACK
        </h1>
        <p className="absolute w-[12.99px] h-[22px] left-[245.62px] top-[4px] font-Poppins text-goldenrod">
          +
        </p>
        <div className="absolute w-[114.9px] h-[2px] top-[28px] bg-goldenrod"></div>
      </div>

      <div className="absolute flex w-[380px] h-[32px] rounded left-[428px] top-[61px] bg-light-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-[16px] w-[14.79px] my-auto ml-[9px] "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
