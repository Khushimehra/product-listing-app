import axios from "axios";

const BASE_URL = "http://localhost:5000/products";

export const fetchProducts = async (query = "") => {
  const res = await axios.get(BASE_URL + query);
  return res.data;
};
