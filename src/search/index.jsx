import Header from "./../components/Header";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import FormatResult from "@/Shared/Service";
import CarItem from "./../components/CarItem";
import Search from "@/components/Search";

function SearchByOption() {
  const [searchParams] = useSearchParams();
  const cars = searchParams.get("cars");
  const make = searchParams.get("make");
  const price = searchParams.get("price");
  const [loading, setLoading] = useState(true);
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetCarList();
  }, [cars, make, price]);

  const GetCarList = async () => {
    try {
      setLoading(true);
      const result = await db
        .select()
        .from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(cars != undefined && eq(CarListing.condition, cars))
        .where(make != undefined && eq(CarListing.make, make));

      const resp = FormatResult(result);
      setCarList(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-10 bg-black flex justify-center">
        <Search />
      </div>
      <div>
        <div className="p-10 lg:p-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
            {loading ? (
              <div>Loading...</div>
            ) : (
              carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchByOption;
