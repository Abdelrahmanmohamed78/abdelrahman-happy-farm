"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

function ForgetPasswordPage() {
  const schema = z.object({
    email: z.email("Invalid Email Address"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  function submitData() {
    toast.success("Email Send Suucessfully!");
    redirect("/login");
  }

  return (
    <div className="pt-27.5">
      <div className="main-container py-10 text-center">
        <h3 className="text-3xl font-semibold mb-5">
          Enter Your Email To Reset Password
        </h3>
        <form
          onSubmit={handleSubmit(submitData)}
          method="POST"
        >
          <div className="holder relative flex mx-auto max-w-150 bg-second-color rounded-[50px] overflow-hidden">
            <input
              className="py-5 grow px-5 outline-0"
              type="email"
              id="resetPasswordEmail"
              placeholder="Enter Your Email..."
              {...register("email")}
            />
            <button
              type="submit"
              className="bg-second-bg text-sm font-bold text-second-color px-5 cursor-pointer duration-[0.4s] hover:opacity-[0.8]"
            >
              Reset Password
            </button>
          </div>
          {errors.email && <span className="block text-sm font-semibold text-red-500 italic mt-2.5">{errors.email.message}</span>}
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
