import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_image, product_title, price, product_id } = gadget;

  return (
    <Link to={`/gadgets/${product_id}`}>
      <div className="flex flex-col bg-white rounded-xl">
        <div className="p-5  ">
          <img
            className="h-[190px] w-full rounded-xl "
            src={product_image}
            alt=""
          />
        </div>
        <div className="text-left p-5">
          <h2 className="text-xl font-bold text-black mb-2">
            {product_title}{" "}
          </h2>
          <p className="text-gray-500 text-sm font-semibold mb-5">
            Price: {price} ${" "}
          </p>
          <button className="btn border-2 border-[#9538E2] rounded-full bg-white text-[#9538E2] font-bold">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Gadget;
