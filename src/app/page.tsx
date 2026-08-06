import Image from "next/image";
import Link from "next/link";
import landingImg from "../../public//farm-home-image.png";
import ProductSwiper from "./components/ProductSwiper";
import CategoriesSection from "./components/Categories";
import VisitFarmSection from "./components/VisitFarm";
import FeaturesSection from "./components/FeaturesSection";
import SectionHeader from "./components/SectionHeader";
import ArticlesSection from "./components/ArticlesSection";

export default function Home() {
  return (
    <div>
      <h2 className="w-[75%] mx-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-main-color font-bold pt-27.5 pb-10 leading-[1.2]">
        The Highest Quality Products From a Organic Dairy Farm
      </h2>
      <div className="btns flex justify-center items-center gap-5">
        <Link
          className="rounded-[50px] border-2 border-second-bg bg-second-bg text-second-color text-sm font-semibold py-3 px-6 duration-[0.4s] hover:bg-transparent hover:text-second-bg"
          href={"/shop"}
        >
          To Shop
        </Link>
        <Link
          className="rounded-[50px] border-2 border-second-bg text-second-bg font-semibold text-sm py-3 px-6 duration-[0.4s] hover:bg-second-bg hover:text-second-color"
          href={"/about-us"}
        >
          About Farm
        </Link>
      </div>
      <div className="landing-image my-20 px-5">
        <Image className="mx-auto" src={landingImg} alt="landing image"></Image>
      </div>
      <SectionHeader>The Most Popular Of Dairy Products</SectionHeader>
      <ProductSwiper></ProductSwiper>
      <CategoriesSection></CategoriesSection>
      <VisitFarmSection></VisitFarmSection>
      <FeaturesSection></FeaturesSection>
      <SectionHeader>Customers Recommend These Products</SectionHeader>
      <ProductSwiper></ProductSwiper>
      <ArticlesSection></ArticlesSection>
    </div>
  );
}
