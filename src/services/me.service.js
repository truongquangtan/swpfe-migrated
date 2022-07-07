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
      Authorization: `Bearer ${decrypt(credential).token}`,
    },
  });
  return response ? response.data : null;
};

export const postVote = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(`${SERVICE_URL}/v1/me/votes`, params, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${decrypt(credential).token}`,
    },
  });
  return response ? response.data : null;
};

export const getStatistic = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(`${SERVICE_URL}/v1/owners/me/dashboard`, params, {
    headers: {
      "Content-Type" : "application/json",
      Authorization: `Bearer ${decrypt(credential).token}`
    },
  });
  return response ? response.data : null;
};

export const getReports = async (params) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(
    `${SERVICE_URL}/v1/admin/reports`,
    params,
    {
      headers: { Authorization: `Bearer ${decrypt(credential).token}` },
    }
  );
  return response ? response.data : null;
};

export const markReportAsResolved = async (reportId) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.put(
    `${SERVICE_URL}/v1/admin/reports/${reportId}/handle`,
    null,
    {
      headers: { Authorization: `Bearer ${decrypt(credential).token}` },
    }
  );
  return response ? response.data : null;
};

export const rejectReport = async (reportId) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.put(
    `${SERVICE_URL}/v1/admin/reports/${reportId}/reject`,
    null,
    {
      headers: { Authorization: `Bearer ${decrypt(credential).token}` },
    }
  );
  return response ? response.data : null;
};