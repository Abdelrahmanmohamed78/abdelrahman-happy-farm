"use client";

import PageHeader from "@/app/components/PageHeader";
import { RootState } from "@/app/RTK/store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminAside from "../AdminAside";
import HolderHeader from "../HolderHeader";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  addBlogs,
  handleBlogEditAside,
  handleSelectedBlogToEdit,
  handleShowOverlay,
  removeBlogs,
} from "@/app/RTK/farmSlice";
import { CiEdit } from "react-icons/ci";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import BlogEditAside from "@/app/components/BlogEditAside";

function AdminBlogsPage() {
  const [showAddBlogForm, setShowAddBlogForm] = useState(false);
  const [bannerImage, setBannerImage] = useState("");
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const blogs = useSelector((state: RootState) => state.articles);
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
  } = useForm({ resolver: zodResolver(schema) });

  function submitData(data: {
    title: string;
    category: string;
    blogDatePicker: string,
  }) {
    if (bannerImage === "") {
      toast.error("You Should Upload Banner Image!");
    } else {
      dispatch(
        addBlogs({
          id: new Date().getTime(),
          title: data.title,
          category: data.category,
          date: {
            day: data.blogDatePicker.split("-")[2],
            month: new Date(+data.blogDatePicker.split("-")[2], +data.blogDatePicker.split("-")[1] - 1).toLocaleString("en-US", {
              month: "long",
            }),
            year: data.blogDatePicker.split("-")[0],
          },
          author: {
            image: "/farm-marvin-mckinney-80x80.png",
            username: "Mr. Mackay",
          },
          bannerImage: bannerImage,
          posts: [
            {
              header: "",
              text: "If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.",
              image: "/farm-single-post-image-1.jpg",
              reversed: false,
            },
            {
              header: "Feed efficiency comes into focus",
              text: "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
              image: "/farm-single-post-image-1.jpg",
              reversed: true,
            },
            {
              header: "More refined results",
              text: `You made all the required mock ups for <span className="font-bold text-second-bg">commissioned layout, got all the approvals,</span> built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client’s needs. Then the question arises: where’s the content? Not there yet? <span className="font-bold">That’s not so bad, there’s dummy copy to the rescue.</span> But worse, what if the fish doesn’t fit in the can, the foot’s to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can’t quite tell right now, but they’re unhappy, somehow. A client that’s unhappy for a reason is a problem, a client that’s unhappy though he or her can’t quite put a finger on it is worse.`,
              image: "/farm-single-post-image-4-700x665.jpg",
              reversed: false,
            },
          ],
        }),
      );
      toast.success("Blog Added Successfully!");
      setShowAddBlogForm(false);
      reset();
      setBannerImage("");
    }
  }

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
      <BlogEditAside></BlogEditAside>
      <div className="main-container pb-20 flex flex-col md:flex-row gap-5">
        <AdminAside></AdminAside>
        <div className="blogs-holder grow">
          <HolderHeader>Admin Blogs</HolderHeader>
          {blogs.length === 0 ? (
            <p className="text-2xl font-semibold italic text-hover-color text-center">
              There Is No Blogs...
            </p>
          ) : (
            <ul className="blogs-grid holder-grid">
              {blogs.map((blog) => {
                return (
                  <li
                    key={blog.id}
                    className="box bg-second-color relative rounded-[10px] overflow-hidden"
                  >
                    <div className="date-holder z-1 absolute top-2.5 left-2.5 rounded-[5px] w-12.5 h-12.5 flex justify-center items-center flex-col font-semibold p-1.5 bg-second-color">
                      <span className="text-[22px]">{blog.date.day}</span>
                      <span className="uppercase text-[12px] mb-1 font-bold">
                        {blog.date.month.slice(0, 3)}
                      </span>
                    </div>
                    <div className="block group overflow-hidden">
                      <Image
                        className="w-full duration-[0.4s] group-hover:scale-[1.05]"
                        src={blog.bannerImage}
                        width={200}
                        height={200}
                        alt={blog.title}
                      ></Image>
                    </div>
                    <div className="details-holder px-5 md:px-7.5 pt-3 pb-5 text-center">
                      <span className="relative bg-second-bg rounded-lg block w-fit mx-auto text-second-color font-bold py-1 px-3 text-[12px] uppercase -mt-6.25 z-1">
                        {blog.category}
                      </span>
                      <h2 className="text-2xl font-semibold my-2 capitalize">
                        {blog.title}
                      </h2>
                      <div className="text-hover-color font-semibold flex items-center gap-1 mt-5 justify-center">
                        Posted by
                        <Image
                          className="w-3.75 h-3.75 rounded-[50%]"
                          width={100}
                          height={100}
                          src={blog.author.image}
                          alt={blog.author.username}
                        ></Image>
                        {blog.author.username}
                      </div>
                      <p className="leading-normal font-semibold text-hover-color my-2.5">
                        {blog.posts[0].text.slice(0, 105)}...
                      </p>
                    </div>
                    <div className="btns flex gap-5 p-5 mt-2.5">
                      <button
                        onClick={() => dispatch(removeBlogs(blog.id))}
                        className="text-sm text-second-color py-1 px-3 font-bold rounded-[5px] bg-red-600 border-2 border-red-600 grow cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-red-600"
                      >
                        <FaRegTrashCan className="mx-auto text-lg" />
                      </button>
                      <button
                        onClick={() => {
                          dispatch(handleShowOverlay(true));
                          dispatch(handleBlogEditAside(true));
                          dispatch(handleSelectedBlogToEdit(blog));
                        }}
                        className="text-sm text-second-color py-1 px-3 font-bold rounded-[5px] bg-green-600 border-2 border-green-600 grow cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-green-600"
                      >
                        <CiEdit className="mx-auto text-lg" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <button
            onClick={() => setShowAddBlogForm(!showAddBlogForm)}
            className="text-sm text-second-color font-semibold py-3 px-10 my-5 rounded-lg bg-second-bg border-2 border-second-bg duration-[0.4s] cursor-pointer hover:bg-transparent hover:text-second-bg"
          >
            {showAddBlogForm ? "Hide" : "Show"} Add Blog Form
          </button>
          <form
            method="POST"
            className={`grid justify-center items-center grid-cols-1 lg:grid-cols-2 gap-5 ${showAddBlogForm ? "grid" : "hidden"}`}
            onSubmit={handleSubmit(submitData)}
          >
            <div className="blogTitle-holder flex flex-col lg:col-span-2 gap-0.5">
              <label htmlFor="blogTitle" className="flex gap-0.5">
                Blog Title <span className="font-bold text-red-500">*</span>
              </label>
              <input
                className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
                type="text"
                id="blogTitle"
                {...register("title")}
              />
              {errors.title && (
                <span className="text-sm font-semibold italic text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="blogCategory-holder flex flex-col lg:col-span-2 gap-0.5">
              <label htmlFor="blogCategory" className="flex gap-0.5">
                Blog Category <span className="font-bold text-red-500">*</span>
              </label>
              <select
                {...register("category")}
                className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
                id="blogCategory"
              >
                <option value="Forage & Silage">Forage & Silage</option>
                <option value="Organic">Organic</option>
                <option value="Food Safety">Food Safety</option>
                <option value="Agroecology">Agroecology</option>
              </select>
            </div>
            <div className="blogDatePicker-holder flex flex-col lg:col-span-2 gap-0.5">
              <label htmlFor="blogDatePicker" className="flex gap-0.5">
                Blog Day <span className="font-bold text-red-500">*</span>
              </label>
              <input
                className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
                type="date"
                id="blogDatePicker"
                {...register("blogDatePicker")}
                defaultValue={`${new Date().getFullYear()}-${+new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : `0${new Date().getMonth() + 1}`}-${new Date().getDate() > 9 ? new Date().getDate() : `0${new Date().getDate()}`}`}
              />
              {errors.blogDatePicker && (
                <span className="text-sm font-semibold italic text-red-500">
                  {errors.blogDatePicker.message}
                </span>
              )}
            </div>
            <div className="bannerImage-holder flex flex-col justify-center items-center lg:col-span-2 gap-2.5">
              <label htmlFor="bannerImage flex gap-0.5">
                Banner Image <span className="font-bold text-red-500">*</span>
              </label>
              <label className="cursor-pointer" htmlFor="bannerImage">
                <div className="w-50 h-50 border-2 border-border-color rounded-lg border-dashed relative overflow-hidden">
                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-hover-color font-semibold italic whitespace-nowrap z-[-1]">
                    Select Image Banner
                  </span>
                  {bannerImage && (
                    <Image
                      className="w-full h-full object-cover z-1"
                      src={bannerImage}
                      width={100}
                      height={100}
                      alt="banner image"
                    ></Image>
                  )}
                </div>
                <input
                  onChange={(e) => {
                    if (e.target.files) {
                      setBannerImage(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                  type="file"
                  className="hidden"
                  id="bannerImage"
                />
              </label>
            </div>
            <button
              className="px-6 py-3 font-semibold w-fit mx-auto lg:col-span-2 mt-10 text-sm text-second-color bg-second-bg rounded-[50px] border-2 border-second-bg cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-second-bg"
              type="submit"
            >
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminBlogsPage;