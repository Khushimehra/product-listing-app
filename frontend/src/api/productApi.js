import axios from "axios";

const BASE_URL = "https://product-listing-app-3vb9.onrender.com/products";

export const fetchProducts = async (query = "") => {
  const res = await axios.get(BASE_URL + query);
  return res.data;
};
