"use client";

import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

function ContactPage() {
  const schema = z.object({
    username: z.string().min(3, "Invalid Username"),
    email: z.email("Invalid Email"),
    message: z
      .string()
      .min(5, "Invalid Message: Message Should be at least 5 characters"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  function submitData() {
    toast.success("Message Sent Successfully");
    reset();
  }
  return (
    <div className="pt-27.5">
      <PageHeader>Contact Us</PageHeader>
      <div className="contact-holder main-container flex flex-col lg:flex-row gap-10 mb-15">
        <div className="image-holder rounded-[10px] overflow-hidden grow">
          <Image
            className="w-full"
            src={"/farm-contact-us-drawn-map-opt.jpg"}
            width={200}
            height={200}
            alt="map image"
          ></Image>
        </div>
        <div className="address-holder basis-[40%]">
          <h3 className="text-3xl text-second-bg font-semibold">Address</h3>
          <p className="underline font-semibold my-5">
            422 Old 27C, Mansoura, NY 14766, Egypt
          </p>
          <p className="font-semibold mb-10 text-[17px] leading-normal text-hover-color">
            Monday – Freeday 11:00 a.m. to 5:00 p.m. (By Appointment Only)
            Sunday, Closed
          </p>
          <div className="contact-holder flex gap-10 justify-between">
            <div className="box">
              <h3 className="text-3xl text-second-bg font-semibold mb-2.5">
                Phone
              </h3>
              <p className="underline font-semibold">(956) 238-7908</p>
            </div>
            <div className="box">
              <h3 className="text-3xl text-second-bg font-semibold mb-2.5">
                Email
              </h3>
              <Link
                href={"mailto:xtemos.studio@gmail.com"}
                className="underline font-semibold"
              >
                xtemos.studio@gmail.com
              </Link>
            </div>
          </div>
          <form
            className="flex flex-wrap gap-7.5 mt-10"
            method="POST"
            onSubmit={handleSubmit(submitData)}
          >
            <div className="username basis-[45%] grow flex flex-col gap-2.5">
              <label className="font-semibold block" htmlFor="username">
                Name
              </label>
              <input
                className="rounded-[50px] py-2 px-4 bg-second-color outline-0 grow border border-border-color"
                type="text"
                id="username"
                {...register("username")}
              />
              {errors.username && (
                <span className="text-sm text-red-500 font-semibold italic">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="email basis-[45%] grow flex flex-col gap-2.5">
              <label className="font-semibold block" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-[50px] py-2 px-4 bg-second-color outline-0 grow border border-border-color"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-sm text-red-500 font-semibold italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="message basis-full grow flex flex-col gap-2.5">
              <label className="font-semibold block" htmlFor="message">
                Message
              </label>
              <textarea
                className="resize-y min-h-50 rounded-[20px] py-2 px-4 bg-second-color outline-0 grow border border-border-color"
                id="message"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-sm text-red-500 font-semibold italic">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              className="text-second-color font-bold text-sm rounded-[50px] py-3 px-6 bg-second-bg w-fit block cursor-pointer duration-[0.4s] hover:opacity-[0.9]"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;