"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { FaXmark } from "react-icons/fa6";
import { handleDeliveryAside, handleShowOverlay } from "../RTK/farmSlice";
import Image from "next/image";

function DeliveryAside() {
  const showDeliveryAside = useSelector(
    (state: RootState) => state.showDeliveryAside,
  );
  const dispatch = useDispatch();

  return (
    <aside
      className={`delivery-aside fixed top-0 right-0 z-5 bg-second-color w-full md:w-150 h-full duration-[0.4s] ${showDeliveryAside ? "translate-x-0" : "translate-x-full"}`}
    >
      <p className="flex p-5 items-center justify-between text-2xl font-semibold border-b border-b-border-color">
        Delivery Details
        <span
          onClick={() => {
            dispatch(handleShowOverlay(false));
            dispatch(handleDeliveryAside(false));
          }}
          className="flex items-center gap-px text-lg font-semibold text-main-color cursor-pointer"
        >
          <FaXmark />
          Close
        </span>
      </p>
      <div className="main-container description-aside-holder pb-5 overflow-y-scroll">
        <p className="text-hover-color text-[17px] leading-normal font-semibold my-5">
          48 hours from the time of purchase to all locations
        </p>
        <div className="image-holder">
          <Image
            className="w-full h-auto rounded-lg"
            src={"/farm-product-delivery-details-opt.jpg"}
            width={200}
            height={200}
            alt="delivery-image"
          ></Image>
        </div>
        <p className="text-hover-color text-[17px] leading-normal font-semibold my-5">
          There’s lot of hate out there for a text that amounts to little more
          than garbled words in an old language. The villagers are out there
          with a vengeance to get that Frankenstein, wielding torches and
          pitchforks, wanting.
        </p>
        <div className="info-holder flex flex-col md:flex-row gap-10 md:items-center mt-7.5">
          <div className="box grow">
            <h3 className="font-semibold text-xl mb-5">
              When will my order ship?
            </h3>
            <ul className="flex flex-col gap-3 text-hover-color font-semibold">
              <li>We grow chickens</li>
              <li>Checking birds</li>
              <li>Manufacture of products</li>
              <li>Points of sale</li>
            </ul>
          </div>
          <div className="box grow">
            <h3 className="font-semibold text-xl mb-5">Delivery time</h3>
            <ul className="flex flex-col gap-3 text-hover-color font-semibold">
              <li>Agriculture products</li>
              <li>Excellent service</li>
              <li>Eco product</li>
              <li>Modern technique</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default DeliveryAside;
