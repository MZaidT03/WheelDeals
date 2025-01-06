import React, { useEffect } from "react";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";

import { Separator } from "./ui/separator";

function CarItem({ car }) {
  return (
    <div className="rounded-xl bg-white border hover:shadow-lg hover:shadow-[#172b2a] transition-all cursor-pointer mb-10">
      <h2 className="absolute m-2 bg-slate-200 px-2 rounded-full text-sm font-black">
        {car.condition}
      </h2>
      <img
        src={car.images[0].imageUrl}
        width="100%"
        className="rounded-t-xl h-[180px] object-cover"
        alt="Car"
      />
      <div className="p-4">
        <h2 className=" font-bold text-black text-lg mb-2">
          {car?.listingTitle}
        </h2>
        <Separator className="hidden md:block md:border" />
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car.mileage} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandSpeedtest className="text-lg mb-2" />
            <h2>{car.fuelType} </h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car.transmission} </h2>
          </div>
        </div>
        <Separator className="hidden md:block md:border my-2" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">$ {car.sellingPrice}</h2>

          <h2 className="font-black text-sm flex items-center gap-2">
            <MdOutlineOpenInNew />
            View Details
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
