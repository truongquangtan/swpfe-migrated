import axios from "axios";
import { SERVICE_URL } from "../constants/default";

export const searchVouchers = async (params, ownerId) => {
  const response = await axios.post(
    `${SERVICE_URL}/v1/owners/${ownerId}/vouchers`,
    params
  );
  return response ? response.data : null;
};

export const calculateBookingList = async (voucherCode, bookingList) => {
  const response = await axios.post(
    `${SERVICE_URL}/v1/vouchers/${voucherCode}/calculate`,
    { bookingList }
  );
  return response ? response.data : null;
};
