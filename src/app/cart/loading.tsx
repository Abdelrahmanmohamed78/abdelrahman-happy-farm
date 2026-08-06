import Image from "next/image";
import React from "react";

function LoadingPage() {
  return (
    <div className="cow-logo w-full h-full flex flex-col gap-5 justify-center items-center text-3xl font-semibold text-hover-color italic">
      <Image className="" src={"/logo.svg"} width={100} height={100} alt="logo image"></Image>
      <p>Cart Loading...</p>
    </div>
  );
}

export default LoadingPage;
