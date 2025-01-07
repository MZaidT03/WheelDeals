import FakeData from "@/Shared/FakeData";
import { CarImages, CarListing } from "./../../configs/schema";
import { db } from "./../../configs";
import React, { useEffect, useState } from "react";
import { desc, eq } from "drizzle-orm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import FormatResult from "./../Shared/Service";
import CarItem from "./CarItem";

function MostSearchCar() {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    GetPopularCarList();
  });

  const GetPopularCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .limit(10);

    const resp = FormatResult(result);
    console.log(resp);
    setCarList(resp);
  };
  return (
    <div className="mx-24 mb-10">
      <h2 className="font-bold text-3xl text-center mt-16 mb-6">
        Most Searched Car
      </h2>
      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <CarItem car={car} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchCar;
