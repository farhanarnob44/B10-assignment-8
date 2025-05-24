import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList } from "../../Utility/AddToCard";
import Gadget from "../Gadget/Gadget";
import imgGroup from "../../../public/assets/Group.png";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard"; // Set the title dynamically
  }, []);

  const [cartList, setCartList] = useState([]);

  const [sortCart, setSortCart] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const allGadgets = useLoaderData();

  // console.log(allGadgets)

  useEffect(() => {
    const storeCartList = getStoredCartList();
    // console.log(storeCartList)
    const storedCartListInt = storeCartList?.map((id) => parseInt(id));

    // console.log(storeCartList, storedCartListInt, allGadgets);
    const readGadgetList = allGadgets?.filter((gadget) =>
      storedCartListInt.includes(gadget.product_id)
    );
    setCartList(readGadgetList);
  }, []);

  const totalCost = cartList.reduce((total, gadget) => total + gadget.price, 0);

  const handleSortCartByPrice = (sortType) => {
    setSortCart(sortType);
    if (sortType === "price") {
      const sortedCart = [...cartList].sort((a, b) => b.price - a.price);
      setCartList(sortedCart);
    }
  };

  const handlePurchase = () => {
    if (totalCost > 0) {
      setModalOpen(true);
    }
  };

  const handleModal = () => {
    setModalOpen(false);
    setCartList([]);
    navigate("/");
  };

  return (
    <div>
      <Tabs>
        <div className="bg-[#9538E2] w-full mx-auto mb-24 p-20 flex  flex-col items-center  ">
          <h2 className="text-white font-bold text-3xl mb-4">Dashboard</h2>
          <p className="text-sm font-medium text-[#ffffff7a] mb-5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex flex-row gap-4 "></div>
          <TabList className="flex gap-4">
            <Tab className="btn rounded-full border-2 font-bold border-white bg-transparent text-sm px-5 ">
              Cart
            </Tab>
            <Tab className="btn rounded-full border-2 font-bold border-white bg-transparent text-sm px-5 ">
              Wishlist
            </Tab>
          </TabList>
        </div>

        <TabPanel className="w-[80%] mx-auto">
          {!isModalOpen ? ( // Show cart if modal is not open
            <div>
              <div className="flex items-center justify-between w-[97%] mx-auto mb-7">
                <h3 className="text-3xl font-bold">Cart</h3>
                <div className="flex flex-row items-center gap-5">
                  <p className="text-black font-bold text-xl">
                    Total Cost: {totalCost}
                  </p>
                  <button
                    onClick={() => handleSortCartByPrice("price")}
                    className="btn flex items-center gap-2 border-2 border-[#9538E2] text-[#9538E2] font-bold rounded-3xl px-6"
                  >
                    Sort by Price{" "}
                    <i class="fa-solid fa-arrow-up-wide-short  "></i>{" "}
                  </button>
                  <button
                    onClick={handlePurchase}
                    className="btn border-2 border-[#9538E2] text-[#9538E2] font-bold rounded-3xl px-6"
                    disabled={cartList.length === 0 || totalCost === 0}
                  >
                    Purchase
                  </button>
                </div>
              </div>
              {cartList?.map((gadget) => (
                <div
                  key={gadget.product_id}
                  className="flex flex-row gap-4 bg-white items-center rounded-xl mb-5 p-2"
                >
                  <div className="p-5">
                    <img
                      className="h-[190px] w-full rounded-xl"
                      src={gadget.product_image}
                      alt=""
                    />
                  </div>
                  <div className="text-left p-4">
                    <h2 className="text-2xl font-bold text-black mb-5">
                      {gadget.product_title}
                    </h2>
                    <p className="text-sm font-medium text-[#09080f8c] mb-5">
                      {gadget.description}
                    </p>
                    <p className="text-gray-500 text-lg font-semibold mb-5">
                      Price: {gadget.price} $
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full items-end border-2 border-red-400 text-xl text-red-500 p-0">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="modal-box flex flex-col items-center text-center mx-auto">
              <img src={imgGroup} alt="" />
              <h3 className="font-bold text-2xl mt-2">Payment Successfully</h3>
              <div className="divider px-5"></div>
              <p className="py-4 text-gray-600 font-medium text-lg mt-3">
                Thanks for purchasing.
              </p>
              <p className="text-gray-600 font-medium text-lg">
                Total: ${totalCost}
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    onClick={handleModal}
                    className="btn btn-wide rounded-full text-[#09080F] bg-[#11000023] font-bold text-lg"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </TabPanel>

        <TabPanel className="w-[80%] mx-auto ">
          <h2 className="text-3xl font-bold text-left mb-8"> WishList</h2>
          {cartList?.map((gadget) => (
            <div className="flex flex-row gap-4 bg-white items-center  rounded-xl mb-5 p-2 ">
              <div className="p-5  ">
                <img
                  className="h-[190px] w-full rounded-xl "
                  src={gadget.product_image}
                  alt=""
                />
              </div>
              <div className="text-left p-4">
                <h2 className="text-2xl font-bold text-black mb-5">
                  {gadget.product_title}{" "}
                </h2>
                <p className="text-sm font-medium text-[#09080f8c] mb-5 ">
                  {gadget.description}
                </p>
                <p className="text-gray-500 text-lg font-semibold mb-5">
                  Price: {gadget.price} ${" "}
                </p>

                <Link to="/">
                  <button className="btn border-2 border-[#9538E2] rounded-full bg-white text-[#9538E2] font-bold">
                    Add to Card
                  </button>
                </Link>
              </div>

              <div className="w-9 h-9 rounded-full items-end border-2 border-red-400 text-xl text-red-500 p-0 ">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
