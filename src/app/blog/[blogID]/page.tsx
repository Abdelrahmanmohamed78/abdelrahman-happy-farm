"use client";

import PageHeader from "@/app/components/PageHeader";
import { RootState } from "@/app/RTK/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebookF } from "react-icons/fa";
import { RiTelegramFill, RiTwitterXFill } from "react-icons/ri";
import { TiSocialLinkedin, TiSocialPinterestCircular } from "react-icons/ti";
import { useSelector } from "react-redux";
import z from "zod";

function BlogDrtailsPage() {
  const blogs = useSelector((state: RootState) => state.articles);
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const { blogID } = useParams<{ blogID: string }>();
  const blogCategories = [
    ...new Set(
      blogs.map((blog) => {
        return blog.category;
      }),
    ),
  ];
  const schema = z.object({
    reply: z.string().min(3, "You Should Write More Than 3 characters!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  function submitData(data: { reply: string }) {
    if (selectedUser) {
      console.log(data);
    } else {
      toast.error("You Should Login First!");
    }
  }

  return (
    <div className="pt-27.5">
      <PageHeader>Blog</PageHeader>
      <div className="main-container py-10">
        {blogs.map((blog) => {
          if (+blog.id === +blogID) {
            return (
              <div
                className="blog-holder flex flex-col md:flex-row items-start gap-10"
                key={blog.id}
              >
                <div className="blog-details">
                  <span className="blogCategory block bg-second-bg text-second-color self-center text-[13px] font-bold rounded-[5px] w-fit py-1 px-3 mx-auto uppercase">
                    {blog.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold my-5 text-center">
                    {blog.title}
                  </h3>
                  <p className="flex items-center gap-1.25 text-hover-color font-semibold justify-center mb-5">
                    Posted by
                    <span className="flex items-center gap-1.25">
                      <Image
                        className="w-5 h-5 rounded-[50%]"
                        src={blog.author.image}
                        width={20}
                        height={20}
                        alt={blog.author.username}
                      ></Image>
                      {blog.author.username}
                    </span>
                    On
                    <span className="flex items-center gap-1.25">
                      <span>{blog.date.month}</span>
                      <span>{blog.date.day}, </span>
                      <span>{blog.date.year}</span>
                    </span>
                  </p>
                  <Image
                    className="w-full max-w-full rounded-[10px] mb-20"
                    src={blog.bannerImage}
                    width={200}
                    height={200}
                    alt={blog.title}
                  ></Image>
                  <div className="posts-holder flex flex-col gap-7.5">
                    {blog.posts.map((post, i) => {
                      return (
                        <div
                          className={`post flex flex-col lg:flex-row ${post.reversed && "flex-col-reverse lg:flex-row-reverse"} items-center gap-10`}
                          key={i}
                        >
                          <div className="text-holder lg:max-w-[50%]">
                            {post.header && (
                              <h3 className="text-2xl font-semibold mb-5">
                                {post.header}
                              </h3>
                            )}
                            <p className="leading-normal text-hover-color" dangerouslySetInnerHTML={{ __html: post.text}}>
                              
                            </p>
                          </div>
                          <Image
                            className="w-full max-w-full rounded-[10px]"
                            src={post.image}
                            width={200}
                            height={200}
                            alt="image post"
                          ></Image>
                        </div>
                      );
                    })}
                  </div>
                  <ul className="social-media-links flex items-center gap-2.5 mt-10">
                    <li className="w-10 h-10 text-lg cursor-pointer rounded-[50%] flex justify-center items-center text-second-color bg-[#365493]">
                      <FaFacebookF />
                    </li>
                    <li className="w-10 h-10 text-xl cursor-pointer rounded-[50%] flex justify-center items-center text-second-color bg-main-color">
                      <RiTwitterXFill />
                    </li>
                    <li className="w-10 h-10 text-2xl cursor-pointer rounded-[50%] flex justify-center items-center text-second-color bg-[#cb2027]">
                      <TiSocialPinterestCircular />
                    </li>
                    <li className="w-10 h-10 text-2xl cursor-pointer rounded-[50%] flex justify-center items-center text-second-color bg-[#0274b3]">
                      <TiSocialLinkedin />
                    </li>
                    <li className="w-10 h-10 text-lg cursor-pointer rounded-[50%] flex justify-center items-center text-second-color bg-[#37aee2]">
                      <RiTelegramFill />
                    </li>
                  </ul>
                  <div className="reply-holder mt-10">
                    <h3 className="text-2xl font-semibold">Leave a Reply</h3>
                    <p className="text-sm font-semibold text-hover-color flex gap-1 items-start my-5">
                      Required fields are marked{" "}
                      <span className="text-red-500 font-bold">*</span>
                    </p>
                    <form method="POST" onSubmit={handleSubmit(submitData)}>
                      <label
                        htmlFor="reply"
                        className="font-semibold flex gap-1 items-start mb-1.25"
                      >
                        Comment
                        <span className="text-red-500 font-bold">*</span>
                      </label>
                      <textarea
                        id="reply"
                        className="rounded-[10px] p-5 bg-second-color w-full resize-y min-h-50 outline-0"
                        {...register("reply")}
                      ></textarea>
                      {errors.reply && (
                        <span className="text-sm font-semibold italic text-red-500 mt-2.5">
                          {errors.reply.message}
                        </span>
                      )}
                      <button
                        className="text-[12px] block w-fit font-bold rounded-[50px] py-2 px-5 text-second-color border-2 border-second-bg bg-second-bg mt-2.5 cursor-pointer duration-[0.4s] hover:text-second-bg hover:bg-transparent"
                        type="submit"
                      >
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
                <aside className="min-w-67.5 sticky top-32.5">
                  <Image
                    className="w-43.75 h-43.75 rounded-[50%]"
                    src={blog.author.image}
                    width={100}
                    height={100}
                    alt={blog.author.username}
                  ></Image>
                  <p className="my-5 font-semibold text-xl">Marvin McKinney</p>
                  <p className="leading-normal text-hover-color font-semibold mb-5">
                    We have many years of experience and qualified specialists,
                    which allows us to manufacture high-quality products...
                  </p>
                  <ul className="categories flex flex-col gap-5 py-5 border-y border-y-border-color font-semibold mb-5">
                    <li className="text-lg text-main-color">Categories</li>
                    {blogCategories.map((blogCat, i) => {
                      if (blogCat !== blog.category) {
                        return (
                          <li className="text-hover-color" key={i}>
                            {blogCat}
                          </li>
                        );
                      }
                    })}
                  </ul>
                  <p className="my-5 font-semibold text-xl">Recent Posts</p>
                  <ul className="recent-blogs flex flex-col gap-5 font-semibold">
                    {blogs.map((el) => {
                      if (el.id !== blog.id) {
                        return (
                          <li key={el.id}>
                            <Link
                              href={`/blog/${el.id}`}
                              className="flex gap-2.5 items-start py-2.5"
                            >
                              <Image
                                className="rounded-[5px] w-15"
                                src={el.bannerImage}
                                width={100}
                                height={100}
                                alt={el.title}
                              ></Image>
                              <div className="blog-text">
                                <p className="font-semibold text-[16px] leading-[1.3] text-main-color capitalize">
                                  {el.title}
                                </p>
                                <span className="block text-hover-color text-sm font-semibold capitalize mt-1.25">
                                  {el.date.month} {el.date.day}, {el.date.year}
                                </span>
                              </div>
                            </Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </aside>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default BlogDrtailsPage;
