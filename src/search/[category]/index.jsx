import React, { useEffect, useState } from "react";
import Header from "./../../components/Header";
import Search from "./../../components/Search";
import { useParams } from "react-router";
import { db } from "./../../../configs";
import { eq } from "drizzle-orm";
import { CarImages, CarListing } from "./../../../configs/schema";
import FormatResult from "@/Shared/Service";
import CarItem from "./../../components/CarItem";

function SearchByCategory() {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetCarList();
  }, [category]); // Add dependency array with category

  const GetCarList = async () => {
    try {
      setLoading(true);
      const result = await db
        .select()
        .from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.category, category));

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
      <div className="p-10 lg:p-20">
        <h1 className="font-bold text-4xl ">{category}</h1>
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
  );
}

export default SearchByCategory;
