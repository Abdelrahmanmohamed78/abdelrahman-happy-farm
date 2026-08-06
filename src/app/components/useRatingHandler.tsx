"use client";

function useRatingHandler(productRating: {
  fiveStars: number,
  fourStars: number,
  threeStars: number,
  twoStars: number,
  oneStars: number
}) {
  const totalRating =
    productRating.fiveStars +
    productRating.fourStars +
    productRating.threeStars +
    productRating.twoStars +
    productRating.oneStars;
  const avgRating =
    (productRating.fiveStars * 5 +
      productRating.fourStars * 4 +
      productRating.threeStars * 3 +
      productRating.twoStars * 2 +
      productRating.oneStars) /
    totalRating;
  return { totalRating, avgRating };
}

export default useRatingHandler;
