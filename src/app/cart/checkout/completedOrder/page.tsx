"use client";

import { RootState } from "@/app/RTK/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function CompletedOrderPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);

  useEffect(() => {
    if (selectedUser === null) {
      redirect("/");
    }
    if (selectedUser.completedOrders?.length === 0) {
      redirect("/");
    }
  }, [selectedUser]);
  return (
    <div className="pt-27.5">
      <p className="p-5 text-3xl italic border-3 border-green-600 border-dashed text-green-600 font-bold w-fit mx-auto rounded-[10px] my-10">
        Order Completed Successfully🎉
      </p>
      <p className="text-xl text-center text-hover-color font-semibold mb-20">
        Your Order No:{" "}
        <span className="text-second-bg font-bold">
          {selectedUser !== null &&
            selectedUser.completedOrders &&
            selectedUser.completedOrders[
              selectedUser?.completedOrders.length - 1
            ].completedID}
          {}
        </span>
      </p>
      <p className="text-lg text-second-bg italic font-semibold text-center mb-10">
        Check Your Email Message Box
      </p>
      <p className="text-sm font-semibold text-hover-color text-center mb-5">
        Thanks For Choose Us, See You Later❤️
      </p>
    </div>
  );
}

export default CompletedOrderPage;
