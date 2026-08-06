"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function StarterLoadingPage() {
  const [hideLoadingPage, setHideLoadingPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHideLoadingPage(true);
      document.body.classList.remove("hide");
    }, 2000);
  });
  return (
    <div
      className={`bg-main-bg fixed flex flex-col gap-5 justify-center items-center top-0 left-0 w-full h-full duration-[0.4s] ${hideLoadingPage ? "invisible opacity-0" : "visible opacity-100"} z-10`}
    >
      <Image className="loading-image" src={"/logo.svg"} width={100} height={100} alt="logo image"></Image>
      <p className="text-4xl text-second-bg font-semibold">Happy Farm</p>
    </div>
  );
}

export default StarterLoadingPage;
