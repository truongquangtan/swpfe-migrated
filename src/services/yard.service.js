import axios from "axios";
import { SERVICE_URL } from "../constants/default";
import * as moment from "moment";

export const searchYard = async (body) => {
  const response = await axios.post(`${SERVICE_URL}/v1/yards/search`, body, {
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
    { date: moment(date).format("DD/mm/yyyy") },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response ? response.data : null;
};
