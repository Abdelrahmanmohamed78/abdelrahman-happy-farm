"use client";

import PageHeader from "@/app/components/PageHeader";
import AccountAside from "../AccountAside";
import { useSelector } from "react-redux";
import { RootState } from "@/app/RTK/store";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { BsCartX } from "react-icons/bs";
import Link from "next/link";

function OrdersPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  useEffect(() => {
    if (selectedUser == null) {
      redirect("/");
    }
  }, [selectedUser]);
  useEffect(() => {}, []);
  return (
    <div className="pt-27.5">
      <PageHeader>My Account</PageHeader>
      <div className="main-container flex flex-col lg:flex-row gap-5 pb-10">
        <AccountAside></AccountAside>
        <div className="orders-holder overflow-auto grow">
          {selectedUser?.completedOrders?.length === 0 ? (
            <div className="emptyCart py-10 sm:w-125 mx-auto text-center">
              <BsCartX className="text-7xl md:text-9xl text-border-color mx-auto" />
              <h3 className="text-3xl md:text-4xl font-semibold text-main-color my-5">
                Your cart is currently empty.
              </h3>
              <p className="text-hover-color font-semibold my-5">
                Before proceed to checkout you must add some products to your
                shopping cart. You will find a lot of interesting products on
                our &quot;Shop&quot; page.
              </p>
              <Link
                href={"/shop"}
                className="block w-fit py-3 px-6 text-sm font-bold text-second-color bg-second-bg mx-auto rounded-[50px]"
              >
                Return To Shop
              </Link>
            </div>
          ) : (
            <div className="orders-holder">
              <div className="completedOrders-holder overflow-scroll">
                <table className="min-w-250 border border-border-color w-full">
                  <thead>
                    <tr>
                      <td className="text-second-color bg-second-bg font-semibold text-center border border-border-color p-1.25">
                        ID
                      </td>
                      <td className="text-second-color bg-second-bg font-semibold text-center border border-border-color p-1.25">
                        Email
                      </td>
                      <td className="text-second-color bg-second-bg font-semibold text-center border border-border-color p-1.25">
                        Product Details
                      </td>
                      <td className="text-second-color bg-second-bg font-semibold text-center border border-border-color p-1.25">
                        Total Price
                      </td>
                      <td className="text-second-color bg-second-bg font-semibold text-center border border-border-color p-1.25">
                        Status
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser?.completedOrders?.map((order, i: number) => {
                      console.log(order);
                      return (
                        <tr
                          key={order.completedID}
                          className={`${i % 2 === 0 && "bg-gray-200"}`}
                        >
                          <td className="p-1.25 text-center border border-border-color">
                            {order.completedID}
                          </td>
                          <td className="p-1.25 text-center border border-border-color">
                            {selectedUser.email}
                          </td>
                          <td className="p-1.25 text-center border border-border-color">
                            <ul className="flex flex-col gap-1.25">
                              {order.cart?.map((product) => {
                                return (
                                  <li
                                    key={product.id}
                                    className="flex gap-1.25 items-center"
                                  >
                                    <span>{product.productName}</span>
                                    <span>x{product.productAmount}</span>
                                    <span>{product.productPrice}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </td>
                          <td className="p-1.25 text-center border border-border-color">
                            $
                            {order.cart
                              .reduce((acc, curr) => {
                                acc =
                                  acc + curr.productPrice * curr.productAmount;
                                return acc;
                              }, 0)
                              .toFixed(2)}
                          </td>
                          <td className="p-1.25 text-center border border-border-color">
                            <span className="text-[12px] font-bold bg-yellow-400 py-1 px-2 rounded-[50px]">
                              PENDING
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
