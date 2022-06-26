import axios from "axios";

import { SERVICE_URL } from "../constants/default";
import { decrypt, encryptKey } from "../helpers/crypto.helper";

export const getMyIncomingMatches = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(
    `${SERVICE_URL}/v1/me/incoming-matches`,
    params,
    {
      headers: { Authorization: `Bearer ${decrypt(credential).token}` },
    }
  );
  return response ? response.data : null;
};

export const getMyBookingHistory = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(`${SERVICE_URL}/v1/me/history`, params, {
    headers: { Authorization: `Bearer ${decrypt(credential).token}` },
  });
  return response ? response.data : null;
};

export const updateProfile = async (values) => {
  const form = new FormData();

  form.append("avatar");
  form.append("account");

  const credential = localStorage.getItem(encryptKey("credential"));
  if (!credential) {
    throw new Error("No token provided!");
  }
  const response = await axios.post(
    `${SERVICE_URL}/v1/me/update-profile`,
    values,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${decrypt(credential).token}`,
      },
    }
  );
  return response ? response.data : null;
};
