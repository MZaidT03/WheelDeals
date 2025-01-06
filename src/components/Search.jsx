import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { RiSearch2Line } from "react-icons/ri";
import Data from "@/Shared/Data";

function Search() {
  const classes = "outline-none md:border-none w-full shadow-none text-lg";
  return (
    <div className="bg-white p-2 md:p-6 rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-full">
      <Select>
        <SelectTrigger className={classes}>
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Old">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator className="hidden md:block md:border" orientation="vertical" />
      <Select>
        <SelectTrigger className={classes}>
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.CarMakes.map((data, index) => (
            <SelectItem value={data.name}>{data.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator className="hidden md:block md:border" orientation="vertical" />

      <Select>
        <SelectTrigger className={classes}>
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.Pricing.map((data, index) => (
            <SelectItem value={data.amount}>{data.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <RiSearch2Line className=" hover:bg-[#006A67] text-[50px] p-3 text-white hover:scale-105 transition-all cursor-pointer bg-black rounded-full" />
      </div>
    </div>
  );
}

export default Search;
