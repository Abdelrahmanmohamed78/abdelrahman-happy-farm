"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { ProductProps } from "../types/types";
import Link from "next/link";
import { BsCartX } from "react-icons/bs";
import { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import {
  handleProductAmount,
  handleSelectedProduct,
  RemoveFromCart,
} from "../RTK/farmSlice";

function CartPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();
  const pathName = usePathname();

  useEffect(() => {
    if (selectedUser === null) {
      redirect("/");
    }
  }, [selectedUser]);
  const totalPrice = selectedUser?.cart.reduce((acc, curr) => {
    acc = acc + curr.productAmount * curr.productPrice;
    return acc;
  }, 0);
  return (
    <div className="pt-27.5">
      <div className="main-container">
        {selectedUser?.cart.length === 0 ? (
          <div className="emptyCart py-10 sm:w-125 mx-auto text-center">
            <BsCartX className="text-7xl sm:text-9xl text-border-color mx-auto" />
            <h3 className="text-3xl sm:text-4xl font-semibold text-main-color my-5">
              Your cart is currently empty.
            </h3>
            <p className="text-hover-color font-semibold my-5">
              Before proceed to checkout you must add some products to your
              shopping cart. You will find a lot of interesting products on our
              &quot;Shop&quot; page.
            </p>
            <Link
              href={"/shop"}
              className="block w-fit py-3 px-6 text-sm font-bold text-second-color bg-second-bg mx-auto rounded-[50px]"
            >
              Return To Shop
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex justify-center items-center mb-10 gap-1.25 md:gap-2.5 lg:gap-5 text-hover-color font-semibold text-sm sm:text-lg md:text-2xl">
              <li
                className={`${pathName === "/cart" && "border-b-3 border-b-second-bg text-main-color"}`}
              >
                <Link href={"/cart"}>Shopping List</Link>
              </li>
              <li>
                <CgArrowLongRight></CgArrowLongRight>
              </li>
              <li
                className={`${pathName === "/cart/checkout" && "border-b-3 border-b-second-bg text-main-color"}`}
              >
                <Link href={"/cart/checkout"}>Checkout</Link>
              </li>
              <li>
                <CgArrowLongRight></CgArrowLongRight>
              </li>
              <li
                className={`${pathName === "/cart/checkout/completeOrder" && "border-b-3 border-b-second-bg text-main-color"}`}
              >
                Order Complete
              </li>
            </ul>
            <div className="cart-holder flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 mb-10">
              <ul className="flex flex-col w-full lg:w-auto grow">
                {selectedUser?.cart.map((product: ProductProps) => {
                  return (
                    <li
                      className="flex justify-between items-center gap-5 border-b border-b-border-color py-5"
                      key={product.id}
                    >
                      <FaXmark
                        onClick={() => {
                          dispatch(
                            RemoveFromCart({
                              id: selectedUser.id,
                              productId: product.id,
                            }),
                          );
                          dispatch(
                            handleProductAmount({ id: product.id, amount: 1 }),
                          );
                          dispatch(handleSelectedProduct(null));
                        }}
                        className="text-hover-color cursor-pointer text-lg duration-[0.4s] hover:text-red-500"
                      ></FaXmark>
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.images[0]}
                          width={100}
                          height={100}
                          alt={product.productName}
                        ></Image>
                      </Link>
                      <Link href={`/products/${product.id}`} className="text-main-color text-lg font-semibold">
                        {product.productName}
                      </Link>
                      <span className="text-hover-color text-lg font-semibold italic">
                        {product.productPrice}
                      </span>
                      <span className="text-hover-color text-lg font-semibold italic">
                        {product.productAmount}
                      </span>
                      <span className="totalPrice text-second-bg text-lg font-semibold italic">
                        $
                        {(product.productAmount * product.productPrice).toFixed(
                          2,
                        )}
                      </span>
                    </li>
                  );
                })}
                <div className="coupon-holder flex flex-col sm:flex-row mt-10 gap-5 items-center">
                  <input
                    className="py-2 px-5 rounded-[50px] bg-second-color border border-border-color font-semibold outline-0"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button className="text-second-color bg-second-bg py-2 px-4 rounded-[50px] text-sm font-bold cursor-pointer">
                    Apply coupon
                  </button>
                </div>
              </ul>
              <div className="cart-total-holder w-full lg:w-100 bg-second-color rounded-[10px] p-7.5">
                <h3 className="font-semibold text-main-color text-2xl mb-5">
                  Cart Total
                </h3>
                <p className="subtotal flex justify-between gap-5 items-center font-semibold pb-2.5 border-b border-b-border-color">
                  Subtotal
                  <span className="text-lg font-semibold text-hover-color italic">
                    ${totalPrice?.toFixed(2)}
                  </span>
                </p>
                <div className="options flex flex-col mt-2.5 justify-self-end">
                  <div className="option flex gap-2.5 items-center text-right font-semibold">
                    <label className="cursor-pointer grow" htmlFor="flat">
                      Flate rate
                    </label>
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="option"
                      id="flat"
                      defaultChecked
                    />
                  </div>
                  <div className="option flex gap-2.5 items-center text-right font-semibold">
                    <label className="cursor-pointer grow" htmlFor="free">
                      Free shipping
                    </label>
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="option"
                      id="free"
                    />
                  </div>
                  <div className="option flex gap-2.5 items-center text-right font-semibold">
                    <label className="cursor-pointer grow" htmlFor="local">
                      Local pickup
                    </label>
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="option"
                      id="local"
                    />
                  </div>
                </div>
                <p className="my-2.5 font-semibold">Shipment</p>
                <p className="italic text-hover-color leading-normal w-62.5 ml-auto text-right font-semibold text-lg">
                  Shipping options will be updated during checkout
                </p>
                <p className="my-2.5 text-second-bg font-bold text-[17px] pb-2.5 border-b border-b-border-color text-right">
                  Calculate shipping
                </p>
                <p className="flex justify-between items-center font-semibold mb-5">
                  Total
                  <span className="text-lg text-second-bg font-bold">
                    ${totalPrice?.toFixed(2)}
                  </span>
                </p>
                <button
                  className="text-sm text-second-color font-bold block text-center py-3 px-6 rounded-[50px] bg-second-bg border-2 border-second-bg duration-[0.4s] hover:text-second-bg hover:bg-transparent"
                  onClick={() => redirect('/cart/checkout')}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
