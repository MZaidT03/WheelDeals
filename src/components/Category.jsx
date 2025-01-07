import Data from "@/Shared/Data";
import React from "react";
import { Link } from "react-router";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:md:grid-cols-8 gap-6 px-20 ">
        {Data.Category.map((data, index) => (
          <Link to={"/search/" + data.category}>
            <div className="border rounded-xl p-3 items-center flex flex-col hover:shadow-lg hover:shadow-[#172b2a] transition-all cursor-pointer">
              <img src={data.icon} width={40} height={40} />
              <h2 className="mt-2 text-center">{data.category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
