"use client";

import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RTK/store";
import {
  handleBlogEditAside,
  handleEditedBlog,
  handleShowOverlay,
} from "../RTK/farmSlice";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

function BlogEditAside() {
  const showBlogEditAside = useSelector(
    (state: RootState) => state.showBlogEditAside,
  );
  const selectedBlogToEdit = useSelector(
    (state: RootState) => state.selectedBlogToEdit,
  );
  const monthNumber =
    new Date(
      `${selectedBlogToEdit?.date.month} ${selectedBlogToEdit?.date.day}, ${selectedBlogToEdit?.date.year}`,
    ).getMonth() + 1;

  const dispatch = useDispatch();
  const schema = z.object({
    title: z.string().min(3, "Invalid Blog Title"),
    category: z.string(),
    blogDatePicker: z.string(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: selectedBlogToEdit?.title,
      category: selectedBlogToEdit?.category,
    },
  });
  function submitData(data: {
    title: string;
    category: string;
    blogDatePicker: string;
  }) {
    if (selectedBlogToEdit) {
      dispatch(
        handleEditedBlog({
          id: selectedBlogToEdit.id,
          title: data.title,
          category: data.category,
          date: {
            day: data.blogDatePicker.split("-")[2],
            month: new Date(
              new Date().getFullYear(),
              +data.blogDatePicker.split("-")[1] - 1,
            ).toLocaleString("en-US", {
              month: "long",
            }),
            year: data.blogDatePicker.split("-")[0],
          },
        }),
      );
      dispatch(handleShowOverlay(false));
      dispatch(handleBlogEditAside(false));
      reset();
    }
  }
  useEffect(() => {
    if (selectedBlogToEdit) {
      reset({
        title: selectedBlogToEdit.title,
        category: selectedBlogToEdit.category,
        blogDatePicker: `${selectedBlogToEdit.date.year}-${monthNumber > 9 ? monthNumber : `0${+monthNumber}`}-${+selectedBlogToEdit.date.day > 9 ? +selectedBlogToEdit.date.day : `0${+selectedBlogToEdit.date.day}`}`,
      });
    }
  }, [selectedBlogToEdit, reset, monthNumber]);
  return (
    <aside
      className={`delivery-aside fixed top-0 right-0 z-5 bg-second-color w-full md:w-150 h-full duration-[0.4s] ${showBlogEditAside ? "translate-x-0" : "translate-x-full"}`}
    >
      <p className="flex p-5 items-center justify-between text-2xl font-semibold border-b border-b-border-color">
        Blog Details
        <span
          onClick={() => {
            dispatch(handleShowOverlay(false));
            dispatch(handleBlogEditAside(false));
          }}
          className="flex items-center gap-px text-lg font-semibold text-main-color cursor-pointer"
        >
          <FaXmark />
          Close
        </span>
      </p>
      <form
        onSubmit={handleSubmit(submitData)}
        method="POST"
        className="p-5 flex flex-col gap-5"
      >
        <div className="blog-title-holder flex flex-col gap-1.25">
          <label className="flex gap-1.25" htmlFor="blogTitle">
            Blog Title <span className="font-bold text-red-500">*</span>
          </label>
          <input
            className="px-4 py-3 rounded-[50px] bg-second-color border border-border-color outline-0"
            type="text"
            id="blogTitle"
            {...register("title")}
          />
          {errors.title && (
            <span className="text-sm italic font-semibold text-red-500">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="Blog-category-holder flex flex-col gap-1.25">
          <label className="flex gap-1.25" htmlFor="blogCategory">
            Blog Category <span className="font-bold text-red-500">*</span>
          </label>
          <select
            className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
            id="blogCategory"
            {...register("category")}
          >
            <option value="Forage & Silage">Forage & Silage</option>
            <option value="Organic">Organic</option>
            <option value="Food Safety">Food Safety</option>
            <option value="Agroecology">Agroecology</option>
          </select>
        </div>
        <div className="blog-datePicker-holder flex flex-col gap-1.25">
          <label className="flex gap-1.25" htmlFor="blogDatePicker">
            Blog Date <span className="font-bold text-red-500">*</span>
          </label>
          <input
            className="px-4 py-3 rounded-[50px] bg-second-color border border-border-color outline-0"
            type="date"
            id="blogDatePicker"
            {...register("blogDatePicker")}
          />
          {errors.blogDatePicker && (
            <span className="text-sm italic font-semibold text-red-500">
              {errors.blogDatePicker.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="text-sm bg-second-bg cursor-pointer rounded-[50px] text-second-color font-semibold py-3 px-6 border-2 border-second-bg duration-[0.4s] hover:text-second-bg hover:bg-transparent"
        >
          Save Edits
        </button>
      </form>
    </aside>
  );
}

export default BlogEditAside;