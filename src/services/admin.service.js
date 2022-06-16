import axios from "axios";
import { SERVICE_URL } from "../constants/default";
import { decrypt, encryptKey } from "../helpers/crypto.helper";

export const addOwner = async (data) => {
    const credential = localStorage.getItem(encryptKey("credential"));
    if(!credential){
        return null;
    }
    const response = await axios.post(
        `${SERVICE_URL}/v1/admin/owner-register`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${decrypt(credential).token}`,
            },
        }
    );
    return response ? response.data : null;
};