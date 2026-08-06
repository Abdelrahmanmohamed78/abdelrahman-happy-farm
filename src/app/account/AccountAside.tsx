"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { handleSelectedUser } from "../RTK/farmSlice";

function AccountAside() {
  const pathName = usePathname();
  const dispatch = useDispatch();

  return (
    <aside className="min-w-75 max-w-full lg:border-r lg:border-r-border-color lg:pr-5">
      <h3 className="font-semibold text-2xl text-main-color pb-2.5 mb-2.5 border-b border-b-border-color uppercase">
        My Account
      </h3>
      <ul className="flex flex-col gap-2.5">
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/account" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/account"}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/account/orders" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/account/orders"}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/account/accountDetails" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/account/accountDetails"}
          >
            Account Details
          </Link>
        </li>
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/account/wishlist" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/account/wishlist"}
          >
            Wishlist
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              dispatch(handleSelectedUser(null));
            }}
            className={`block font-semibold text-lg py-2.5 px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/"}
          >
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AccountAside;
