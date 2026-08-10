"use client";

import PageHeader from "@/app/components/PageHeader";
import { RootState } from "@/app/RTK/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminAside from "../AdminAside";
import HolderHeader from "../HolderHeader";
import {
  handleClearCart,
  handleClearWishlist,
  handleRemoveUser,
} from "@/app/RTK/farmSlice";
import toast from "react-hot-toast";

function AdminUsersPage() {
  const users = useSelector((state: RootState) => state.users);
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      selectedUser === null ||
      selectedUser.email !== "admin@gmail.com" ||
      selectedUser.password !== "12345678"
    ) {
      redirect("/");
    }
  }, [selectedUser]);
  return (
    <div className="pt-27.5">
      <PageHeader>Admin</PageHeader>
      <div className="main-container pb-20 flex flex-col md:flex-row gap-5">
        <AdminAside></AdminAside>
        <div className="users-holder overflow-auto grow">
          <HolderHeader>Admin Users</HolderHeader>
          {users.length === 0 ||
          (users.length === 1 &&
            users[0].email === "admin@gmail.com") ? (
            <h3 className="text-2xl font-semibold italic text-hover-color text-center mt-10">
              No Users Found...
            </h3>
          ) : (
            <div className="table-holder overflow-scroll select-none">
              <table className="users w-full min-w-300 border border-border-color">
                <thead>
                  <tr className="bg-second-bg text-second-color">
                    <td className="p-2.5 text-center">ID</td>
                    <td className="p-2.5 text-center">Username</td>
                    <td className="p-2.5 text-center">Email</td>
                    <td className="p-2.5 text-center">Products In Cart</td>
                    <td className="p-2.5 text-center">Products In Wishlist</td>
                    <td className="p-2.5 text-center">Controls</td>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <p>There Is No Users...</p>
                  ) : (
                    users.map((user, i) => {
                      if (user.email !== "admin@gmail.com") {
                        return (
                          <tr
                            key={user.id}
                            className={`${i % 2 == 0 && "bg-slate-200"}`}
                          >
                            <td className="p-2.5 border border-border-color text-center">
                              {user.id}
                            </td>
                            <td className="p-2.5 border border-border-color text-center">
                              {user.username}
                            </td>
                            <td className="p-2.5 border border-border-color text-center">
                              {user.email}
                            </td>
                            <td className="p-2.5 border border-border-color text-center">
                              {user.cart.length}
                            </td>
                            <td className="p-2.5 border border-border-color text-center">
                              {user.wishlist.length}
                            </td>
                            <td className="p-2.5 border border-border-color text-center flex flex-col gap-2.5">
                              <button
                                onClick={() =>
                                  user.email !== "admin@gmail.com"
                                    ? dispatch(handleRemoveUser(user.id))
                                    : toast.error("You Can`t Remove Admin")
                                }
                                className="text-[10px] block font-semibold bg-red-500 text-second-color py-0.5 px-1.5 rounded-[5px]"
                              >
                                Delete User
                              </button>
                              <button
                                onClick={() =>
                                  user.email !== "admin@gmail.com"
                                    ? dispatch(handleClearCart(user.id))
                                    : toast.error("You Can`t Remove Admin")
                                }
                                className="text-[10px] block font-semibold bg-green-500 text-second-color py-0.5 px-1.5 rounded-[5px]"
                              >
                                Clear Cart
                              </button>
                              <button
                                onClick={() =>
                                  user.email !== "admin@gmail.com"
                                    ? dispatch(handleClearWishlist(user.id))
                                    : toast.error("You Can`t Remove Admin")
                                }
                                className="text-[10px] block font-semibold bg-blue-500 text-second-color py-0.5 px-1.5 rounded-[5px]"
                              >
                                Clear Wishlist
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminUsersPage;
