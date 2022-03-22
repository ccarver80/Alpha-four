import React from "react";

function RightSidebar() {
    return (

        // Main Container 
        <div className=" ml-9 w-[841px] h-[2108.59px]">
            {/* Youtube Video */}
            <div>
                <h1 className=" mt-2 font-sans font-medium text-2xl">Hey Alen, Welcome to your 7-Day Fast Start</h1>

                <iframe className=" mt-4" width="841" height="393" src="https://www.youtube.com/embed/bRbVsnFmrK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default RightSidebar; 