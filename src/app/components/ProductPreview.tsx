"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { FaXmark } from "react-icons/fa6";
import {
  AddToCart,
  handleProductAmount,
  handleProductAmountInCart,
  handleSelectedProduct,
  handleShowOverlay,
} from "../RTK/farmSlice";
import { RiStarSFill, RiTelegramFill, RiTwitterXFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialPinterestCircular,
} from "react-icons/ti";
import toast from "react-hot-toast";

function ProductPreview() {
  const selectedProduct = useSelector(
    (state: RootState) => state.selectedProduct,
  );
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();
  const [amountVal, setAmountVal] = useState(1);

  useEffect(() => {
    function callNow() {
      if (selectedProduct) {
        setAmountVal(selectedProduct.productAmount);
      }
    }
    callNow();
  }, [selectedProduct]);

  return (
    <>
      {selectedProduct && (
        <div
          className={`parent fixed z-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          <FaXmark
            onClick={() => {
              dispatch(handleShowOverlay(false));
              dispatch(handleSelectedProduct(null));
            }}
            className="absolute -top-7.5 -right-7.5 text-2xl text-second-color cursor-pointer duration-[0.4s] hover:text-red-500"
          ></FaXmark>
          <div className="product-preview w-75 lg:w-225 flex flex-col lg:flex-row gap-5 bg-second-color rounded-[10px] overflow-y-scroll p-5 lg:p-10 max-h-150">
            <div className="image-holder">
              <Image
                width={100}
                height={100}
                src={selectedProduct.images[0]}
                alt={selectedProduct.productName}
              ></Image>
            </div>
            <div className="details-holder grow">
              <h2 className="text-xl text-center lg:text-left lg:text-[26px] font-semibold mb-2.5 lg:mb-5 whitespace-nowrap">
                {selectedProduct.productName}
              </h2>
              <div className="rate-holder flex flex-col items-center lg:flex-row lg:items-start gap-2.5">
                <ul className="stars flex text-[20px] text-star-color">
                  <li>
                    <RiStarSFill />
                  </li>
                  <li>
                    <RiStarSFill />
                  </li>
                  <li>
                    <RiStarSFill />
                  </li>
                  <li>
                    <RiStarSFill />
                  </li>
                  <li>
                    <RiStarSFill />
                  </li>
                </ul>
                <span className="font-semibold text-sm text-hover-color">
                  ({" "}
                  {selectedProduct.review.fiveStars +
                    selectedProduct.review.fourStars +
                    selectedProduct.review.threeStars +
                    selectedProduct.review.twoStars +
                    selectedProduct.review.oneStars}{" "}
                  Customer Reviews )
                </span>
              </div>
              <p className="text-xl text-center lg:text-left lg:text-2xl font-bold text-second-bg my-2.5 lg:my-5">
                ${selectedProduct.productPrice}
              </p>
              <div className="amount-holder flex gap-5 justify-center flex-col lg:flex-row lg:justify-start items-center mb-5">
                <div className="amount flex">
                  <button
                    onClick={() => {
                      if (amountVal > 1) {
                        setAmountVal((amount) => amount - 1);
                      }
                    }}
                    className="border-hover-color border rounded-tl-[50px] rounded-bl-[50px] py-1 px-2 font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    onChange={(el) => {
                      if (+el.target.value > 0) {
                        setAmountVal(+el.target.value);
                      }
                    }}
                    className="text-center py-1 w-7.5 border-y border-hover-color"
                    type="text"
                    value={amountVal}
                  />
                  <button
                    onClick={() => {
                      setAmountVal((amount) => amount + 1);
                    }}
                    className="border-hover-color border rounded-tr-[50px] rounded-br-[50px] py-1 px-2 font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (selectedUser) {
                      dispatch(
                        handleProductAmount({
                          id: selectedProduct.id,
                          amount: amountVal,
                        }),
                      );
                      setAmountVal(selectedProduct.productAmount);
                      dispatch(
                        AddToCart({
                          id: selectedUser.id,
                          cartProduct: {
                            ...selectedProduct,
                            productAmount: amountVal,
                          },
                        }),
                      );
                      dispatch(
                        handleProductAmountInCart({
                          id: selectedUser.id,
                          productId: selectedProduct.id,
                          productAmount: amountVal,
                        }),
                      );
                      console.log(selectedUser);
                      dispatch(handleSelectedProduct(null));
                      dispatch(handleShowOverlay(false));
                    } else {
                      toast.error("You Should Login First!");
                    }
                  }}
                  className="py-1 px-5 lg:py-2 lg:px-10 rounded-[50px] bg-second-bg text-second-color font-bold text-sm cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
              <hr className="outline-none border-hover-color opacity-[0.3]" />
              <p className="my-5 text-main-color font-bold text-[17px]">
                Category:{" "}
                <span className="text-hover-color capitalize">
                  {selectedProduct.category}
                </span>
              </p>
              <p className="my-5 text-main-color flex items-center font-bold text-[17px]">
                Share:{" "}
                <ul className=" flex gap-0.75 items-center text-hover-color text-[22px]">
                  <li className="duration-[0.4s] hover:text-main-color">
                    <Link href={""}>
                      <TiSocialFacebook />
                    </Link>
                  </li>
                  <li className="duration-[0.4s] hover:text-main-color">
                    <Link href={""}>
                      <RiTwitterXFill />
                    </Link>
                  </li>
                  <li className="duration-[0.4s] hover:text-main-color">
                    <Link href={""}>
                      <TiSocialPinterestCircular />
                    </Link>
                  </li>
                  <li className="duration-[0.4s] hover:text-main-color">
                    <Link href={""}>
                      <TiSocialLinkedin />
                    </Link>
                  </li>
                  <li className="duration-[0.4s] hover:text-main-color">
                    <Link href={""}>
                      <RiTelegramFill />
                    </Link>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPreview;
