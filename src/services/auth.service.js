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

export const sendForgotPassword = async (values) => {
  console.log(values);
  const response = await axios.post(
    `${SERVICE_URL}/v1/forgot/send-mail`,
    values,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data ? response?.data : null;
};

export const verifyForgotPassword = async (values) => {
  console.log(values);
  const response = await axios.post(
    `${SERVICE_URL}/v1/forgot/confirm-otp`,
    values,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data ? response?.data : null;
};

export const updatePassword = async (data, token) => {
  console.log(data);

  const response = await axios.post(
    `${SERVICE_URL}/v1/forgot/new-password`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response?.data ? response?.data : null;
};
