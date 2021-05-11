import { $axios, config } from "../config/apiConfig";
import { registerUserMockMessage } from "../mocks";

export const registerUser = async (data) => {
  try {
    const params = new URLSearchParams();
    const keys = Object.keys(data);

    keys.forEach((key) => {
      params.append(key, data[key]);
    });

    const res = await $axios.post("/api", params, {
      headers: config.headersPost,
    });

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const checkNIT = async ({ nit }) => {
  try {
    const { data } = await $axios.get(`${config.baseUrl}/auth`);
    return { ...registerUserMockMessage(data.includes(Number(nit))), data: nit };
  } catch (err) {
    console.error(err);
  }
};
