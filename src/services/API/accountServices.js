import axios from "axios";

export const loginRequest = async (values) => {
  const response = await axios.post(
    "https://swp391-backend.herokuapp.com/api/v1/login",
    values,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data ? response?.data : null;
};

export const signUpResquest = async (values) => {
  try {
    const response = await axios.post(
      "https://swp391-backend.herokuapp.com/api/v1/register",
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response?.data ? response?.data : null;
  } catch (e) {
    console.log(e.response.data);
  }
};
