import React, { useState } from "react";
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
import { Link } from "react-router";

function Search() {
  const [car, setCar] = useState();
  const [make, setMake] = useState();
  const [price, setPrice] = useState();

  const classes = "outline-none md:border-none w-full shadow-none text-lg";
  return (
    <div className="bg-white p-2 md:p-6 rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-full">
      <Select onValueChange={(value) => setCar(value)}>
        <SelectTrigger className={classes}>
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Old">Old</SelectItem>
          <SelectItem value="Certified Pro-owned">
            Certified Pro-owned
          </SelectItem>
        </SelectContent>
      </Select>
      <Separator className="hidden md:block md:border" orientation="vertical" />
      <Select onValueChange={(value) => setMake(value)}>
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

      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className={classes}>
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.Pricing.map((data, index) => (
            <SelectItem value={data.amount}>{data.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Link to={"/search?cars=" + car + "&make=" + make + "&price=" + price}>
        <RiSearch2Line className=" hover:bg-[#006A67] text-[50px] p-3 text-white hover:scale-105 transition-all cursor-pointer bg-black rounded-full" />
      </Link>
    </div>
  );
}

export default Search;
