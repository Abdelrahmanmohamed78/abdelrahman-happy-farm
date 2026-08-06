"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { useEffect } from "react";
import {
  handleBlogEditAside,
  handleDeliveryAside,
  handleDescriptionAside,
  handleEditAside,
  handleProductAmount,
  handleSelectedProduct,
  handleSelectedProductToEdit,
  handleShowLinksAside,
  handleShowOverlay,
} from "../RTK/farmSlice";

function Overlay() {
  const showOverlay = useSelector((state: RootState) => state.showOverlay);
  const selectedProduct = useSelector((state: RootState) => state.selectedProduct);
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("showOverlay");
    } else {
      document.body.classList.remove("showOverlay");
    }
  }, [showOverlay]);
  return (
    <div
      onClick={() => {
        dispatch(handleShowOverlay(false));
        dispatch(handleShowLinksAside(false));
        dispatch(handleDescriptionAside(false));
        dispatch(handleDeliveryAside(false));
        dispatch(handleSelectedProductToEdit(null));
        dispatch(handleEditAside(false));
        dispatch(handleBlogEditAside(false));
        dispatch(handleProductAmount({ id: selectedProduct?.id, amount: selectedProduct?.productAmount }));
        dispatch(handleSelectedProduct(null));
      }}
      className={`fixed z-4 bg-[#2f2f2e6c] top-0 left-0 w-full h-full backdrop-blur-md ${showOverlay ? "block" : "hidden"}`}
    ></div>
  );
}

export default Overlay;
