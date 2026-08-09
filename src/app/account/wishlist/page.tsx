"use client";

import PageHeader from "@/app/components/PageHeader";
import AccountAside from "../AccountAside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/RTK/store";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  AddToCart,
  handleRemoveProductFromUserWishlist,
  handleSelectedProduct,
  handleShowOverlay,
} from "@/app/RTK/farmSlice";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";

function WishlistPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedUser == null) {
      redirect("/");
    }
  }, [selectedUser]);
  console.log(selectedUser?.wishlist);
  return (
    <div className="pt-27.5">
      <PageHeader>My Account</PageHeader>
      <div className="main-container flex flex-col lg:flex-row gap-5 pb-10">
        <AccountAside></AccountAside>
        <div className="wishlist-holder grow">
          {selectedUser?.wishlist.length === 0 ? (
            <div className="emptyWishlist sm:w-125 mx-auto text-center">
              <FaRegHeart className="text-7xl sm:text-9xl text-border-color mx-auto" />
              <h3 className="text-3xl sm:text-5xl font-semibold text-main-color my-5">
                This wishlist is empty.
              </h3>
              <p className="text-hover-color font-semibold my-5">
                You don&apos;t have any products in the wishlist yet. You will
                find a lot of interesting products on our &quot;Shop&quot; page.
              </p>
              <Link
                href={"/shop"}
                className="block w-fit py-3 px-6 text-sm font-bold text-second-color bg-second-bg mx-auto rounded-[50px]"
              >
                Return To Shop
              </Link>
            </div>
          ) : (
            <ul className="products-grid">
              {selectedUser?.wishlist.map((product) => {
                return (
                  <li
                    key={product.id}
                    className="relative bg-second-color rounded-lg overflow-hidden select-none group"
                  >
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
                    <div className="details relative p-4 bg-second-color z-2 duration-[0.4s] -mt-15">
                      <div className="product-name flex justify-between items-center">
                        <Link
                          href={`/products/${product.id}`}
                          className="font-semibold text-[17px]"
                        >
                          {product.productName}
                        </Link>
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
                              dispatch(
                                AddToCart({
                                  id: selectedUser.id,
                                  cartProduct: { ...product },
                                }),
                              );
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
                                    handleSelectedProduct({ ...product }),
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
                      <button
                        onClick={() =>
                          dispatch(
                            handleRemoveProductFromUserWishlist({
                              id: selectedUser.id,
                              productID: product.id,
                            }),
                          )
                        }
                        className="flex mt-5 w-full justify-center items-center text-lg text-second-color font-semibold bg-red-500 border-2 border-red-500 py-2 px-4 rounded-lg cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-red-500"
                      >
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
