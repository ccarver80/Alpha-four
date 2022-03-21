import React from "react";
import Header from "./Header";

import dropDown from "../Style/Imgs/dropDownSideBar.png";

function Main() {
  return (
    <>
      <Header />
      {/* Main Container */}
      <div className="flex mx-auto w-[1200px]  h-[2108.59px] mt-6">
        {/* ==========Side Bar =========== */}
        <div className="flex flex-col w-[324px] h-[1312.04px]">
          <div className="flex flex-row shadow-xl  w-[324px] h-[432px] rounded-tr-[7px] rounded-bl-[3px] pt-[30px] pb-[30px] pl-[27px] pr-[27px] ">
            {/* 7 Day start card */}
            <div>
              <div className="flex flex-start mt-0 mr-[10px] w-[240px] h-[22px]">
                <h1 className="font-Inter text-lg ">7-Day Fast Start</h1>
                <img
                  className="flex my-auto ml-auto  w-3 h-[6px] "
                  src={dropDown}
                />
              </div>
              {/* Progress Bar */}
              <div className="flex flex-col mt-4">
                <div className=" w-full rounded-xl bg-progress-background">
                  <div className=" w-[20%] h-2  bg-progress-green rounded-xl "></div>
                </div>
                <text className=" font-sans mx-auto mt-2 text-xs">
                  20% Complete
                </text>
              </div>
              {/* List items */}
              <div className="flex flex-col items-start w-[248px] h-[285px] mt-[14px] mb-[14px]">
                <ul className="font-Roboto text-sm  ">
                  <li className=" mb-6 text-blue-border font-bold">
                    Day 1 | 7-Figure Math + AC Formula
                  </li>
                  <li className=" mb-6">Day 2 | Pick a market</li>
                  <li className=" mb-6">Day 3 | Your superpower</li>
                  <li className=" mb-6">Day 4 | Your disruptive idea</li>
                  <li className=" mb-6">Day 5 | Front end sales funnel</li>
                  <li className=" mb-6">Day 6 | Back end sales funnel</li>
                  <li className=" mb-6">Day 7 | Scaling your offer</li>
                </ul>
              </div>
            </div>

                 {/* Need Help? card  */}


          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
