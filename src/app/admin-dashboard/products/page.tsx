"use client";

import PageHeader from "@/app/components/PageHeader";
import { RootState } from "@/app/RTK/store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminAside from "../AdminAside";
import Image from "next/image";
import {
  addProduct,
  handleEditAside,
  handleSelectedProductToEdit,
  handleShowOverlay,
  removeProduct,
} from "@/app/RTK/farmSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import HolderHeader from "../HolderHeader";
import ProductEditAside from "@/app/components/ProductEditAside";

function AdminProductsPage() {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const selectedUser = useSelector((state: RootState) => state.selectedUser);
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const schema = z.object({
    productName: z.string().min(3, "Invalid Product Name"),
    productPrice: z.coerce.number().min(1, "Invalid Product Price"),
  });
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      productName: "",
      productPrice: "",
    },
  });
  function submitData(data: { productName: string; productPrice: number }) {
    if (image1 && image2 && image3 && image4) {
      dispatch(
        addProduct({
          id: new Date().getTime(),
          productName: data.productName,
          productPrice: data.productPrice,
          images: image4
            ? [image1, image2, image3, image4]
            : [image1, image2, image3],
          productAmount: 1,
          review: {
            fiveStars: 0,
            fourStars: 0,
            threeStars: 0,
            twoStars: 0,
            oneStars: 0,
          },
          category: "milk",
          descriptionText:
            "Lorem ipsum dolor sit amet, nulla probatus oportere pro ut, at iisque ocurreret qui, qui everti nusquam eu. Mundi appetere et sit, iracundia interesset consequuntur nec an. Sumo nibh repudiare at has, no pri eruditi percipit.",
          descriptionImage: image1,
          isHot: false,
          isNew: false,
        }),
      );
      setImage1("");
      setImage2("");
      setImage3("");
      setImage4("");
      reset();
      setShowAddProductForm(false);
    } else {
      if (image1 == "") {
        toast.error("You Should Image Number 1!");
      }
      if (image2 == "") {
        toast.error("You Should Image Number 1!");
      }
      if (image3 == "") {
        toast.error("You Should Image Number 3!");
      }
      if (image4 == "") {
        toast.error("You Should Image Number 4!");
      }
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
      <ProductEditAside></ProductEditAside>
      <div className="main-container pb-20 flex flex-col md:flex-row gap-5">
        <AdminAside></AdminAside>
        <div className="products-holder grow">
          <HolderHeader>Admin Products</HolderHeader>
          {products.length === 0 ? (
            <>
              <h3 className="text-3xl my-10 font-semibold text-center italic text-hover-color">
                There Is No Products
              </h3>
              <button className="text-sm text-second-color font-semibold px-6 py-3 rounded-lg bg-second-bg block w-fit mx-auto border-2 border-second-bg cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-second-bg">
                Add First Product
              </button>
            </>
          ) : (
            <ul className="products-grid gap-5">
              {products.map((product) => {
                return (
                  <li
                    key={product.id}
                    className="bg-second-color rounded-[10px] overflow-hidden border border-border-color"
                  >
                    <div className="image-holder">
                      <Image
                        className="w-full"
                        src={product.images[0]}
                        width={200}
                        height={200}
                        alt={product.productName}
                      ></Image>
                    </div>
                    <div className="details-holder p-5 text-lg font-semibold">
                      <p className="mb-2.5">{product.productName}</p>
                      <span className="block text-second-bg">
                        ${product.productPrice}
                      </span>
                      <div className="btns flex gap-5 mt-2.5">
                        <button
                          onClick={() => dispatch(removeProduct(product.id))}
                          className="text-sm text-second-color py-1 px-3 font-bold rounded-[5px] bg-red-600 border-2 border-red-600 grow cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-red-600"
                        >
                          <FaRegTrashCan className="mx-auto text-lg" />
                        </button>
                        <button
                          onClick={() => {
                            dispatch(
                              handleSelectedProductToEdit({ ...product }),
                            );
                            console.log(product);
                            dispatch(handleEditAside(true));
                            dispatch(handleShowOverlay(true));
                          }}
                          className="text-sm text-second-color py-1 px-3 font-bold rounded-[5px] bg-green-600 border-2 border-green-600 grow cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-green-600"
                        >
                          <CiEdit className="mx-auto text-lg" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <button
            onClick={() => setShowAddProductForm(!showAddProductForm)}
            className="text-sm text-second-color font-semibold py-3 px-10 my-5 rounded-lg bg-second-bg border-2 border-second-bg duration-[0.4s] cursor-pointer hover:bg-transparent hover:text-second-bg"
          >
            {showAddProductForm ? "Hide" : "Show"} Add Product Form
          </button>
          <form
            method="POST"
            className={`grid justify-center items-center lg:grid-cols-2 gap-5 ${showAddProductForm ? "grid" : "hidden"}`}
            onSubmit={handleSubmit(submitData)}
          >
            <div className="productName-holder flex flex-col gap-0.5">
              <label htmlFor="productName" className="flex gap-0.5">
                Product Name <span className="font-bold text-red-500">*</span>
              </label>
              <input
                className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
                type="text"
                id="productName"
                {...register("productName")}
              />
            </div>
            <div className="productPrice-holder flex flex-col gap-0.5">
              <label htmlFor="productPrice" className="flex gap-0.5">
                Product Price <span className="font-bold text-red-500">*</span>
              </label>
              <input
                className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
                min={1}
                type="text"
                id="productPrice"
                {...register("productPrice")}
              />
            </div>
            <div className="productPrice-holder flex flex-col lg:col-span-2 gap-0.5">
              <label htmlFor="productCategory" className="flex gap-0.5">
                Product Category{" "}
                <span className="font-bold text-red-500">*</span>
              </label>
              <select
                className="py-3 px-5 rounded-[50px] border border-border-color bg-second-color outline-0"
                id="productCategory"
              >
                <option value="milk">Milk</option>
                <option value="cheese">Cheese</option>
                <option value="sour cream">Sour Cream</option>
                <option value="butter">Butter</option>
                <option value="yogurt">Yogurt</option>
              </select>
            </div>
            <ul className="images-holder flex flex-wrap justify-center items-center lg:col-span-2 gap-5">
              <li>
                <label className="cursor-pointer" htmlFor="image1">
                  <div className="w-50 h-50 border-2 border-border-color rounded-lg border-dashed relative overflow-hidden">
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-hover-color font-semibold italic whitespace-nowrap z-[-1]">
                      Select Image 1
                    </span>
                    {image1 && (
                      <Image
                        className="w-full h-full object-cover z-1"
                        src={image1}
                        width={100}
                        height={100}
                        alt="image 1"
                      ></Image>
                    )}
                  </div>
                  <input
                    onChange={(e) => {
                      if (e.target.files) {
                        setImage1(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                    type="file"
                    className="hidden"
                    id="image1"
                  />
                </label>
              </li>
              <li>
                <label className="cursor-pointer" htmlFor="image2">
                  <div className="w-50 h-50 border-2 border-border-color rounded-lg border-dashed relative overflow-hidden">
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-hover-color font-semibold italic whitespace-nowrap z-[-1]">
                      Select Image 2
                    </span>
                    {image2 && (
                      <Image
                        className="w-full h-full object-cover z-1"
                        src={image2}
                        width={100}
                        height={100}
                        alt="image 2"
                      ></Image>
                    )}
                  </div>
                  <input
                    onChange={(e) => {
                      if (e.target.files) {
                        setImage2(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                    type="file"
                    className="hidden"
                    id="image2"
                  />
                </label>
              </li>
              <li>
                <label className="cursor-pointer" htmlFor="image3">
                  <div className="w-50 h-50 border-2 border-border-color rounded-lg border-dashed relative overflow-hidden">
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-hover-color font-semibold italic whitespace-nowrap z-[-1]">
                      Select Image 3
                    </span>
                    {image3 && (
                      <Image
                        className="w-full h-full object-cover z-1"
                        src={image3}
                        width={100}
                        height={100}
                        alt="image 3"
                      ></Image>
                    )}
                  </div>
                  <input
                    onChange={(e) => {
                      if (e.target.files) {
                        setImage3(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                    type="file"
                    className="hidden"
                    id="image3"
                  />
                </label>
              </li>
              <li>
                <label className="cursor-pointer" htmlFor="image4">
                  <div className="w-50 h-50 border-2 border-border-color rounded-lg border-dashed relative overflow-hidden">
                    <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-hover-color font-semibold italic whitespace-nowrap z-[-1]">
                      Select Image 4
                    </span>
                    {image4 && (
                      <Image
                        className="w-full h-full object-cover z-1"
                        src={image4}
                        width={100}
                        height={100}
                        alt="image 4"
                      ></Image>
                    )}
                  </div>
                  <input
                    onChange={(e) => {
                      if (e.target.files) {
                        setImage4(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                    type="file"
                    className="hidden"
                    id="image4"
                  />
                </label>
              </li>
            </ul>
            <button
              className="px-6 py-3 w-fit mx-auto lg:col-span-2 mt-10 text-sm text-second-color bg-second-bg rounded-[50px] border-2 border-second-bg cursor-pointer duration-[0.4s] hover:bg-transparent hover:text-second-bg"
              type="submit"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProductsPage;