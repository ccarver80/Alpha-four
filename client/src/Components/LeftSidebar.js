import React from "react";

import dropDown from "../Style/Imgs/dropDownSideBar.png";
import profile from "../Style/Imgs/portfolioSidebar.png";
import GreenChat from "../Style/Imgs/GreenChat.png";
import chatBubble from "../Style/Imgs/chatBubble.png";
import checkMark from "../Style/Imgs/checkMark.png"
import blueDot from "../Style/Imgs/blueDot.png"
import arrowRight from "../Style/Imgs/arrowRight.png"

function Main() {
  return (
    <>
      
      
        {/* ==========Side Bar =========== */}
        <div className="flex  flex-col w-[324px] h-[1312.04px]">
          {/* 7 Day start card */}
          <div className="flex flex-row shadow-xl  w-[324px] h-[432px] rounded-tr-[7px] rounded-bl-[3px] pt-[30px] pb-[30px] pl-[27px] pr-[27px] ">
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
                  <li className="flex mb-6 text-blue-border font-bold">
                    <img className=" w-2 h-2 my-auto mr-4" src={blueDot} />Day 1 | 7-Figure Math + AC Formula
                  </li>
                  <li className="flex mb-6">
                  <img className="my-auto mr-4" alt="Arrow right" src={arrowRight} />Day 2 | Pick a market</li>
                  <li className="flex my-auto mb-6">
                  <img className="my-auto mr-4" alt="Arrow right" src={arrowRight} />Day 3 | Your superpower</li>
                  <li className="flex mb-6">
                  <img className="my-auto mr-4" alt="Arrow right" src={arrowRight} />Day 4 | Your disruptive idea</li>
                  <li className="flex mb-6">
                  <img className="my-auto mr-4" alt="Arrow right" src={arrowRight} />Day 5 | Front end sales funnel</li>
                  <li className="flex mb-6">
                  <img className="my-auto mr-4" alt="Arrow right" src={arrowRight} />Day 6 | Back end sales funnel</li>
                  <li className="flex mb-6">
                  <img className="my-auto mr-4" alt="Arrow right" src={arrowRight} />Day 7 | Scaling your offer</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Need Help? card  */}

          <div className="flex w-[323px] h-[388px] shadow-xl mt-8">
            <div className="flex my-auto mx-auto">
              {/* Content */}
              <div className=" relative flex flex-col ">
                <div className=" tracking mb-3 flex text-2xl mx-auto border-b-2 border-goldenrod">
                  <h1>Need Help?</h1>
                </div>
                <div className=" items-center w-[126px] h-[126px]">
                  <img
                    className="absolute ml-8 left-[88px] top-[140px]"
                    src={GreenChat}
                  />
                  <img className="ml-8" src={profile} />
                  <img
                    className="absolute ml-8 left-[97px] top-[149px]"
                    src={chatBubble}
                  />
                </div>

                <div className="flex mx-auto mt-3">
                  <img className=" w-3 h-3 mr-1 my-auto" src={GreenChat} />
                  <text className="font-Roboto my-auto text-[7.475px] font-medium ">
                    AVAILABLE
                  </text>
                </div>

                <div className=" flex flex-col   mt-3">
                  <h1 className="mx-auto font-Inter font-extrabold">
                    Alen Sulfuric
                  </h1>
                  <h2 className="mx-auto text-center text-gray-500 font-sans w-[121px] leading-[13px] text-[9.8px]">
                    Motivational Speaker & Influence Expert
                  </h2>
                </div>
                <div className="flex">
                  <img
                    className="absolute mt-[26px] ml-[30.62px] "
                    src={chatBubble}
                  />
                  <button className="font-Inter text-sm text-center text-white w-[189px] h-[44px]  mt-3 bg-green-600">
                    Chat With Us
                  </button>
                </div>

                <div className="flex w-full mt-3 ">
                  <text className="mx-auto font-Roboto text-xs ">
                    Or Call Us at{" "}
                    <a className="text-blue-900" href="tel:+18004442041">
                      +1 (800) 444 2041
                    </a>
                  </text>
                </div>
              </div>
            </div>
          </div>

              {/* NHB Card */}

              <div className="flex flex-col mt-8 shadow-xl w-[319px] h-[431.65px]">
                  <div className=" ml-10 mt-7 font-Poppins flex flex-row text-[40px]">
                    <h1 className="tracking-[5.81px]">NHB<text className=" text-goldenrod">+</text></h1>
                    <rect className="absolute mt-14 bg-goldenrod w-[94px] h-[2px]"></rect>
                  </div>

                  <div className="ml-10 mt-[18px] text-lg w-[207px] text-gray-600 font-normal">
                    <h2>Want Our Help Getting 100+ Sales Per Day?</h2>
                  </div>

                  <div className="font-Roboto text-[12px] ml-10 mt-5">
                    <ul>
                      <li className="flex mb-4"><img className=" w-4 h-4 mr-2"  alt="check mark" src={checkMark}/>What you get when you join</li>
                      <li className="flex mb-4"><img className=" w-4 h-4 mr-2"  alt="check mark" src={checkMark}/>Weekly group coaching calls with us </li>
                      <li className="flex mb-4"><img className=" w-4 h-4 mr-2"  alt="check mark" src={checkMark}/>Entire Automatic Clients course </li>
                      <li className="flex mb-4"><img className=" w-4 h-4 mr-2"  alt="check mark" src={checkMark}/>All templates, scripts, sales funnels, etc</li>
                      <li className="flex mb-4"><img className=" w-4 h-4 mr-2"  alt="check mark" src={checkMark}/>Emails & SMS sequences, etc</li>
                    </ul>
                  </div>

                  <button className=" mx-auto w-[239px] h-[42px] font-Roboto font-bold text-white text-base text-center bg-blue-600">
                    Chat With Us
                  </button>

                  <text className="mx-auto mt-2 text-xs">Price Increase soon.</text>
                  
              </div>
        </div>
      
    </>
  );
}

export default Main;
