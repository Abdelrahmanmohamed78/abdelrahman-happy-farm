"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

function CategoriesSection() {
  const products = useSelector((state: RootState) => state.products);
  const [catArr, setCatArr] = useState<string[]>([]);
  useEffect(() => {
    function callNow() {
      setCatArr(
        products.map((product) => {
          return product.category;
        }),
      );
    }
    callNow();
  }, [products]);

  return (
    <section className="main-container -mb-45 flex-col-reverse lg:flex-row holder-parent my-20 flex items-start md:gap-10 gap-15">
      <div className="holder-child grow">
        <h2 className="text-4xl xl:text-7xl font-bold mb-5 leading-[1.2]">
          Nutritious{" "}
          <Image
            className="inline"
            src={"/farm-dairy-cow-150x150.png"}
            width={100}
            height={100}
            alt="cow image"
          ></Image>{" "}
          Dairy Products to Your Table
        </h2>
        <ul className="categories flex items-center flex-wrap gap-5">
          {[...new Set(catArr)].map((el, i) => {
            return (
              <li key={i}>
                <Link
                  className="block capitalize whitespace-nowrap text-second-bg border-2 rounded-[50px] border-second-bg text-sm font-bold py-3 px-7 duration-[0.4s] hover:text-second-color hover:bg-second-bg tracking-[1px]"
                  href={"/"}
                >
                  {el}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card ml-5 relative p-10 rounded-lg bg-second-bg text-second-color basis-[75%]">
        <FaQuoteRight className="absolute top-10 right-10 text-4xl" />
        <div className="farmer flex gap-5 items-center">
          <Image
            src={"/farm-marvin-mckinney-80x80.png"}
            width={80}
            height={80}
            alt="farmer image"
          ></Image>
          <div className="text-holder">
            <h3 className="mb-5 text-3xl font-semibold">Marvin McKinney</h3>
            <p className="text-[17px] font-normal">Founder</p>
          </div>
        </div>
        <p className="leading-[1.3] mt-5 text-xl">
          We have many years of experience and qualified specialists, which
          allows us to manufacture high-quality products from environmentally
          friendly raw materials.
        </p>
      </div>
    </section>
  );
}

export default CategoriesSection;
