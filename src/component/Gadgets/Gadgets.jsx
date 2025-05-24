import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetch("gadgetsData.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const handleCategory = (category) => {
    setCategory(category);
  };

  const selectCategory =
    category === "all"
      ? gadgets
      : gadgets?.filter((gadget) => gadget.category === category);
  return (
    <div className="mt-[400px]">
      <h2 className="text-4xl text-[#0B0B0B] font-bold mb-14">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex gap-4 px-1">
        <div className="w-[20%] h-fit py-3  bg-[#FFFFFF] rounded-xl flex flex-col gap-4 p-3">
          <p
            onClick={() => handleCategory("all")}
            className={`cursor-pointer ${
              category === "all"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            All Product
          </p>
          <p
            onClick={() => handleCategory("Laptop")}
            className={`cursor-pointer ${
              category === "Laptop"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            Laptop
          </p>

          <p
            onClick={() => handleCategory("Smartphone")}
            className={`cursor-pointer ${
              category === "Smartphone"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            Phones
          </p>

          <p
            onClick={() => handleCategory("accessories")}
            className={`cursor-pointer ${
              category === "phone"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            Accessories
          </p>

          <p
            onClick={() => handleCategory("Smartwatch")}
            className={`cursor-pointer ${
              category === "Smartwatch"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            Smart Watches
          </p>

          <p
            onClick={() => handleCategory("tphone")}
            className={`cursor-pointer ${
              category === "tphone"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            MacBook
          </p>

          <p
            onClick={() => handleCategory("hone")}
            className={`cursor-pointer ${
              category === "hone"
                ? " bg-[#9538E2] text-white "
                : " bg-[#09080f2f] text-gray-600"
            } rounded-full text-left px-3 py-2 text-sm font-semibold`}
          >
            Iphone
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-[80%] ">
          {selectCategory.length > 0 ? (
            selectCategory?.map((gadget) => (
              <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
            ))
          ) : (
            <h2
              className="w-[500px] mx-auto ml-40 font-bold text-3xl text-center items-center 
         mt-16   text-[#0b0b0b80] "
            >
              Data are not Available in this Category.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
