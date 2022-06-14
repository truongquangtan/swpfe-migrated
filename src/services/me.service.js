import axios from "axios";

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
