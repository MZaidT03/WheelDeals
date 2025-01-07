import { Button } from "@/components/ui/button.jsx";
import { storage } from "./../../../configs/firebase.Config.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CarImages } from "./../../../configs/schema.js";
import { db } from "./../../../configs";

function UploadImages({ triggerUploadImages, setLoader }) {
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(() => {
    if (triggerUploadImages) {
      UploadImagesToServer();
    }
  }, [triggerUploadImages]);
  async function UploadImagesToServer() {
    setLoader(true);

    await selectedFileList.forEach((file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "wheelDeals/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages,
            });
          });
        });
      setLoader(false);
    });
  }

  function onFileChange(event) {
    const files = event.target.files; // Use event.target.files instead of event.target.value
    const fileArray = Array.from(files); // Convert FileList to an array
    setSelectedFileList((prevData) => [...prevData, ...fileArray]); // Append files to the existing state
  }
  function onImageRemove(image, index) {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  }

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center">
        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              onClick={() => onImageRemove(image, index)}
              className=" absolute m-2 text-xl font-black bg-white p-.5 rounded-xl"
            />
            <img
              src={URL.createObjectURL(image)}
              className=" w-full h-[130px] object-cover rounded-xl"
              alt={`Uploaded ${index + 1}`}
            />
          </div>
        ))}
        {/* Upload button */}
        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted p-10 border-slate-500 bg-slate-300 hover:shadow-md hover:shadow-[#172b2a] transition-all cursor-pointer">
            <h2 className="text-center text-lg font-bold">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple
          onChange={onFileChange}
          id="upload-images"
          className="hidden"
        />
      </div>
    </div>
  );
}

export default UploadImages;
