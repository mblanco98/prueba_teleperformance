import { $axios, config } from "../config/apiConfig";
import { registerUserMockMessage } from "../mocks";

export const registerUser = async (data) => {
  try {
    const params = new URLSearchParams();
    const keys = Object.keys(data);

    keys.forEach((key) => {
      if (typeof data[key] !== 'string') {
        params.append(key, JSON.stringify(data[key]));
      } else {
        params.append(key, data[key]);
      }
    });

    const res = await $axios.post(`${config.baseUrl}/users`, params, {
      headers: config.headersPost,
    });

    return res;
  } catch (err) {
    return err
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


export const getFullAddress = async (s) => {
  try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      s
    )}.json?autocomplete=true&limit=10&types=country,region,postcode,district,place,locality,neighborhood,address&access_token=${
      process.env.MAPBOX_API_PLACES
    }`;
    const { data } = await $axios.get(url)
    return data.features.map(({ place_name, id, context }) => ({ id, place_name, context }))
  } catch {
    return []
  }
}