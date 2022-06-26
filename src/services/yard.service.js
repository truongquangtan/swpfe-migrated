import axios from "axios";
import { SERVICE_URL } from "../constants/default";
import * as moment from "moment";
import { decrypt, encryptKey } from "../helpers/crypto.helper";

export const searchYard = async (params) => {
  const response = await axios.post(`${SERVICE_URL}/v1/yards/search`, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response ? response.data : null;
};

export const getYardById = async (id) => {
  const response = await axios.get(`${SERVICE_URL}/v1/yards/${id}`);
  return response ? response.data : null;
};

export const getSlots = async (subYardId, date) => {
  const response = await axios.post(
    `${SERVICE_URL}/v1/sub-yards/${subYardId}/slots`,
    { date: moment(date).format("DD/MM/yyyy") },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response ? response.data : null;
};

export const bookingYard = async (yardId, payload, token) => {
  const response = await axios.post(
    `${SERVICE_URL}/v1/yards/${yardId}/booking`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response ? response.data : null;
};

export const addNewYard = async (payload) => {
  const form = new FormData();
  for (const image of payload.images) {
    form.append("images", image);
  }
  form.append("yard", JSON.stringify(payload.yard));

  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(`${SERVICE_URL}/v1/owners/me/yards`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${decrypt(credential).token}`,
    },
  });

  return response ? response.data : null;
};

export const searchOwnerYard = async (payload) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.post(
    `${SERVICE_URL}/v1/owners/me/yards/search`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${decrypt(credential).token}`,
      },
    }
  );

  return response ? response.data : null;
};

export const getYardDetailById = async (yardId) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.get(
    `${SERVICE_URL}/v1/owners/me/yards/search/${yardId}`,
    {
      headers: {
        Authorization: `Bearer ${decrypt(credential).token}`,
      },
    }
  );

  return response ? response.data : null;
};
export const getAllRatingOfYard = async (yardId) => {
  const response = await axios.get(`${SERVICE_URL}/v1/vote/yard/${yardId}`)
  return response ?  response.data : [];
}
