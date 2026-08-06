"use client";

import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import { handleAddUser } from "../RTK/farmSlice";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const schema = z.object({
    username: z
      .string()
      .min(2, { message: "Username must be more than 2 characters" }),
    email: z.email({ message: "Invalid Email" }),
    password: z
      .string()
      .min(8, { message: "Password must be more than 8 characters!" })
      .max(20, { message: "Password must be less than 20 characters!" }),
  });

  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  function submitData(data: {
    username: string;
    email: string;
    password: string;
  }) {
    if (users.length === 0) {
      dispatch(
        handleAddUser({
          ...data,
          id: new Date().getTime(),
          cart: [],
          wishlist: [],
          completedOrders: [],
        }),
      );
      toast.success("Registered Successfully, Login Now");
      redirect("/login");
    } else {
      const exist = users.some((user) => user?.email === data.email);
      if (exist) {
        toast.error("Email Exist Please Login!");
        redirect("/login");
      } else {
        dispatch(
          handleAddUser({
            ...data,
            id: new Date().getTime(),
            cart: [],
            wishlist: [],
            completedOrders: [],
          }),
        );
        toast.success("Registered Successfully, Login Now");
        redirect("/login");
      }
    }
  }

  return (
    <div className="pt-27.5">
      <PageHeader>My Account</PageHeader>
      <div className="main-container">
        <div className="login-holder lg:w-250 max-w-full mx-auto pb-10 flex flex-col md:flex-row justify-center">
          <form
            onSubmit={handleSubmit(submitData)}
            method="POST"
            className="grow w-full md:px-10 pb-10 md:pb-0"
          >
            <h3 className="text-3xl font-semibold mb-5">Register</h3>
            <div className="username flex flex-col gap-1 mb-5">
              <label
                className="text-[17px] font-semibold flex gap-1"
                htmlFor="username"
              >
                Username <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="rounded-[50px] py-2 px-6 bg-second-color outline-0 border border-border-color"
                type="text"
                id="username"
                {...register("username")}
              />
              {errors.username && (
                <span className="text-sm font-semibold italic text-red-500">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="email flex flex-col gap-1 mb-5">
              <label
                className="text-[17px] font-semibold flex gap-1"
                htmlFor="email"
              >
                Email Address <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                className="rounded-[50px] py-2 px-6 bg-second-color outline-0 border border-border-color"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-sm font-semibold italic text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="password flex flex-col gap-1 mb-5">
              <label
                className="text-[17px] font-semibold flex gap-1"
                htmlFor="password"
              >
                Password <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="password-holder relative">
                <input
                  className="rounded-[50px] w-full py-2 px-6 bg-second-color outline-0 border border-border-color"
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  {...register("password")}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute text-main-color top-[50%] translate-y-[-50%] right-5 cursor-pointer duration-[0.4s] hover:text-hover-color"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute text-main-color top-[50%] translate-y-[-50%] right-5 cursor-pointer duration-[0.4s] hover:text-hover-color"
                  />
                )}
              </div>
              {errors.password && (
                <span className="text-sm font-semibold italic text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              className="block w-full py-3 px-6 rounded-[50px] border-2 border-second-bg bg-second-bg text-sm text-second-color font-bold cursor-pointer duration-[0.4s] hover:text-second-bg hover:bg-transparent"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="text-holder text-center w-full pt-10 border-t border-t-border-color md:border-t-0 md:max-w-125 md:px-10 md:pt-0 md:border-l md:border-l-border-color ">
            <h3 className="text-3xl font-semibold mb-5">Register</h3>
            <p className="leading-normal text-hover-color font-semibold mb-5">
              Registering for this site allows you to access your order status
              and history. Just fill in the fields below, and we&apos;ll get a
              new account set up for you in no time. We will only ask you for
              information necessary to make the purchase process faster and
              easier.
            </p>
            <Link
              className="rounded-[50px] py-3 px-6 text-sm font-bold text-second-color w-fit block mx-auto bg-main-color duration-[0.4s] hover:opacity-[0.8]"
              href={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
