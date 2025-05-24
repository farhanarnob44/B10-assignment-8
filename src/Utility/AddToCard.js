import { toast } from "react-toastify";

const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = getStoredCartList();

  storedList.push(id);
  const storedListStr = JSON.stringify(storedList);
  localStorage.setItem("read-list", storedListStr);
  toast("This gadget is added to your list.");
};

const getStoredWishList = () => {
  // read-list
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    // already exists. do not add it
    const button = document.getElementById("wish");
    button.classList.add("opacity-50", "cursor-not-allowed"); // Optional styling
    button.style.pointerEvents = "none"; // Disable the button
    // console.log("Already in wish list.");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast("This gadget is added to your wish list.");
  }
};

export { addToStoredCartList, getStoredCartList, addToStoredWishList };
