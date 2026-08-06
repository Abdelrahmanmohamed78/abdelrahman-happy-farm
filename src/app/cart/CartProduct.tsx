"use client";

import Image from "next/image";
import { ProductProps } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { handleProductAmount, handleSelectedProduct, RemoveFromCart } from "../RTK/farmSlice";
import { RootState } from "../RTK/store";

function CartProduct({ product }: { product:ProductProps }) {
  const selectedUser = useSelector(((state: RootState) => state.selectedUser));
  const users = useSelector(((state: RootState) => state.users));
  const amountVal = product.productAmount
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        console.log(users);
        dispatch(RemoveFromCart({ id: selectedUser?.id, productId: product.id}));
        dispatch(handleProductAmount({id: product.id, amount: 1}));
        dispatch(handleSelectedProduct(null));
        console.log(users);
      }}
      className="relative bg-second-color rounded-lg overflow-hidden select-none group"
    >
      <Image
        src={product.images[0]}
        width={200}
        height={200}
        alt={product.productName}
      ></Image>
      <p className="my-5 text-main-color font-semibold">
        {product.productName}
      </p>
      <span className="text-xl text-second-bg font-bold">
        {product.productPrice}
      </span>
      <p>{amountVal}</p>
    </li>
  );
}

export default CartProduct;
