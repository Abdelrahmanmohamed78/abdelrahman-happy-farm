"use client";

import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { Suspense, useState } from "react";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const [activeCat, setActiveCat] = useState("all");
  const products = useSelector((state: RootState) => state.products);
  const categories = products.map((product) => {
    return product.category;
  });
  const filteredProducts =
    activeCat.toLowerCase() === "all"
      ? products
      : products.filter((product) => {
          return product.category.toLowerCase() === activeCat.toLowerCase();
        });

  return (
    <div className="pt-27.5">
      <div className="main-container">
        <ul className="flex flex-wrap justify-center gap-2.5 my-5">
          {["All", ...new Set(categories)].map((category, i) => {
            return (
              <Suspense key={i} fallback={<p>Loading...</p>}>
                <li
                  onClick={() => {
                    setActiveCat(() => category.toLowerCase());
                  }}
                  className={`py-2 uppercase px-5 select-none rounded-sm text-main-color bg-border-color ${activeCat.toLowerCase() === category.toLowerCase() && "bg-second-bg text-second-color"} font-semibold text-[13px] cursor-pointer duration-[0.4s] hover:text-second-color hover:bg-second-bg`}
                >
                  {category}
                </li>
              </Suspense>
            );
          })}
        </ul>
        <ul className="products-grid pb-10">
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                handlewishlistBtnShow={true}
              ></ProductCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ShopPage;
