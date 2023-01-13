

import { BASE_URL } from "../utils/constants/index";

let store;

export const injectStore = (_store) => {
  store = _store;
};

let token = localStorage.getItem("REMEMBER");
export const appFetch = async (data) => {
  const { authSlice } = store.getState();
  try {
    const requestOptions = {
      method: data.method || "GET",
      headers: token
        ? {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
          },
    };
    if (data.method !== "GET" && data.body) {
      requestOptions.body = JSON.stringify(data.body);
    }
    const response = await fetch(data.url, requestOptions);

    if (!response.ok) {
      throw new Error(response.message);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const appFetchFile = async (config) => {
  const { authSlice } = store.getState();
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${authSlice.user.token || ""}`,
      },
      body: config.body,
    };
    const response = await fetch(BASE_URL + config.url, requestOptions);
    if (!response.ok) {
      throw new Error(response.message);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
