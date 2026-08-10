"use client";

import Image from "next/image";
import {
  AddToCart,
  handleAddProductToUserWishlist,
  handleRemoveProductFromUserWishlist,
  handleSelectedProduct,
  handleShowOverlay,
  removeFromWishlist,
} from "../RTK/farmSlice";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import useRatingHandler from "./useRatingHandler";
import { ProductProps } from "../types/types";
import toast from "react-hot-toast";

function ProductCard({
  product,
  handlewishlistBtnShow,
}: {
  product: ProductProps;
  handlewishlistBtnShow: boolean;
}) {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();
  const { totalRating, avgRating } = useRatingHandler(product.review);
  return (
    <li className="relative bg-second-color rounded-lg overflow-hidden select-none group">
      {product.isHot && (
        <span className="absolute z-2 top-2.5 left-2.5 py-1 px-4 rounded-[50px] bg-second-bg text-second-color text-[12px] font-bold">
          HOT
        </span>
      )}
      {product.isNew && (
        <span className="absolute z-2 top-2.5 left-2.5 py-1 px-4 rounded-[50px] bg-second-bg text-second-color text-[12px] font-bold">
          NEW
        </span>
      )}
      <div className="relative">
        {handlewishlistBtnShow && (
          <div className="heart-holder absolute top-5 right-5 z-2 group/wishlistMessage">
            <FaHeart
              onClick={() => {
                if (selectedUser) {
                  const exist = selectedUser.wishlist.some(
                    (el: ProductProps) => el.id == product.id,
                  );
                  if (exist) {
                    dispatch(removeFromWishlist(product.id));
                    dispatch(
                      handleRemoveProductFromUserWishlist({
                        id: selectedUser.id,
                        productID: product.id,
                      }),
                    );
                  } else {
                    dispatch(
                      handleAddProductToUserWishlist({
                        id: selectedUser.id,
                        product: product,
                      }),
                    );
                  }
                } else {
                  toast.error("You Should Login First!");
                }
              }}
              className={`wishlistAddIcon ${selectedUser?.wishlist.some((el: ProductProps) => el.id === product.id) ? "active" : ""}  text-hover-color text-xl cursor-pointer duration-[0.4s]  hover:text-second-bg`}
            />
            <span className="absolute pointer-events-none bg-main-color text-[12px] text-second-color w-fit block font-bold py-2 px-4 rounded-[5px] top-[50%] -left-32.5 translate-y-[-50%] duration-[0.4s] opacity-0 group-hover/wishlistMessage:opacity-[1]">
              Add To Wishlist
              <span className="absolute wishlistArrow top-[50%] translate-y-[-50%] -right-3.25   border-8 border-transparent border-l-main-color"></span>
            </span>
          </div>
        )}
        <Link
          className="images-holder relative cursor-pointer"
          href={`/products/${product.id}`}
        >
          <Image
            className="duration-[0.4s] z-1"
            src={product.images[0]}
            width={100}
            height={100}
            alt={`${product.productName}`}
          ></Image>
          <Image
            className="absolute top-0 left-0 w-full h-full duration-1000 opacity-0 z-1"
            width={100}
            height={100}
            src={product.images[1]}
            alt={product.productName + "2"}
          ></Image>
        </Link>
      </div>
      <div className="details group-hover:translate-y-0 relative p-4 bg-second-color z-2 duration-[0.4s] -mt-15 translate-y-13.75">
        <div className="product-name flex justify-between items-center">
          <Link
            href={`/products/${product.id}`}
            className="font-semibold text-[17px]"
          >
            {product.productName}
          </Link>
          <span className="flex gap-1 items-center text text-hover-color font-semibold">
            {totalRating > 0 ? avgRating.toFixed(1) : "0.0"}{" "}
            <FaStar className="text-star-color" />
          </span>
        </div>
        <p className="productPrice font-bold my-2">
          <span className="text-second-bg text-[17px]">
            ${product.productPrice}
          </span>
        </p>
        <div className="controls flex justify-between items-center mt-4 overflow-hidden">
          <Link
            onClick={() => {
              if (selectedUser) {
                const exist = selectedUser.cart.some(
                  (el) => el.id === product.id,
                );
                if (exist) {
                  dispatch(
                    AddToCart({
                      id: selectedUser.id,
                      cartProduct: { ...product },
                    }),
                  );
                } else {
                  dispatch(
                    AddToCart({
                      id: selectedUser.id,
                      cartProduct: { ...product, productAmount: 1 },
                    }),
                  );
                }
              } else {
                toast.error("You Should Login First!");
              }
            }}
            href={""}
            className="bg-second-bg text-second-color font-bold text-[13px] rounded-[50px] py-2 px-10 max-h-9 group/cart"
          >
            <div className="flex flex-col w-full h-full items-center gap-5 duration-300 group-hover/cart:-translate-y-10">
              <span>Add To Cart</span>
              <span>
                <IoCartOutline className="text-xl" />
              </span>
            </div>
          </Link>
          <div className="search-holder relative group/searchMessage">
            <CiSearch
              onClick={() => {
                if (selectedUser) {
                  dispatch(handleShowOverlay(true));
                  const exist = selectedUser.cart.some(
                    (el) => el.id === product.id,
                  );
                  if (exist) {
                    selectedUser.cart.map((el) => {
                      if (el.id === product.id) {
                        dispatch(
                          handleSelectedProduct({
                            ...product,
                            productAmount: el.productAmount,
                          }),
                        );
                      }
                    });
                  } else {
                    dispatch(
                      handleSelectedProduct({ ...product, productAmount: 1 }),
                    );
                  }
                } else {
                  toast.error("You Should Login First!");
                }
              }}
              className="text-2xl cursor-pointer duration-[0.4s] hover:text-hover-color"
            />
            <span className="absolute pointer-events-none bg-main-color text-[12px] text-second-color w-26.25 top-[50%] translate-y-[-50%] -left-28.75 block font-bold py-2 px-4 rounded-[5px] right-0 duration-[0.4s] opacity-0 group-hover/searchMessage:opacity-[1]">
              Show Details
              <span className="absolute wishlistArrow top-[50%] translate-y-[-50%] -right-3.25   border-8 border-transparent border-l-main-color"></span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
