"use client";

import PageHeader from "@/app/components/PageHeader";
import AccountAside from "../AccountAside";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/RTK/store";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { handleUserDetails } from "@/app/RTK/farmSlice";

function AccountDetailsPage() {
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  useEffect(() => {
    if (selectedUser == null) {
      redirect("/");
    }
  }, [selectedUser]);
  const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string().min(2, "Username should be more than 2 characters"),
    email: z.email(),
    password: z
      .string()
      .min(8, "password should be more than 8 characters")
      .max(20, "password should be less than 20 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dispatch = useDispatch();

  function submitData(data: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }) {
    console.log(data);
    dispatch(
      handleUserDetails({
        id: selectedUser?.id,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    );
    toast.success("User Details Saved Successfully!");
  }

  return (
    <div className="pt-27.5">
      <PageHeader>My Account</PageHeader>
      <div className="main-container flex flex-col lg:flex-row gap-5 pb-10">
        <AccountAside></AccountAside>
        <div className="account-details-holder grow">
          <h3 className="text-2xl font-semibold text-main-color mb-5">
            Account Details
          </h3>
          <form
            method="POST"
            onSubmit={handleSubmit(submitData)}
            className="grid lg:grid-cols-2 gap-5"
          >
            <div className="firstName flex flex-col gap-1.25">
              <label
                className="font-semibold text-main-color flex gap-1.25"
                htmlFor="firstName"
              >
                First Name{" "}
                <span className="text-[12px] font-semibold text-hover-color italic">
                  ( optional )
                </span>
              </label>
              <input
                className="rounded-[50px] bg-second-color border border-border-color py-3 px-6 outline-0 grow"
                type="text"
                id="firstName"
                {...register("firstName")}
                defaultValue={
                  selectedUser?.firstName && selectedUser?.firstName
                }
              />
            </div>
            <div className="lastName flex flex-col gap-1.25">
              <label
                className="font-semibold text-main-color flex gap-1.25"
                htmlFor="lastName"
              >
                Last Name{" "}
                <span className="text-[12px] font-semibold text-hover-color italic">
                  ( optional )
                </span>
              </label>
              <input
                className="rounded-[50px] bg-second-color border border-border-color py-3 px-6 outline-0 grow"
                type="text"
                id="lastName"
                {...register("lastName")}
                defaultValue={selectedUser?.lastName ?? ""}
              />
            </div>
            <div className="username flex flex-col gap-1.25">
              <label
                className="font-semibold text-main-color flex gap-1.25"
                htmlFor="username"
              >
                Username <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="rounded-[50px] bg-second-color border border-border-color py-3 px-6 outline-0 grow"
                type="text"
                id="username"
                {...register("username")}
                defaultValue={selectedUser?.username ?? ""}
              />
              {errors.username && (
                <span className="text-sm text-red-500 italic font-bold">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="email flex flex-col gap-1.25">
              <label
                className="font-semibold text-main-color flex gap-1.25"
                htmlFor="email"
              >
                Email Address <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="rounded-[50px] bg-second-color border border-border-color py-3 px-6 outline-0 grow"
                type="email"
                id="email"
                {...register("email")}
                defaultValue={selectedUser?.email && selectedUser?.email}
              />
              {errors.email && (
                <span className="text-sm text-red-500 italic font-bold">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="password flex flex-col gap-1.25 lg:col-span-2">
              <label
                className="font-semibold text-main-color flex gap-1.25"
                htmlFor="password"
              >
                Password <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="input-holder grow relative">
                <input
                  className="rounded-[50px] bg-second-color border border-border-color py-3 px-6 outline-0 w-full"
                  type="password"
                  id="password"
                  {...register("password")}
                  defaultValue={
                    selectedUser?.password && selectedUser?.password
                  }
                />
                {errors.password && (
                  <span className="text-sm text-red-500 italic font-bold">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-fit font-semibold text-second-color bg-second-bg py-3 px-10 border-2 border-second-bg rounded-[50px] cursor-pointer duration-[0.4s] hover:bg-second-color hover:text-second-bg"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountDetailsPage;
