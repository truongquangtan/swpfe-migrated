import axios from "axios";
import { SERVICE_URL } from "../constants/default";
import { decrypt, encryptKey } from "../helpers/crypto.helper";

export const loginRequest = async (values) => {
  const response = await axios.post(`${SERVICE_URL}/v1/login`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response ? response?.data : null;
};

export const registerUser = async (values) => {
  const response = await axios.post(`${SERVICE_URL}/v1/register`, values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response ? response?.data : null;
};

export const logout = async () => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.get(`${SERVICE_URL}/v1/logout`, {
    headers: {
      Authorization: `Bearer ${decrypt(credential).token}`,
    },
  });
  return response ? response.data : null;
};

export const registerOwner = async (values) => {
  const response = await axios.post(
    `${SERVICE_URL}/v1/admin/owner-register`,
    values,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response ? response?.data : null;
};
