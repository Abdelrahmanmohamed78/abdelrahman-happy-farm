"use client";

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";

function FooterSection() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  return (
    <footer className="footer pt-10 bg-second-bg">
      <div className="main-container">
        <div className="community text-second-color flex flex-col xl:flex-row justify-between items-start xl:items-end gap-5 pb-10">
          <div className="box">
            <SectionHeader>
              Join Our Communities On Social Networks
            </SectionHeader>
            <ul className="social-links flex items-center gap-1.25">
              <li>
                <Link
                  href={"https://facebook.com"}
                  className="w-10 h-10 rounded-[50%] flex justify-center items-center text-xl bg-[#365493] duration-[0.4s] hover:opacity-[0.7]"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://x.com"}
                  className="w-10 h-10 rounded-[50%] flex justify-center items-center text-xl bg-main-color duration-[0.4s] hover:opacity-[0.7]"
                >
                  <RiTwitterXFill />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.instgram.com"}
                  className="w-10 h-10 rounded-[50%] flex justify-center items-center text-xl bg-[#774430] duration-[0.4s] hover:opacity-[0.7]"
                >
                  <IoLogoInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <ul className="box grow border-b-2 border-second-color flex justify-start xl:justify-end flex-wrap gap-5 pb-5 uppercase">
            <li>
              <Link
                className="text-md md:text-lg font-semibold flex gap-2.5 items-center duration-[0.4s] hover:opacity-[0.4]"
                href={"/shop"}
              >
                Shop
                <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                className="text-md md:text-xl font-semibold flex gap-2.5 items-center duration-[0.4s] hover:opacity-[0.4]"
                href={"/about-us"}
              >
                About Us
                <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                className="text-md md:text-xl font-semibold flex gap-2.5 items-center duration-[0.4s] hover:opacity-[0.4]"
                href={"/contact-us"}
              >
                Contact Us
                <FaArrowUpRightFromSquare />
              </Link>
            </li>
            <li>
              <Link
                className="text-md md:text-xl font-semibold flex gap-2.5 items-center duration-[0.4s] hover:opacity-[0.4]"
                href={`${selectedUser ? selectedUser.email === "admin@gmail.com" && selectedUser.password === "12345678" ? "/admin-dashboard" : "/account" : "/login"}`}
              >
                {selectedUser ? "My Account" : "Login / Register"}
                <FaArrowUpRightFromSquare />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-image">
          <Image
            className="w-full"
            width={200}
            height={200}
            src={"/farm-footer-logo.svg"}
            alt="footer image"
          ></Image>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
