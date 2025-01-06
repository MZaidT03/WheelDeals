import React, { useState } from "react";
import Header from "../components/Header";
import carDetails from "/Users/mzaidtahir/Downloads/WheelsDeal/WheelsDeal/src/Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "../components/ui/separator";
import Features from "/Users/mzaidtahir/Downloads/WheelsDeal/WheelsDeal/src/Shared/Features.json";
import CheckboxField from "./components/CheckboxField";
import { Button } from "./../components/ui/button";
import { db } from "./../../configs";
import { CarListing } from "./../../configs/schema.js";
import IconsField from "./components/IconsField";
import UploadImages from "./components/UploadImages.jsx";
import { LuLoader2 } from "react-icons/lu";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";

function AddListing() {
  const [formData, setFormData] = useState();
  const [featuresData, setFeaturesData] = useState();
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();

  function handleInputChange(name, value) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleFeatureChange(name, value) {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    setLoader(true);
    console.log(formData);
    console.log(featuresData);

    try {
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          features: featuresData,
          createdBy: user.primaryEmailAddress.emailAddress,
          postedOn: moment().format("DD/MM/YYYY"),
        })
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Data Saved");
        setTriggerUploadImages(result[0]?.id);
        setLoader(false);
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <div>
      <Header />
      {/* Car Details */}
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          <div>
            <h2 className="text-xl font-bold mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-1">
                    <IconsField icon={item?.icon} />
                    {item.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      handleInputChange={handleInputChange}
                      item={item}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textArea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {/* Features */}
          <Separator className=" mt-5 hidden md:block md:border" />
          <div>
            <h2 className="font-bold text-xl my-6">Features</h2>
            <div className=" grid grid-cols-2 md:grid-cols-3">
              {Features.Features.map((item, index) => (
                <div key={index}>
                  <CheckboxField
                    item={item}
                    handleChange={handleFeatureChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <Separator className=" mt-5 hidden md:block md:border" />
          {/* Car Images */}
          <UploadImages
            triggerUploadImages={triggerUploadImages}
            setLoader={(v) => {
              setLoader(v);
              navigate("/profile");
            }}
          />
          {/* Submit*/}
          <Separator className=" mt-5 hidden md:block md:border" />
          <div className="flex justify-end">
            <Button
              type="button"
              disabled={loader}
              onClick={(e) => onSubmit(e)}
              className="text-white rounded-xl mt-6"
            >
              {!loader ? (
                "Submit"
              ) : (
                <LuLoader2 className="animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
