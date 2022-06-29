import axios from "axios";
import { SERVICE_URL } from "../constants/default";
import { decrypt, encryptKey } from "../helpers/crypto.helper";

export const cancelBooking = async (bookingId, reason) => {
  const credential = localStorage.getItem(encryptKey("credential"));
  const response = await axios.delete(
    `${SERVICE_URL}/v1/me/bookings/${bookingId}`,
    {
      headers: {
        Authorization: `Bearer ${decrypt(credential).token}`,
      },
      data: { reason },
    }
  );

  return response ? response.data : null;
};
