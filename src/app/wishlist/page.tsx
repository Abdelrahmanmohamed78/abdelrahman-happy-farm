"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { ProductProps } from "../types/types";
import { FaRegTrashCan } from "react-icons/fa6";
import { handleRemoveProductFromUserWishlist } from "../RTK/farmSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";

function WishlistPage() {
  const selectedUser = useSelector(
    (state: RootState) => state.selectedUser,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if(selectedUser == null) {
      redirect("/");
    }
  }, [selectedUser])
  return (
    <div className="pt-27.5 pb-10">
      <PageHeader>Wishlist</PageHeader>
      <div className="main-container">
        {selectedUser?.wishlist.length === 0 && (
          <div className="emptyWishlist sm:w-125 mx-auto text-center">
            <FaRegHeart className="text-7xl sm:text-9xl text-border-color mx-auto" />
            <h3 className="text-3xl sm:text-5xl font-semibold text-main-color my-5">
              This wishlist is empty.
            </h3>
            <p className="text-hover-color font-semibold my-5">
              You don&apos;t have any products in the wishlist yet. You will
              find a lot of interesting products on our &quot;Shop&quot; page.
            </p>
            <Link
              href={"/shop"}
              className="block w-fit py-3 px-6 text-sm font-bold text-second-color bg-second-bg mx-auto rounded-[50px]"
            >
              Return To Shop
            </Link>
          </div>
        )}
        {selectedUser?.wishlist.length !== 0 && (
          <div className="products-grid">
            {selectedUser?.wishlist.map((product: ProductProps) => {
              return (
                <div
                  key={product.id}
                  className="productCardHolder group/deleteProduct flex flex-col"
                >
                  <ProductCard
                    product={product}
                    handlewishlistBtnShow={false}
                  ></ProductCard>
                  <button onClick={() => {
                    dispatch(handleRemoveProductFromUserWishlist({id: selectedUser.id, productID: product.id}))
                  }} className="delete text-second-color pt-2.5 z-2 opacity-0 -translate-y-10 bg-red-500 font-bold block py-2 px-6 rounded-bl-[50px] rounded-br-[50px] cursor-pointer duration-[0.4s] hover:text-red-500 hover:bg-second-color group-hover/deleteProduct:-translate-y-1.25 group-hover/deleteProduct:opacity-100">
                    <FaRegTrashCan className="text-center mx-auto" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
