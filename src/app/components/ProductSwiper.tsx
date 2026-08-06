"use client";

import { useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import ProductCard from "./ProductCard";

function ProductSwiper() {
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className="main-container px-5">
      <ul className="products-grid">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} handlewishlistBtnShow={true}></ProductCard>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductSwiper;
