"use client";

import { FaRegStar, FaStar } from "react-icons/fa";
import useRatingHandler from "./useRatingHandler";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import ProductCard from "./ProductCard";
import { ProductProps } from "../types/types";

function CustomerReviewSection({ productDetails }: {productDetails: ProductProps}) {
  const products = useSelector((state: RootState) => state.products);
  const { totalRating, avgRating } = useRatingHandler(productDetails.review);
  const [userRating, setUserRating] = useState(0);

  return (
    <section className="customer-review main-container py-20 bg-second-color">
      <h3 className="mb-5 text-[27px] font-semibold">Customer Reviews</h3>
      <div className="flex flex-col lg:flex-row gap-7.5 justify-start">
        <div className="rating-box grow">
          <div className="rating-num text-center">
            <h3 className="text-6xl font-bold">{totalRating > 0 ? Math.round(avgRating) : 0}</h3>
            <ul className="flex gap-1 my-2.5 justify-center">
              {new Array(5).fill("1").map((el, i) => {
                if (Math.round(avgRating) >= i + 1) {
                  return (
                    <li key={i} className="text-xl text-star-color">
                      <FaStar />
                    </li>
                  );
                } else {
                  return (
                    <li key={i} className="text-xl text-hover-color">
                      <FaRegStar />
                    </li>
                  );
                }
              })}
            </ul>
            <span className="font-semibold text-hover-color">
              {totalRating} reviews
            </span>
            <ul className="rating-progress flex flex-col gap-2.5">
              <li className="flex items-center gap-5">
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                </ul>
                <div className="progress-holder relative rounded-[50px] grow h-2.5 bg-border-color overflow-hidden">
                  <span
                    style={{
                      width: `${(productDetails.review.fiveStars / totalRating) * 100}%`,
                    }}
                    className={`absolute top-[50%] left-0 translate-y-[-50%] bg-second-bg h-full`}
                  ></span>
                </div>
                <span className="font-semibold text-hover-color text-lg">
                  {productDetails.review.fiveStars}
                </span>
              </li>
              <li className="flex items-center gap-5">
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                </ul>
                <div className="progress-holder relative rounded-[50px] grow h-2.5 bg-border-color overflow-hidden">
                  <span
                    style={{
                      width: `${(productDetails.review.fourStars / totalRating) * 100}%`,
                    }}
                    className="absolute top-[50%] left-0 translate-y-[-50%] bg-second-bg h-full"
                  ></span>
                </div>
                <span className="font-semibold text-hover-color text-lg">
                  {productDetails.review.fourStars}
                </span>
              </li>
              <li className="flex items-center gap-5">
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                </ul>
                <div className="progress-holder relative rounded-[50px] grow h-2.5 bg-border-color overflow-hidden">
                  <span
                    style={{
                      width: `${(productDetails.review.threeStars / totalRating) * 100}%`,
                    }}
                    className="absolute top-[50%] left-0 translate-y-[-50%] bg-second-bg h-full"
                  ></span>
                </div>
                <span className="font-semibold text-hover-color text-lg">
                  {productDetails.review.threeStars}
                </span>
              </li>
              <li className="flex items-center gap-5">
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                </ul>
                <div className="progress-holder relative rounded-[50px] grow h-2.5 bg-border-color overflow-hidden">
                  <span
                    style={{
                      width: `${(productDetails.review.twoStars / totalRating) * 100}%`,
                    }}
                    className="absolute top-[50%] left-0 translate-y-[-50%] bg-second-bg h-full"
                  ></span>
                </div>
                <span className="font-semibold text-hover-color text-lg">
                  {productDetails.review.twoStars}
                </span>
              </li>
              <li className="flex items-center gap-5">
                <ul className="flex items-center gap-1">
                  <li>
                    <FaStar className="text-xl text-star-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                  <li>
                    <FaRegStar className="text-xl text-hover-color" />
                  </li>
                </ul>
                <div className="progress-holder relative rounded-[50px] grow h-2.5 bg-border-color overflow-hidden">
                  <span
                    style={{
                      width: `${(productDetails.review.oneStars / totalRating) * 100}%`,
                    }}
                    className="absolute top-[50%] left-0 translate-y-[-50%] bg-second-bg h-full"
                  ></span>
                </div>
                <span className="font-semibold text-hover-color text-lg">
                  {productDetails.review.oneStars}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rating-form font-semibold grow">
          <p className="text-[17px]">Add a review</p>
          <div className="my-5 flex gap-2.5">
            <span className="flex gap-1">
              Your rating <span className="font-bold text-red-500">*</span>:
            </span>
            <ul className="flex gap-1">
              {new Array(5).fill("1").map((_, i) => {
                return (
                  <li onMouseEnter={() => setUserRating(i + 1)} key={i}>
                    {userRating >= i + 1 ? (
                      <FaStar className="text-lg text-star-color" />
                    ) : (
                      <FaRegStar className="text-lg text-hover-color" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <form method="POST" onSubmit={(e) => e.preventDefault()}>
            <label
              htmlFor="reviewMessage"
              className="text-[17px] flex gap-1 mb-2.5"
            >
              Your review <span className="font-bold text-red-500">*</span>
            </label>
            <textarea
              className="resize-y w-full min-h-50 border rounded-3xl border-border-color p-5 outline-0"
              name="reviewMessage"
              id="reviewMessage"
            ></textarea>
            <button
              className="rounded-[50px] py-3 px-6 mt-2.5 text-sm font-bold text-second-color bg-second-bg cursor-pointer duration-[0.4s] hover:opacity-[0.9]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ul className="recommended-products products-grid grid">
        {
          products.map(product => {
            if((productDetails.category === product.category) && product.id !== productDetails.id) {
              return <ProductCard key={product.id} product={product} handlewishlistBtnShow={true}></ProductCard>
            }
          })
        }
      </ul>
    </section>
  );
}

export default CustomerReviewSection;
