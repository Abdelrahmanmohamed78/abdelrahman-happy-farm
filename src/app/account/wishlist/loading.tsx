import Image from "next/image";

function LoadingPage() {
  return (
    <div className="cow-logo w-full h-full flex flex-col gap-5 justify-center items-center text-3xl font-semibold text-hover-color italic">
      <Image className="" src={"/logo.svg"} width={100} height={100} alt="logo image"></Image>
      <p>Wishlist Loading...</p>
    </div>
  );
}

export default LoadingPage;