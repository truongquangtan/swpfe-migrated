import axios from "axios";

import { SERVICE_URL } from "../constants/default";
import { decrypt, encryptKey } from "../helpers/crypto.helper";

export const getBookingHistoryByOwner = async (params) => {
    const credential = localStorage.getItem(encryptKey("credential"));
    const response = await axios.post(`${SERVICE_URL}/v1/owners/history-booking`, params, {
      headers: { Authorization: `Bearer ${decrypt(credential).token}` },
    });
    return response ? response.data : null;
}