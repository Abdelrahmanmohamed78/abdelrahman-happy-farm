"use client";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { RootState } from "../RTK/store";
import Image from "next/image";
import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";

function ArticlesSection() {
  const articles = useSelector((state: RootState) => state.articles);
  return (
    <section className="py-20 main-container">
      <SectionHeader>Our Articles</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {articles.map((article) => {
          return (
            <div
              key={article.id}
              className="box bg-second-color relative rounded-[10px] overflow-hidden"
            >
              <div className="date-holder z-1 absolute top-2.5 left-2.5 rounded-[5px] w-12.5 h-12.5 flex justify-center items-center flex-col font-semibold p-1.5 bg-second-color">
                <span className="text-[22px]">{article.date.day}</span>
                <span className="uppercase text-[12px] mb-1 font-bold">
                  {article.date.month.slice(0, 3)}
                </span>
              </div>
              <Link href={`/blog/${article.id}`} className="block group overflow-hidden">
                <Image
                  className="w-full duration-[0.4s] group-hover:scale-[1.05]"
                  src={article.bannerImage}
                  width={200}
                  height={200}
                  alt={article.title}
                ></Image>
              </Link>
              <div className="details-holder px-7.5 pt-3 pb-5 text-center">
                <span className="relative bg-second-bg rounded-lg block w-fit mx-auto text-second-color font-bold py-1 px-3 text-[12px] uppercase -mt-6.25 z-1">
                  {article.category}
                </span>
                <Link href={`/blog/${article.id}`} className="duration-[0.4s] hover:opacity-[0.5]">
                  <h2 className="text-2xl font-semibold my-2 capitalize">
                    {article.title}
                  </h2>
                </Link>
                <div className="text-hover-color font-semibold flex items-center gap-1 mt-5 justify-center">
                  Posted by
                  <Image
                    className="w-3.75 h-3.75 rounded-[50%]"
                    width={100}
                    height={100}
                    src={article.author.image}
                    alt={article.author.username}
                  ></Image>
                  {article.author.username}
                  <div className="share-holder">
                    <ul className="social-icons flex items-center gap-1 bg-main-color text-second-color">
                      <li></li>
                    </ul>
                    <IoShareSocial className="text-xl" />
                  </div>
                  <div className="message-holder relative">
                    <TiMessage className="text-xl" />
                    <span className="absolute -top-1 bg-second-bg -right-1 text-second-color w-3.75 h-3.75 rounded-[50%] flex justify-center items-center text-[10px] font-bold">
                      0
                    </span>
                  </div>
                </div>
                <p className="leading-normal font-semibold text-hover-color my-2.5">
                  {article.posts[0].text.slice(0, 105)}...
                </p>
                <Link
                  className="text-sm font-bold duration-[0.4s] text-second-bg hover:opacity-[0.6]"
                  href={`/blog/${article.id}`}
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ArticlesSection;
