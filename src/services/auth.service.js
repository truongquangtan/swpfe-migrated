import axios from "axios";
import { SERVICE_URL } from "../constants/default";

export const loginRequest = async (values) => {
  const response = await axios.post(`${SERVICE_URL}/v1/login`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response?.data ? response?.data : null;
};

export const registerUser = async (values) => {
  const response = await axios.post(`${SERVICE_URL}/v1/register`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response?.data ? response?.data : null;
};

export const forgotPassword = async (values) => {};
export const resetPassword = async (values) => {};
