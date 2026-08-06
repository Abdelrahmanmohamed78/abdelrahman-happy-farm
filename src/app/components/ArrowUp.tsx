"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ArrowUp() {

  const [showArrowUp, setShowArrowUp] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY > 100) {
        setShowArrowUp(true);
      } else {
        setShowArrowUp(false);
      }
    }
  }, []);

  return (
    <div onClick={() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }} className={`fixed z-4 bottom-5 right-5 w-12.5 h-12.5 bg-border-color ${showArrowUp ? "visible translate-x-0 opacity-[1]" : "invisible translate-x-full opacity-0" } rounded-[50%] flex justify-center items-center text-2xl text-hover-color duration-[0.4s] cursor-pointer hover:bg-second-bg hover:text-second-color`}>
      <IoIosArrowUp />
    </div>
  );
}

export default ArrowUp;
