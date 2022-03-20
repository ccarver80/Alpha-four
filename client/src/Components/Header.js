import React from "react";

import search from "../Style/Imgs/search.png";
import file from '../Style/Imgs/Vector.png'; 
import calander from '../Style/Imgs/calander.png'
import dropDown from '../Style/Imgs/dropDown.png'
import profile from '../Style/Imgs/Profile.png'

function Header() {
  return (
    <>
      {/* =========Blue Bar ===================== */}
      <div className="w-screen flex h-[49px] bg-light-blue">
        <div className="mx-auto flex w-[585px] my-auto">
          <div className="flex my-auto bg-white rounded-xl w-[104.32px] h-[21px] text-center">
            <p className="mx-auto my-auto font-Roboto text-[9px] leading-[9px] tracking-[1.5px] text-dark-grey ">
              REGISTER NOW
            </p>
          </div>
          <div className="flex ml-[14.63px] font-Roboto text-[14px] text-white leading-[22px]">
            <p>
              Happy birthday, App Framework! How to build integrations with
              Contentful
            </p>
          </div>
        </div>
      </div>

      {/*========================Search Bar ============================ */}

      <div className="flex flex-row mt-1 h-12 ml-[120px]">
        {/* =============================Logo================== */}

        <div className=" mt-[12.64px] flex-row flex h-12">
          <h1 className="absolute font-Poppins my-auto text-lg tracking-[3.07162px]">
            NOTHING HELD BACK{" "}
          </h1>
          <p className="ml-[241px] mt-1 text-goldenrod w-[12.99px] h-[22px] font-Poppins text-[18px] leading-[120%] tracking-[3.07162px]">
            +
          </p>
          <rect className="absolute mt-[28px] bg-goldenrod w-[114.9px] h-0.5" />
        </div>

        {/* =============== Search bar  ==============================*/}
        <div className="ml-[49.39px] h-8 w-[380px] my-auto">
            <div className="bg-light-white flex w-[380px] h-8 rounded" >
              <img className="my-auto ml-2" alt="search icon" src={search} />
              <input className="bg-light-white w-full ml-3" placeholder="Search" />
            </div>
        </div>

        {/* ============ Buttons =================================== */}
        <div className="flex ml-7 h-12 w-[482px]">
          <button className="flex items-center w-[89px] h-6 my-auto border-[1px] border-blue-border rounded-[3px] font-Roboto text-[10px]">
                <p className="mx-auto text-blue-border">WE’RE HIRING!</p>
          </button>
          <button className="flex ml-6 w-20 h-6 my-auto bg-golden-button font-Roboto text-[10px]">
                <p className="mx-auto my-auto">NEED HELP?</p>
          </button>
          <button className="ml-[25px]">
            <img alt="file icon" src={file} />
          </button>
          <button className="ml-[27px] ">
            <img alt="calander icon" src={calander} />

         
          </button>   
          
          <div className="flex ml-6 justify-center w-[173.1px] h-12 ">
          <button className="flex font-Roboto text-[11.48px] ">
            
            <text className="flex my-auto">Welcome Back, Alen</text>
            
            
            <img className="flex w-[5.98px] h-[8.01px] my-auto ml-1" src={dropDown} />

           
            </button> 
            <img className="flex my-auto ml-[6px] w-8 h-8" src={profile}/>
          </div>

          {/* =================User Info=============================== */}

          

         
        </div>










      </div>
    </>
  );
}

export default Header;
