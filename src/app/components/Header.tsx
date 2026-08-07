"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { GoHeart } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { HiBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { handleShowLinksAside, handleShowOverlay } from "../RTK/farmSlice";
import Image from "next/image";
import toast from "react-hot-toast";

function Header() {
  const pathName = usePathname();
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStikyHeader = () => {
      setIsSticky(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleStikyHeader);
  }, []);

  return (
    <header
      className={`header z-3 h-20 ${isSticky ? "stickey-header" : ""} bg-main-bg fixed w-full top-0 left-0 mt-10 duration-[0.4s] flex justify-between items-center px-4 border-b-2 border-second-bg`}
    >
      <HiBars3
        onClick={() => {
          dispatch(handleShowLinksAside(true));
          dispatch(handleShowOverlay(true));
        }}
        className="md:hidden text-2xl cursor-pointer duration-[0.4s] hover:text-hover-color"
      />
      <nav className="hidden md:block">
        <ul className="flex gap-7 justify-center items-center">
          <li>
            <Link
              className={`block uppercase text-[13px] duration-[0.4s] hover:text-second-bg font-semibold ${pathName === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`"block uppercase text-[13px] duration-[0.4s] hover:text-second-bg font-semibold ${pathName === "/shop" ? "active" : ""}`}
              href="/shop"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className={`"block uppercase text-[13px] duration-[0.4s] hover:text-second-bg font-semibold ${pathName === "/about-us" ? "active" : ""}`}
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`"block uppercase text-[13px] duration-[0.4s] hover:text-second-bg font-semibold ${pathName === "/contact-us" ? "active" : ""}`}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <Link className="font-bold" href={"/"}>
        <Image
          src={"/icon.svg"}
          width={50}
          height={50}
          alt="logo image"
          priority
        ></Image>
      </Link>
      <div className="other-links flex items-center gap-10">
        {selectedUser ? (
          <Link
            href={
              selectedUser.email === "admin@gmail.com" &&
              selectedUser.password === "12345678"
                ? "/admin-dashboard"
                : "/account"
            }
            className="hidden md:block duration-[0.4s] hover:text-hover-color font-semibold"
          >
            My Account
          </Link>
        ) : (
          <Link
            className="hidden md:block duration-[0.4s] hover:text-hover-color font-semibold"
            href={"/login"}
          >
            Login / Register
          </Link>
        )}
        <div
          className="hidden md:block relative text-xl duration-[0.4s] hover:text-hover-color cursor-pointer"
          onClick={() =>
            selectedUser
              ? redirect("/wishlist")
              : toast.error("You Should Login First")
          }
        >
          {selectedUser && selectedUser?.wishlist?.length > 0 && (
            <span className="absolute -top-3 -right-3 rounded-[50%] w-4 h-4 flex justify-center items-center bg-second-bg text-second-color text-[12px] font-semibold">
              {selectedUser?.wishlist.length}
            </span>
          )}
          <GoHeart />
        </div>
        <div
          onClick={() =>
            selectedUser
              ? redirect("/cart")
              : toast.error("You Should Login First")
          }
        >
          <RiShoppingCartLine className="text-xl cursor-pointer duration-[0.4s] hover:text-hover-color" />
        </div>
      </div>
    </header>
  );
}

export default Header;
