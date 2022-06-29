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

export const getBookingHistory = async (params, role) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(
    `${SERVICE_URL}/v1/${role}/history-booking`,
    params,
    {
      headers: { Authorization: `Bearer ${decrypt(credential).token}` },
    }
  );
  return response ? response.data : null;
};

export const getVotes = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(`${SERVICE_URL}/v1/me/votes`, params, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decrypt(credential).token}`
    },
  });
  return response ? response.data : null;
};

export const postVote = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(`${SERVICE_URL}/v1/me/vote`, params, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decrypt(credential).token}`
    },
  });
  return response ? response.data : null;
};
