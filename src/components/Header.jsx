import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

function Header() {
  const { user, isSignedIn } = useUser();
  const classesLi =
    "font-medium hover:scale-105 transition-all cursor-pointer hover:text-[#006A67]";
  return (
    <div className="flex justify-between items-center shadow-sm p-5 bg-white">
      <Link to="/">
        <h1 className="font-black">WheelsDeal</h1>
      </Link>
      <ul className="hidden md:flex gap-16">
        <li className={classesLi}>Home</li>
        <li className={classesLi}>Search</li>
        <li className={classesLi}>New</li>
        <li className={classesLi}>Pre-owned</li>
      </ul>
      {isSignedIn ? (
        <div className="flex gap-6 items-center">
          <UserButton />
          <Link to="/profile">
            <Button className=" text-white hover:bg-[#006A67] rounded-xl ">
              Profile
            </Button>
          </Link>
        </div>
      ) : (
        <SignInButton>
          <button className="text-white  hover:bg-[#006A67]">Sign In</button>
        </SignInButton>
      )}
    </div>
  );
}

export default Header;
