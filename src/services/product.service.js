import axios from 'axios';

// Define your API base URL
// const API_BASE_URL = "http://localhost:5000/";
const API_BASE_URL = "https://servernaturemonk.vercel.app/";
const user = JSON.parse(localStorage.getItem("manish_design_user"))

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: `Bearer ${user?.access_token}`
  },
};
export const getProducts = async (payload) => {
  try {
    let response = await axios.post(API_BASE_URL + "product/getProducts", payload);
    return response;
  } catch (error) {
    throw error;
  }
};
export const getProductDetails = async (id) => {
  try {
    let response = await axios.get(API_BASE_URL + "product/getProduct/"+id);
    return response;
  } catch (error) {
    throw error;
  }
};






