"use client";

import PageHeader from "@/app/components/PageHeader";
import AccountAside from "../AccountAside";
import { useSelector } from "react-redux";
import { RootState } from "@/app/RTK/store";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

function WishlistPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
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
            <ul className="flex flex-col gap-5">
              {
                selectedUser?.wishlist.map(product => {
                  return <li key={product.id}>{product.productName}</li>
                })
              }
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
