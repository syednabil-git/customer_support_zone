import React from "react";
import BgImg from "../../assets/Group 1.png";
import BgImg2 from "../../assets/vector1.png";

const Cover = ({inProgressCount,resolvedTasks}) => {
  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-center mt-20 gap-2 p-2">

    
      <div className="w-[580px] h-[210px] relative flex items-center justify-center rounded-xl overflow-hidden">
      
        <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>

       
        <img
          src={BgImg2}
          alt="Left"
          className="absolute left-0 h-full object-contain"
        />

   
        <img
          src={BgImg}
          alt="Right"
          className="absolute right-0 h-full object-contain"
        />


        <div className="relative font-bold text-white text-center">
          <h1 className="text-xl">In-Progress</h1>
          <p className="text-lg">{inProgressCount}</p>
        </div>
      </div>

      <div className="w-[580px] h-[210px] relative flex items-center justify-center rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]"></div>

        <img
          src={BgImg2}
          alt="Left"
          className="absolute left-0 h-full object-contain"
        />
        <img
          src={BgImg}
          alt="Right"
          className="absolute right-0 h-full object-contain"
        />

        <div className="relative font-bold text-white text-center">
          <h1 className="text-xl">Resolved</h1>
          <p className="text-lg">{resolvedTasks.length}</p>
        </div>
      </div>

    </div>
  );
};

export default Cover;
