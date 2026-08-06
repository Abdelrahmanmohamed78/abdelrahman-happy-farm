"use client";

import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { redirect } from "next/navigation";
import AccountAside from "./AccountAside";
import { handleSelectedUser } from "../RTK/farmSlice";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

function AccountPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedUser == null) {
      redirect("/");
    }
  }, [selectedUser]);

  return (
    <div className="pt-27.5">
      <PageHeader>My Account</PageHeader>
      <div className="main-container flex flex-col lg:flex-row gap-5 pb-10">
        <AccountAside></AccountAside>
        <div className="dashboard-holder grow">
          <p className="text-hover-color font-semibold mb-5">
            Hello <span className="font-bold">{selectedUser?.email}</span> (not{" "}
            <span className="font-bold">{selectedUser?.email}</span>?{" "}
            <Link
              onClick={() => {
                dispatch(handleSelectedUser(null));
              }}
              className={`font-semibold text-second-bg`}
              href={"/"}
            >
              Logout
            </Link>
            )
          </p>
          <p className="text-hover-color font-semibold">
            From your account dashboard you can view your{" "}
            <Link href={"/account/orders"} className="text-second-bg">
              recent orders,
            </Link>{" "}
            manage your{" "}
            <Link href={"/account/wishlist"} className="text-second-bg">
              wishlist
            </Link>{" "}
            and{" "}
            <Link href={"/account/accountDetails"} className="text-second-bg">
              edit your account details
            </Link>
            .
          </p>
          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <Link
              href={"/account/orders"}
              className="rounded-lg border-3 text-hover-color border-border-color p-5 flex flex-col gap-2.5 justify-center items-center duration-[0.4s] hover:border-second-bg hover:text-second-bg"
            >
              <FaRegFileLines className="text-4xl"></FaRegFileLines>
              <span className="text-xl">Orders</span>
            </Link>
            <Link
              href={"/account/accountDetails"}
              className="rounded-lg border-3 text-hover-color border-border-color p-5 flex flex-col gap-2.5 justify-center items-center duration-[0.4s] hover:border-second-bg hover:text-second-bg"
            >
              <FaRegFileLines className="text-4xl"></FaRegFileLines>
              <span className="text-xl">Account Details</span>
            </Link>
            <Link
              href={"/account/wishlist"}
              className="rounded-lg border-3 text-hover-color border-border-color p-5 flex flex-col gap-2.5 justify-center items-center duration-[0.4s] hover:border-second-bg hover:text-second-bg"
            >
              <FaRegFileLines className="text-4xl"></FaRegFileLines>
              <span className="text-xl">Wishlist</span>
            </Link>
            <Link
              onClick={() => {
                dispatch(handleSelectedUser(null));
              }}
              href={"/login"}
              className="rounded-lg border-3 text-hover-color border-border-color p-5 flex flex-col gap-2.5 justify-center items-center duration-[0.4s] hover:border-second-bg hover:text-second-bg"
            >
              <FaRegFileLines className="text-4xl"></FaRegFileLines>
              <span className="text-xl">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
