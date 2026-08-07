"use client";

import {
  handleAddCompleteProductToUser,
  handleProductAmount,
  handleResetProductsAmount,
  handleSelectedProduct,
  RemoveFromCart,
} from "@/app/RTK/farmSlice";
import { RootState } from "@/app/RTK/store";
import { ProductProps } from "@/app/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgArrowLongRight } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import z from "zod";

function CheckoutPage() {
  const pathName = usePathname();
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();
  const totalPrice = selectedUser?.cart.reduce((acc, curr) => {
    acc = acc + curr.productAmount * curr.productPrice;
    return acc;
  }, 0);
  const [detailsChecekd, setDetailsChecekd] = useState("direct");
  const schema = z.object({
    firstName: z.string().min(2, "First name must be more than 2 characters!"),
    lastName: z.string().min(2, "First name must be more than 2 characters!"),
    phone: z
      .string()
      .trim()
      .min(11, "Phone must be more than 11 number")
      .max(11, "Phone must be less than 15 number")
      .regex(/^\+?[0-9]+$/, "Invalid Number"),
    email: z.email("Invalid Email"),
    country: z
      .string()
      .min(3, "Country / Region must be more than 3 characters!"),
    town: z.string().min(3, "Town / City must be more than 3 characters!"),
    street: z.coerce
      .number({ error: "street must be a number" })
      .min(1, "Invalid street number"),
    postcode: z.coerce
      .number({ error: "postcode must be a number" })
      .min(1, "Invalid postcode"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  function submitData(data: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    country: string;
    town: string;
    street: number;
    postcode: number;
  }) {
    dispatch(
      handleAddCompleteProductToUser({
        id: selectedUser?.id,
        completedOrder: {
          ...data,
          cart: selectedUser?.cart,
          completedID: new Date().getTime(),
        },
      }),
    );
    dispatch(handleResetProductsAmount());
    toast.success("Order Completed Successfully!");
    redirect("/cart/checkout/completedOrder");
  }

  useEffect(() => {
    if (selectedUser === null) {
      redirect("/");
    }
    if (selectedUser?.cart.length === 0) {
      redirect("/cart");
    }
  }, [selectedUser]);

  return (
    <div className="pt-27.5">
      <div className="main-container">
        <ul className="flex justify-center items-center mb-10 gap-1.25 sm:gap-2.5 md:gap-5 text-hover-color font-semibold text-sm sm:text-lg md:text-2xl">
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
        <form
          onSubmit={handleSubmit(submitData)}
          method="POST"
          className="checkout-holder mb-10 flex flex-col lg:flex-row items-start gap-10"
        >
          <div className="billing-details-holder grow w-full basis-[60%]">
            <h3 className="text-2xl font-semibold mb-7.5">Billing Details</h3>
            <div className="grid justify-center items-center gap-5 grid-cols-2 font-semibold grow">
              <div className="firstName flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="text"
                  id="firstName"
                  defaultValue={selectedUser?.firstName ?? ""}
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="text-sm italic text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="lastName flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  defaultValue={selectedUser?.lastName ?? ""}
                />
                {errors.lastName && (
                  <span className="text-sm italic text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="phone flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="phone"
                  id="phone"
                  {...register("phone")}
                  defaultValue={selectedUser?.phone ?? ""}
                />
                {errors.phone && (
                  <span className="text-sm italic text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="email flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="email"
                  id="email"
                  defaultValue={selectedUser?.email ?? ""}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-sm italic text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="country flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="country">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="text"
                  id="country"
                  {...register("country")}
                />
                {errors.country && (
                  <span className="text-sm italic text-red-500">
                    {errors.country.message}
                  </span>
                )}
              </div>
              <div className="town flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="town">
                  Town / City <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="text"
                  id="town"
                  {...register("town")}
                />
                {errors.town && (
                  <span className="text-sm italic text-red-500">
                    {errors.town.message}
                  </span>
                )}
              </div>
              <div className="street flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="street">
                  Street Number <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="text"
                  id="street"
                  {...register("street")}
                  placeholder="House number and street name"
                />
                {errors.street && (
                  <span className="text-sm italic text-red-500">
                    {errors.street.message}
                  </span>
                )}
              </div>
              <div className="postcode flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <label className="flex gap-0.5 text-[17px]" htmlFor="postcode">
                  Postcode <span className="text-red-500">*</span>
                </label>
                <input
                  className="rounded-[50px] py-3 px-5 outline-0 border border-border-color bg-second-color grow"
                  type="text"
                  id="postcode"
                  {...register("postcode")}
                />
                {errors.postcode && (
                  <span className="text-sm italic text-red-500">
                    {errors.postcode.message}
                  </span>
                )}
              </div>
              <div className="notes flex flex-col col-span-2 gap-0.5">
                <label className="flex gap-0.5 text-[17px]" htmlFor="notes">
                  Order notes{" "}
                  <span className="text-hover-color text-[12px] font-bold">
                    (optional)
                  </span>
                </label>
                <textarea
                  className="rounded-[20px] py-3 px-5 outline-0 border border-border-color bg-second-color grow resize-y min-h-62.5"
                  name="order notes"
                  id="notes"
                />
              </div>
            </div>
          </div>
          <div className="order-holder basis-[40%]">
            <h3 className="text-2xl font-semibold mb-7.5">Your Order</h3>
            <div className="order-box bg-second-color p-5 rounded-[10px]">
              <p className="flex items-center justify-between gap-5 font-semibold text-[17px] pb-5 border-b border-b-border-color">
                <span>Product</span>
                <span>Subtotal</span>
              </p>
              <ul className="flex flex-col gap-2.5 mb-2.5">
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
                          width={50}
                          height={50}
                          alt={product.productName}
                        ></Image>
                      </Link>
                      <Link
                        href={`/products/${product.id}`}
                        className="text-main-color text-[15px] font-semibold"
                      >
                        {product.productName}
                      </Link>
                      <span className="text-hover-color text-[15px] font-semibold italic">
                        {product.productAmount}
                      </span>
                      <span className="totalPrice text-second-bg text-[15px] font-semibold italic">
                        $
                        {(product.productAmount * product.productPrice).toFixed(
                          2,
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="font-semibold flex justify-between items-center">
                Subtotal
                <span className="font-bold text-second-bg">
                  ${totalPrice?.toFixed(2)}
                </span>
              </p>
            </div>
            <div className="payment-details mt-5">
              <div className="details-box">
                <div className="direct flex flex-col gap-3.25">
                  <div className="holder flex gap-1.25">
                    <input
                      onClick={() => setDetailsChecekd("direct")}
                      type="radio"
                      name="payment"
                      id="direct"
                      defaultChecked
                    />
                    <label htmlFor="direct">Direct bank transfer</label>
                  </div>
                  <div
                    className={`text-details-holder relative duration-[0.4s] ${detailsChecekd === "direct" ? "max-h-125" : "max-h-0 overflow-hidden"}`}
                  >
                    <div className="text p-2.5 rounded-lg bg-second-color">
                      Make your payment directly into our bank account. please
                      use your order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </div>
                  </div>
                </div>
                <div className="check flex flex-col gap-3.25">
                  <div className="holder flex gap-1.25">
                    <input
                      onClick={() => setDetailsChecekd("check")}
                      type="radio"
                      name="payment"
                      id="check"
                    />
                    <label htmlFor="check">Check payments</label>
                  </div>
                  <div
                    className={`text-details-holder relative duration-[0.4s] ${detailsChecekd === "check" ? "max-h-125" : "max-h-0 overflow-hidden"}`}
                  >
                    <div className="text p-2.5 rounded-lg bg-second-color">
                      Make your payment directly into our bank account. please
                      use your order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </div>
                  </div>
                </div>
                <div className="cash flex flex-col gap-3.25">
                  <div className="holder flex gap-1.25">
                    <input
                      onClick={() => setDetailsChecekd("cash")}
                      type="radio"
                      name="payment"
                      id="cash"
                    />
                    <label htmlFor="cash">Cash on delivery</label>
                  </div>
                  <div
                    className={`text-details-holder relative duration-[0.4s] ${detailsChecekd === "cash" ? "max-h-125" : "max-h-0 overflow-hidden"}`}
                  >
                    <div className="text p-2.5 rounded-lg bg-second-color">
                      Make your payment directly into our bank account. please
                      use your order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="text-sm text-second-color font-bold w-full rounded-[50px] bg-second-bg py-3 px-6 text-center mt-5 cursor-pointer border-2 border-second-bg duration-[0.4s] hover:text-second-bg hover:bg-transparent"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
