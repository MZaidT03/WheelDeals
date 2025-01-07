import { Button } from "@/components/ui/button";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import FormatResult from "./../../Shared/Service";
import CarItem from "./../../components/CarItem";

function MyListing() {
  const { user, isLoaded } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        console.log(
          "User is logged in:",
          user.primaryEmailAddress?.emailAddress
        );
        GetUserCarListing();
      } else {
        console.log("User not found or not logged in.");
      }
    }
  }, [isLoaded, user]);

  async function GetUserCarListing() {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.createdBy, user.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id));

      // Format the result
      const formattedResult = FormatResult(result);

      console.log("Formatted result:", formattedResult);
      setCarList(formattedResult);
    } catch (e) {
      console.log("Error fetching listings:", e);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to="/add-listing">
          <Button className="text-white rounded-xl hover:bg-[#006A67] hover:shadow-xl">
            + ADD New Listing
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7">
        {carList.map((item, index) => {
          return (
            <div key={index}>
              <CarItem car={item} />
              <div className=" p-2 rounded-lg flex flex-row justify-between ">
                <Link to={"/add-listing?mode=edit&id=" + item?.id}>
                  <Button
                    variant="ghost"
                    className="w-full hover:bg-slate-200 rounded-xl"
                  >
                    Edit
                  </Button>
                </Link>
                <Link>
                  <Button className=" bg-red-600 text-white rounded-xl">
                    Delete
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyListing;
