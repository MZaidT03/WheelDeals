import Search from "./Search";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full text-center bg-[#eef0fc]">
        <h2 className="text-lg">Find cars for sale and for rent near you</h2>
        <h2 className=" text-[60px] font-bold">Find your dream car</h2>
        <Search />
        <img className="mt-1 w-[700px]" src="/bentley.png" alt="Bentley" />
      </div>
    </div>
  );
}

export default Hero;
