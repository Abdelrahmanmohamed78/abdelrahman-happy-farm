"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { handleShowLinksAside, handleShowOverlay } from "../RTK/farmSlice";
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

function LinksAside() {
  const showLinksAside = useSelector(
    (state: RootState) => state.showLinksAside,
  );
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const products = useSelector((state: RootState) => state.products);
  const [searchVal, setSearchVal] = useState("");
  const filteredProducts = products.filter((product) => {
    return (
      product.productName.toLowerCase().indexOf(searchVal.toLowerCase()) > -1 &&
      product.productName
    );
  });
  const dispatch = useDispatch();
  return (
    <aside
      className={`side-bar fixed top-0 left-0 z-5 w-80 h-full bg-second-color duration-[0.4s] -translate-x-80 ${showLinksAside && "translate-x-0"}`}
    >
      <div className="search-holder text-hover-color flex items-center gap-5 py-5 px-3 border-b border-hover-color">
        <div className="search-input relative grow">
          <input
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
            className="w-full font-bold text-main-color outline-0 text-[15px] select-none"
            type="text"
            name="search"
            placeholder="Search for products"
            value={searchVal}
          />
          <HiMiniXMark
          onClick={() => setSearchVal("")}
            className={`absolute top-[50%] right-0 translate-y-[-50%] text-lg opacity-0 duration-[0.4s] hover:text-red-500 cursor-pointer ${searchVal.length > 0 && "opacity-[1]"}`}
          />
        </div>
        <CiSearch
          className={`pl-5 border border-transparent ${searchVal.length > 0 && "border-l-hover-color"} duration-[0.4s] text-hover-color w-12.5 text-2xl cursor-pointer`}
        />
      </div>
      <ul
        className={`${searchVal.length > 0 ? "flex" : "hidden"} flex-col search-results text-hover-color border-b border-b-hover-color`}
      >
        {filteredProducts.length > 0 ? (
          products.map((product) => {
            if (
              product.productName
                .toLowerCase()
                .indexOf(searchVal.toLowerCase()) > -1
            ) {
              return (
                <li
                  className="border-b border-b-hover-color px-5 py-2 text-sm font-semibold"
                  key={product.id}
                >
                  <Link
                    onClick={() => {
                      dispatch(handleShowLinksAside(false));
                      dispatch(handleShowOverlay(false));
                      setSearchVal("");
                    }}
                    href={`/products/${product.id}`}
                  >
                    {product.productName}
                  </Link>
                </li>
              );
            }
          })
        ) : (
          <li className="border-b border-b-hover-color px-5 py-2 text-sm font-semibold">
            Product Not Found
          </li>
        )}
      </ul>
      <ul className="links flex flex-col">
        <li>
          <Link
            onClick={() => {
              dispatch(handleShowOverlay(false));
              dispatch(handleShowLinksAside(false));
              setSearchVal("");
            }}
            className="flex items-center gap-2.5 p-5 border-b border-b-hover-color duration-[0.4s] hover:pl-7.5"
            href={"/"}
          >
            <IoHomeOutline />
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              dispatch(handleShowOverlay(false));
              dispatch(handleShowLinksAside(false));
              setSearchVal("");
            }}
            className="flex items-center gap-2.5 p-5 border-b border-b-hover-color duration-[0.4s] hover:pl-7.5"
            href={"/shop"}
          >
            <FiShoppingCart />
            Shop
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              dispatch(handleShowOverlay(false));
              dispatch(handleShowLinksAside(false));
              setSearchVal("");
            }}
            className="flex items-center gap-2.5 p-5 border-b border-b-hover-color duration-[0.4s] hover:pl-7.5"
            href={"/about-us"}
          >
            <PiUsersLight />
            About Us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              dispatch(handleShowOverlay(false));
              dispatch(handleShowLinksAside(false));
              setSearchVal("");
            }}
            className="flex items-center gap-2.5 p-5 border-b border-b-hover-color duration-[0.4s] hover:pl-7.5"
            href={"/contact-us"}
          >
            <LuPhoneCall />
            Contact Us
          </Link>
        </li>
        <li>
          <div
            onClick={() => {
              dispatch(handleShowOverlay(false));
              dispatch(handleShowLinksAside(false));
              setSearchVal("");
              if(selectedUser) {
                redirect("/wishlist")
              } else {
                toast.error("You Should Login First!")
              }
            }}
            className="flex items-center gap-2 p-5 border-b border-b-hover-color cursor-pointer duration-[0.4s] hover:pl-7.5"
          >
            <GoHeart />
            Wishlist
          </div>
        </li>
        <li>
          {selectedUser ? (
            <Link
              href={
                selectedUser.email === "admin@gmail.com" &&
                selectedUser.password === "12345678"
                  ? "/admin-dashboard"
                  : "/account"
              }
              onClick={() => {
                dispatch(handleShowOverlay(false));
                dispatch(handleShowLinksAside(false));
                setSearchVal("");
              }}
              className="flex items-center gap-2.5 p-5 duration-[0.4s] hover:pl-7.5"
            >
              <FiUser />
              My Account
            </Link>
          ) : (
            <Link
              onClick={() => {
                dispatch(handleShowOverlay(false));
                dispatch(handleShowLinksAside(false));
                setSearchVal("");
              }}
              className="flex items-center gap-2.5 p-5 duration-[0.4s] hover:pl-7.5"
              href={"/login"}
            >
              <FiUser />
              Login / Register
            </Link>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default LinksAside;
