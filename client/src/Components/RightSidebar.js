import React from "react";

import blackCheckmark from "../Style/Imgs/blackCheckmark.png";

function RightSidebar() {
  return (
    // Main Container
    <div className=" ml-9 w-[841px] h-[2108.59px]">
      {/* Youtube Video */}
      <div>
        <h1 className=" mt-2 font-sans font-medium text-2xl">
          Hey Alen, Welcome to your 7-Day Fast Start
        </h1>

        <iframe
          className=" mt-4"
          width="841"
          height="393"
          src="https://www.youtube.com/embed/bRbVsnFmrK4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/* Descrition of Video */}
      <div className="flex justify-between mt-2 border-b-[1px] border-gray-200">
        <div className=" text-gray-600 flex flex-col">
          <h2 className="font-Poppins text-lg text-blue-700">
            PUBG Mobile x Godzilla vs. Kong Trailer - Official Trailer
          </h2>
          <div className="mt-6 flex flex-row justify-between w-[184px]">
            <text className="  my-auto font-Roboto text-sm ">13,741 views</text>
            <text className="flex text-sm mb-2 font-normal "> . </text>
            <text className="my-auto text-sm ">May 11, 2021</text>
          </div>
        </div>

        <div className="flex flex-col">
          <button className="mt-0 mx-auto w-[165px] font-Roboto text-xs text-blue-500 font-bold h-[34px] rounded border-4 border-blue-500 ">
            Download Video
          </button>
          <text className="font-Roboto mx-auto mt-2 text-[7.9px]">
            File Format: MP4 | File Size: 852 MB
          </text>
        </div>
      </div>

      {/* Header for article */}
      <div className=" mt-4 flex flex-row justify-between">
        <div className="flex flex-col">
          <text className=" flex flex-row text-sm font-Roboto">
            Alen Sultanic{" "}
            <img
              className=" my-auto ml-2 w-[10.9px] h-[10.8px]"
              alt="Black check mark"
              src={blackCheckmark}
            />{" "}
          </text>
          <text className="font-Roboto text-xs text-gray-700 ">
            Nothing Held Back Coach
          </text>
        </div>

        <div className="font-Roboto text-xs h-[16] flex w-[559px] flex-row justify-between">
          <text className="">
            <strong>CALL TYPE:</strong> EXPERT TRAINING
          </text>
          <text>
            <strong>DATE OF CALL:</strong> MAY 12TH, 2021
          </text>
          <text>
            <strong>TIME OF CALL:</strong> 11:00 A.M. EST
          </text>
        </div>
      </div>

      {/* Article */}

      <div className=" mt-4 font-Roboto text-sm flex flex-col justify-start">
        <text className="tracking-[0.2px]">
          Godzilla, Kong, and Mechagodzilla arrive in PUBG Mobile's version 1.4
          update which also brings microcosm gameplay, a new vehicle, Hangar
          which is new arena map available beginning June 1, and more. Check out
          the trailer. Godzilla, Kong and Mechagodzilla join the Battle Royale
          as non-hostile characters that may bring Titan Crystals, destroy Apex
          Cybernetics and Monster Settlements and drop enhancement items in the
          Erangel, Sanhok and Livk maps respectively. The Version 1.4 update is
          available now.
        </text>
        <text>
            <a href="#" className=" mt-2 text-xs text-blue-700">Show more...</a>
        </text>
      </div>
    </div>
  );
}

export default RightSidebar;
