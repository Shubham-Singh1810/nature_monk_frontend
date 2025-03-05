import axios from 'axios';

// Define your API base URL
const API_BASE_URL = "https://servernaturemonk.vercel.app/";
const user = JSON.parse(localStorage.getItem("manish_design_user"))
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: `Bearer ${user?.access_token}`
  },
};
export const loginServ = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL+"user/login" , formData);
    return (response);
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const sendOtpServ = async (formData) => {
  try {
    const response = await axios.post(API_BASE_URL+"user/sendOtp" , formData);
    return (response);
  } catch (error) {
    // Handle error (e.g., log or throw an error)
    console.error('Error fetching data:', error);
    throw error;
  }
};