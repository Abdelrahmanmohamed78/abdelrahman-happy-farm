"use client";

import PageHeader from "../components/PageHeader";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import AdminAside from "./AdminAside";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { PiUsersThree } from "react-icons/pi";
import { handleSelectedUser } from "../RTK/farmSlice";
import { IoLogOutOutline } from "react-icons/io5";
import HolderHeader from "./HolderHeader";

function AdminDashboardPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const products = useSelector((state: RootState) => state.products);
  const blogs = useSelector((state: RootState) => state.articles);
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      selectedUser === null ||
      selectedUser.email !== "admin@gmail.com" ||
      selectedUser.password !== "12345678"
    ) {
      redirect("/");
    }
  }, [selectedUser]);
  
  return (
    <div className="pt-27.5">
      <PageHeader>Admin</PageHeader>
      <div className="main-container pb-20 flex flex-col md:flex-row gap-5">
        <AdminAside></AdminAside>
        <div className="dashboard-holder grow">
          <HolderHeader>Admin Dashboard</HolderHeader>
          <ul className="dashboard-grid grid lg:grid-cols-2 gap-5 text-2xl">
            <li>
              <Link
                href={"admin-dashboard/products"}
                className="relative flex flex-col gap-2.5 text-hover-color justify-center items-center border-2 border-border-color rounded-lg p-5 overflow-hidden group duration-[0.4s] hover:text-second-bg hover:border-second-bg"
              >
                <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col gap-2.5 justify-center items-center text-second-color bg-second-bg duration-[0.4s] -translate-y-full group-hover:translate-y-0">
                  <span>{products.length}</span>
                  Products
                </div>
                <BsCart className="text-3xl" />
                Products
              </Link>
            </li>
            <li>
              <Link
                href={"admin-dashboard/blogs"}
                className="relative flex flex-col gap-2.5 text-hover-color justify-center items-center border-2 border-border-color rounded-lg p-5 overflow-hidden group duration-[0.4s] hover:text-second-bg hover:border-second-bg"
              >
                <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col gap-2.5 justify-center items-center text-second-color bg-second-bg duration-[0.4s] -translate-y-full group-hover:translate-y-0">
                  <span>{blogs.length}</span>
                  Blogs
                </div>
                <GrArticle className="text-3xl" />
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href={"admin-dashboard/users"}
                className="relative flex flex-col gap-2.5 text-hover-color justify-center items-center border-2 border-border-color rounded-lg p-5 overflow-hidden group duration-[0.4s] hover:text-second-bg hover:border-second-bg"
              >
                <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col gap-2.5 justify-center items-center text-second-color bg-second-bg duration-[0.4s] -translate-y-full group-hover:translate-y-0">
                  <span>{users.length}</span>
                  Users
                </div>
                <PiUsersThree className="text-3xl" />
                Users
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  dispatch(handleSelectedUser(null));
                }}
                href={"/login"}
                className="rounded-lg border-3 text-hover-color border-border-color p-5 flex flex-col gap-2.5 justify-center items-center duration-[0.4s] hover:border-second-bg hover:text-second-bg"
              >
                <IoLogOutOutline className="text-3xl" />
                <span className="text-xl">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
