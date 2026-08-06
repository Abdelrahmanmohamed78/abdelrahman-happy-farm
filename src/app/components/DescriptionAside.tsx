"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { FaXmark } from "react-icons/fa6";
import { handleDescriptionAside, handleShowOverlay } from "../RTK/farmSlice";
import Image from "next/image";

function DescriptionAside() {
  const showDescriptionAside = useSelector(
    (state: RootState) => state.showDescriptionAside,
  );
  const dispatch = useDispatch();

  return (
    <aside
      className={`description-aside fixed top-0 right-0 z-5 bg-second-color w-full md:w-150 h-full duration-[0.4s] ${showDescriptionAside ? "translate-x-0" : "translate-x-full"}`}
    >
      <p className="flex p-5 items-center justify-between text-2xl font-semibold border-b border-b-border-color">
        Description
        <span
          onClick={() => {
            dispatch(handleShowOverlay(false));
            dispatch(handleDescriptionAside(false));
          }}
          className="flex items-center gap-px text-lg font-semibold text-main-color cursor-pointer"
        >
          <FaXmark />
          Close
        </span>
      </p>
      <div className="main-container description-aside-holder pb-5 overflow-y-scroll">
        <p className="text-hover-color text-[17px] leading-normal font-semibold my-5">
          Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque
          ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia
          interesset consequuntur nec an. Sumo nibh repudiare at has, no pri
          eruditi percipit.
        </p>
        <div className="image-holder">
          <Image
            className="w-full h-auto rounded-lg"
            src={"/farm-product-description-opt.jpg"}
            width={200}
            height={200}
            alt="description-image"
          ></Image>
        </div>
        <p className="text-hover-color text-[17px] leading-normal font-semibold my-5">
          Aeterno ancillae conceptam quo ei. Pro dicta virtute tincidunt eu, cu
          scripta deterruisset nec, minimum reprimique conclusionemque ius an.
        </p>
        <div className="info-holder mt-7.5">
          <h3 className="font-semibold text-xl mb-5">
            Nutritional Information
          </h3>
          <table className="ino-table border border-border-color w-full text-center">
            <thead>
              <tr>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] bg-[#0000000d] text-left">
                  Per
                </td>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] bg-[#0000000d] ">
                  100g / 32g
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] text-left">
                  Energy
                </td>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] ">
                  347kcal / 116kcal
                </td>
              </tr>
              <tr>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] bg-[#0000000d] text-left">
                  Energy Kj
                </td>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] bg-[#0000000d] ">
                  1565Kj / 485Kj
                </td>
              </tr>
              <tr>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] text-left">
                  Fat
                </td>
                <td className="p-2.5 border border-border-color font-semibold text-[17px] ">
                  4.7g / 1.4g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="font-semibold text-xl my-5">Ingredients</h3>
        <p className="text-hover-color text-[17px] leading-normal font-semibold">
          100% fresh organic cow milk
        </p>
      </div>
    </aside>
  );
}

export default DescriptionAside;