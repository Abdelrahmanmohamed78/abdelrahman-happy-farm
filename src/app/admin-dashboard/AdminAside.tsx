"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { handleSelectedUser } from "../RTK/farmSlice";

function AdminAside() {
  const pathName = usePathname();
  const dispatch = useDispatch();

  return (
    <aside className="md:min-w-75 md:w-75 md:border-r md:border-r-border-color md:pr-5">
      <h3 className="text-2xl font-semibold flex items-center gap-2.5 pb-2.5 border-b border-b-border-color mb-2.5">
        <Image
          className="w-12.5 h-12.5 rounded-[50%] object-cover"
          width={100}
          height={100}
          src={"/adminImage.jpeg"}
          alt="admin image"
        ></Image>
        Admin
      </h3>
      <ul className="flex flex-col gap-2.5">
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/admin-dashboard" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/admin-dashboard"}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/admin-dashboard/products" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/admin-dashboard/products"}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/admin-dashboard/blogs" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/admin-dashboard/blogs"}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className={`block font-semibold text-lg py-2.5 ${pathName === "/admin-dashboard/users" && "bg-border-color"} px-3.75 rounded-[10px] duration-[0.4s] hover:bg-border-color`}
            href={"/admin-dashboard/users"}
          >
            User
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

export default AdminAside;
