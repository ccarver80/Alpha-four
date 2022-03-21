import React from "react";
import Header from "./Header";

import dropDown from '../Style/Imgs/dropDownSideBar.png'

function Main() {
    return (
        <>
        <Header />
        {/* Main Container */}
        <div className="flex mx-auto w-[1200px]  h-[2108.59px] mt-6">
                {/* ==========Side Bar =========== */}
                <div className="flex flex-col w-[324px] h-[1312.04px]">
                    <div className="flex flex-row shadow-sideBar w-[324px] h-[432px] rounded-tr-[7px] rounded-bl-[3px] pt-[30px] pb-[30px] pl-[27px] pr-[27px] ">
                        <div>

                            <div className="flex flex-start mt-0 mr-[10px] w-[240px] h-[22px]">
                                <h1 className="font-Inter text-lg ">7-Day Fast Start</h1>
                                <img className="flex my-auto ml-auto  w-3 h-[6px] " src={dropDown} />
                            </div>
                            
                            <div className="flex mt-4">
                                <div className=" w-full rounded-xl bg-progress-background">
                                    <div className=" w-[25%] h-2  bg-progress-green rounded-xl "> </div>   
                                </div>
                               
                            <label htmlFor=""
                            </div>
                            
                            
                            
                        </div>
                    </div>
                </div>

        </div>
        </>
    )
}

export default Main; 