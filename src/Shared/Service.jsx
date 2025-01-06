function FormatResult(res) {
  const result = {}; // Use an object to group listings by `listingId`
  const finalResult = [];

  // Group data by `listingId`
  res.forEach((item) => {
    const listingId = item.carListing.id;

    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing,
        images: [],
      };
    }

    if (item.carImages) {
      result[listingId].images.push(item.carImages); // Push images to the array
    }
  });

  // Convert grouped object into an array
  Object.values(result).forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });

  return finalResult;
}

export default FormatResult;
