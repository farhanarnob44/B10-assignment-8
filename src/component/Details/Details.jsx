import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import NavBar from "../NavBar/NavBar";
import {
  addToStoredCartList,
  addToStoredWishList,
} from "../../Utility/AddToCard";

const Details = () => {
  useEffect(() => {
    document.title = "Details"; // Set the title dynamically
  }, []);

  // const [add, setAdd] =useState(0);
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);

  const gadget = data.find((gadget) => gadget.product_id === id);

  const {
    product_image,
    product_title,
    price,
    description,
    Specification,
    rating,
    availability,
  } = gadget;

  // const handleCart=()=>{
  //     setAdd( add + 1 )
  // }

  const handleMarkAsCart = (id) => {
    addToStoredCartList(id);
  };

  const handleMarkAsWish = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="mb-48">
      {/* <NavBar add={add}></NavBar>  */}
      <div className="w-[100%] mx-auto  bg-[#9538E2] p-24 text-center relative ">
        <h2 className="text-white font-bold text-3xl ">Product Details</h2>
        <p className="text-[#ffffffa5] font-normal text-sm mb-32">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      <div className="card bg-base-100 w-[60%] mx-auto  shadow-xl flex flex-row gap-4 absolute -bottom-64 right-72 ">
        <div className="">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-xl h-[400px] w-full mt-12 "
          />
        </div>

        <div className="card-body flex items-start  text-left  ">
          <h1 className="text-3xl font-semibold text-[#09080F] ">
            {product_title}
          </h1>
          <p className="text-[#09080f93] font-semibold text-lg ">
            Price: $ {price}{" "}
          </p>
          <button className="btn btn-sm text-[#309C08] border-2 rounded-full border-[#2f9c087a] bg-[#2f9c0837] text-xs font-bold ">
            {availability === "true" ? "In Stock" : "Stock Out"}
          </button>
          <p className="text-xs font-medium text-[#09080f8c] mt-1 ">
            {description}
          </p>
          <p className=" list-decimal text-[#09080F] font-bold text-lg mt-2 ">
            Specification:
            {Specification.map((sp) => (
              <li
                key={sp.product_id}
                className=" text-sm font-medium text-[#09080f8c] mt-1 "
              >
                {sp}
              </li>
            ))}
          </p>
          <p className=" flex flex-row items-center gap-2 justify-center text-black font-bold text-sm mt-3">
            Rating <i class="fa-solid fa-square mt-1"></i>{" "}
          </p>
          <div className="flex flex-row items-center gap-5">
            <ReactStars size={24}>
              fullIcon={<i className="fa fa-star"></i>}
            </ReactStars>
            <p>{rating}</p>
          </div>
          <div className="flex flex-row items-center mt-3 gap-2">
            <a
              onClick={() => handleMarkAsCart(product_id)}
              className="btn rounded-full border-2 text-sm text-gray-600 border-gray-300"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </a>

            <a
              id="wish"
              onClick={() => handleMarkAsWish(product_id)}
              className="btn rounded-full border-2 text-sm text-gray-600 border-gray-300"
            >
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
