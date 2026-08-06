"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  handleEditAside,
  handleEditedProduct,
  handleShowOverlay,
} from "../RTK/farmSlice";
import { FaXmark } from "react-icons/fa6";
import { RootState } from "../RTK/store";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import toast from "react-hot-toast";

function ProductEditAside() {
  const showProductEditAside = useSelector(
    (state: RootState) => state.showProductEditAside,
  );
  const selectedProductToEdit = useSelector(
    (state: RootState) => state.selectedProductToEdit,
  );
  const dispatch = useDispatch();
  const schema = z.object({
    productName: z.string().min(2, "Invalid Product Name"),
    productPrice: z.coerce.number().min(1, "Invalid Product Price"),
  });
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  function submitData(data: {
    productName: string,
    productPrice: number
  }) {
    if (selectedProductToEdit) {
      dispatch(
        handleEditedProduct({
          id: selectedProductToEdit.id,
          productName: data.productName,
          productPrice: data.productPrice,
        }),
      );
      dispatch(handleShowOverlay(false));
      dispatch(handleEditAside(false));
      reset();
      toast.success("Product Edited Successfully!");
    }
  }
  useEffect(() => {
    if (selectedProductToEdit) {
      reset({
        productName: selectedProductToEdit.productName,
        productPrice: selectedProductToEdit.productPrice,
      });
    }
  }, [selectedProductToEdit, reset]);
  return (
    <aside
      className={`delivery-aside fixed top-0 right-0 z-5 bg-second-color w-full md:w-150 h-full duration-[0.4s] ${showProductEditAside ? "translate-x-0" : "translate-x-full"}`}
    >
      <p className="flex p-5 items-center justify-between text-2xl font-semibold border-b border-b-border-color">
        Product Details
        <span
          onClick={() => {
            dispatch(handleShowOverlay(false));
            dispatch(handleEditAside(false));
          }}
          className="flex items-center gap-px text-lg font-semibold text-main-color cursor-pointer"
        >
          <FaXmark />
          Close
        </span>
      </p>
      <form
        onSubmit={handleSubmit(submitData)}
        method="POST"
        className="p-5 flex flex-col gap-5"
      >
        <div className="product-name-holder flex flex-col gap-1.25">
          <label className="flex gap-1.25" htmlFor="productName">
            Product Name <span className="font-bold text-red-500">*</span>
          </label>
          <input
            className="px-4 py-3 rounded-[50px] bg-second-color border border-border-color outline-0"
            type="text"
            id="productName"
            {...register("productName")}
          />
        </div>
        <div className="product-price-holder flex flex-col gap-1.25">
          <label className="flex gap-1.25" htmlFor="productPrice">
            Product Price <span className="font-bold text-red-500">*</span>
          </label>
          <input
            className="px-4 py-3 rounded-[50px] bg-second-color border border-border-color outline-0"
            type="text"
            id="productPrice"
            {...register("productPrice")}
          />
        </div>
        <button
          type="submit"
          className="text-sm bg-second-bg cursor-pointer rounded-[50px] text-second-color font-semibold py-3 px-6 border-2 border-second-bg duration-[0.4s] hover:text-second-bg hover:bg-transparent"
        >
          Save Edits
        </button>
      </form>
    </aside>
  );
}

export default ProductEditAside;
