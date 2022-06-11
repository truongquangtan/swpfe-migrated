import axios from "axios";
import { SERVICE_URL } from "../constants/default";

export const searchYard = async (body) => {
  const response = await axios.post(`${SERVICE_URL}/v1/yard/search`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response ? response.data : null;
};
