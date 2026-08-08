"use client";

import CustomerReviewSection from "@/app/components/CustomerReview";
import useRatingHandler from "@/app/components/useRatingHandler";
import {
  AddToCart,
  handleAddProductToUserWishlist,
  handleDeliveryAside,
  handleDescriptionAside,
  handleProductAmount,
  handleProductAmountInCart,
  handleRemoveProductFromUserWishlist,
  handleSelectedProduct,
  handleShowOverlay,
} from "@/app/RTK/farmSlice";
import { RootState } from "@/app/RTK/store";
import { ProductProps } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsTelegram } from "react-icons/bs";
import {
  FaHeart,
  FaLinkedinIn,
  FaPinterest,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiFacebook } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";

function ProductPage() {
  const { productID } = useParams();
  const products = useSelector((state: RootState) => state.products);
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();

  let productDetails: ProductProps | undefined;
  if (productID) {
    productDetails = products.find((product) => {
      return product.id == +productID;
    });
  }
  const [amountVal, setAmountVal] = useState(
    productDetails?.productAmount || 1,
  );
  const { avgRating } = useRatingHandler(productDetails!.review);
  useEffect(() => {
    function callNow() {
      if (productDetails) {
        setAmountVal(productDetails?.productAmount);
      }
    }
    callNow();
  }, [productDetails]);

  useEffect(() => {
    function callNow() {
      if (productID) {
        products.map((product) => {
          if (product.id == +productID) {
            selectedUser?.cart.map((el) => {
              if (el.id === product.id) {
                dispatch(
                  handleProductAmount({
                    id: product.id,
                    amount: el.productAmount,
                  }),
                );
                dispatch(handleSelectedProduct(null));
              }
            });
          }
        });
      }
    }
    callNow();
  }, []);
  return (
    <>
      {productDetails && (
        <div className="pt-27.5">
          <div className="product-holder main-container flex flex-col md:flex-row items-start gap-5 mb-20">
            <div className="images-holder mx-auto relative grow grid grid-cols-2 gap-5">
              {productDetails.isHot && (
                <span className="absolute top-2.5 right-2.5 bg-second-bg text-[12px] text-second-color py-1 px-4 font-bold rounded-[50px]">
                  HOT
                </span>
              )}
              {productDetails.isNew && (
                <span className="absolute top-2.5 right-2.5 bg-second-bg text-[12px] text-second-color py-1 px-4 font-bold rounded-[50px]">
                  NEW
                </span>
              )}
              <Image
                className="w-full h-full col-span-2 rounded-[20px]"
                src={productDetails.images[0]}
                width={200}
                height={200}
                alt="product image"
              ></Image>
              <Image
                className="w-full h-full col-span-1 rounded-[20px]"
                src={productDetails.images[1]}
                width={200}
                height={200}
                alt="product image"
              ></Image>
              <Image
                className="w-full h-full col-span-1 rounded-[20px]"
                src={productDetails.images[2]}
                width={200}
                height={200}
                alt="product image"
              ></Image>
              {productDetails.images.length === 4 && (
                <Image
                  className="w-full h-full col-span-2 rounded-[20px]"
                  src={productDetails.images[3]}
                  width={200}
                  height={200}
                  alt="product image"
                ></Image>
              )}
            </div>
            <div className="product-details-holder w-full lg:basis-[40%] sticky top-27.5">
              <h2 className="text-3xl leading-[1.1] md:text-4xl lg:text-5xl font-bold mb-5">
                {productDetails.productName}
              </h2>
              <div className="rating-holder flex mt-10 items-center gap-1">
                <ul className="flex items-center">
                  {new Array(5).fill("1").map((_, i) => {
                    if (Math.round(avgRating) >= i + 1) {
                      return (
                        <li key={i}>
                          <FaStar className="text-star-color text-lg" />
                        </li>
                      );
                    } else {
                      return (
                        <li key={i}>
                          <FaRegStar className="text-lg text-hover-color" />
                        </li>
                      );
                    }
                  })}
                </ul>
                <span className="font-semibold text-hover-color text-sm flex items-center gap-1.25">
                  ({" "}
                  {productDetails.review.fiveStars +
                    productDetails.review.fourStars +
                    productDetails.review.threeStars +
                    productDetails.review.twoStars +
                    productDetails.review.oneStars}{" "}
                  Customer Reviews )
                </span>
              </div>
              <span className="price text-4xl my-7.5 block text-second-bg font-bold">
                ${productDetails.productPrice}
              </span>
              <div className="amount-holder flex gap-5 justify-center lg:justify-start items-center mb-5">
                <div className="amount flex">
                  <button
                    onClick={() => {
                      if (amountVal > 1) {
                        setAmountVal((amount) => amount - 1);
                      }
                    }}
                    className="border-border-color border bg-second-color rounded-tl-[50px] duration-[0.4s] hover:bg-second-bg hover:text-second-color rounded-bl-[50px] py-1 px-2 font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    onChange={(el) => {
                      if (+el.target.value > 0) {
                        setAmountVal(+el.target.value);
                      }
                    }}
                    className="text-center py-1 w-7.5 border-y border-border-color bg-second-color"
                    type="text"
                    value={amountVal}
                  />
                  <button
                    onClick={() => {
                      setAmountVal((amount) => amount + 1);
                    }}
                    className="border-border-color border bg-second-color duration-[0.4s] hover:bg-second-bg hover:text-second-color rounded-tr-[50px] rounded-br-[50px] py-1 px-2 font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (selectedUser) {
                      dispatch(
                        handleProductAmount({
                          id: productDetails.id,
                          amount: amountVal,
                        }),
                      );
                      setAmountVal(productDetails.productAmount);
                      dispatch(
                        AddToCart({
                          id: selectedUser.id,
                          cartProduct: {
                            ...productDetails,
                            productAmount: amountVal,
                          },
                        }),
                      );
                      dispatch(
                        handleProductAmountInCart({
                          id: selectedUser.id,
                          productId: productDetails.id,
                          productAmount: amountVal,
                        }),
                      );
                      dispatch(handleSelectedProduct(null));
                      dispatch(handleShowOverlay(false));
                    } else {
                      toast.error("You Should Login First");
                    }
                  }}
                  className="py-2 px-5 lg:py-2 lg:px-10 grow rounded-[50px] bg-second-bg text-second-color font-bold text-sm cursor-pointer"
                >
                  Add To Cart
                </button>
                <FaHeart
                  className={`wishlistAddIcon ${selectedUser?.wishlist.some((el) => el.id === productDetails.id) ? "active" : ""} text-hover-color text-xl cursor-pointer duration-[0.4s] hover:text-second-bg`}
                  onClick={() => {
                    if (selectedUser) {
                      const exist = selectedUser?.wishlist.some(
                        (el) => el.id === productDetails.id,
                      );
                      if (exist) {
                        dispatch(
                          handleRemoveProductFromUserWishlist({
                            id: selectedUser.id,
                            productID: productDetails.id,
                          }),
                        );
                      } else {
                        dispatch(
                          handleAddProductToUserWishlist({
                            id: selectedUser.id,
                            product: productDetails,
                          }),
                        );
                      }
                    } else {
                      toast.error("You Should Login First!");
                    }
                  }}
                />
              </div>
              <div className="details-holder bg-second-color rounded-lg">
                <p
                  onClick={() => {
                    dispatch(handleShowOverlay(true));
                    dispatch(handleDescriptionAside(true));
                  }}
                  className="px-3.75 py-5 text-[17px] font-semibold cursor-pointer flex items-center justify-between border-b border-b-border-color duration-[0.4s] hover:text-second-bg group"
                >
                  Description
                  <MdKeyboardArrowRight className="text-hover-color duration-[0.4s] group-hover:text-second-bg" />
                </p>
                <p
                  onClick={() => {
                    dispatch(handleShowOverlay(true));
                    dispatch(handleDeliveryAside(true));
                  }}
                  className="px-3.75 py-5 text-[17px] font-semibold cursor-pointer flex items-center justify-between duration-[0.4s] hover:text-second-bg group"
                >
                  Delivery Details
                  <MdKeyboardArrowRight className="text-hover-color duration-[0.4s] group-hover:text-second-bg" />
                </p>
              </div>
              <div className="features flex flex-col md:flex-row gap-5 p-5 rounded-lg bg-second-color my-5 justify-center items-center">
                <div className="box text-center">
                  <Image
                    className="mx-auto"
                    src={"/farm-product-delivery.svg"}
                    width={40}
                    height={40}
                    alt="feature image"
                  ></Image>
                  <p className="text-sm font-semibold mt-5">
                    Free Delivery On Orders Over $50.00
                  </p>
                </div>
                <div className="box text-center">
                  <Image
                    className="mx-auto"
                    src={"/farm-product-organic-milk.svg"}
                    width={40}
                    height={40}
                    alt="feature image"
                  ></Image>
                  <p className="text-sm font-semibold mt-5">
                    It Is Made From High-Quality Organic Milk
                  </p>
                </div>
                <div className="box text-center">
                  <Image
                    className="mx-auto"
                    src={"/farm-product-safe-payment.svg"}
                    width={40}
                    height={40}
                    alt="feature image"
                  ></Image>
                  <p className="text-sm font-semibold mt-5">
                    Safe Online Payment With Any Bank Card
                  </p>
                </div>
              </div>
              <ul className="social-links flex justify-center items-center gap-2">
                <li>
                  <Link
                    href={""}
                    className="w-7.5 h-7.5 rounded-[50%] flex justify-center items-center text-second-bg border-2 border-second-bg text-sm cursor-pointer duration-[0.4s] hover:bg-second-bg hover:text-second-color"
                  >
                    <TfiFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="w-7.5 h-7.5 rounded-[50%] flex justify-center items-center text-second-bg border-2 border-second-bg text-sm cursor-pointer duration-[0.4s] hover:bg-second-bg hover:text-second-color"
                  >
                    <RiTwitterXFill />
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="w-7.5 h-7.5 rounded-[50%] flex justify-center items-center text-second-bg border-2 border-second-bg text-sm cursor-pointer duration-[0.4s] hover:bg-second-bg hover:text-second-color"
                  >
                    <FaPinterest />
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="w-7.5 h-7.5 rounded-[50%] flex justify-center items-center text-second-bg border-2 border-second-bg text-sm cursor-pointer duration-[0.4s] hover:bg-second-bg hover:text-second-color"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="w-7.5 h-7.5 rounded-[50%] flex justify-center items-center text-second-bg border-2 border-second-bg text-sm cursor-pointer duration-[0.4s] hover:bg-second-bg hover:text-second-color"
                  >
                    <BsTelegram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <CustomerReviewSection
            productDetails={productDetails}
          ></CustomerReviewSection>
        </div>
      )}
    </>
  );
}

export default ProductPage;
