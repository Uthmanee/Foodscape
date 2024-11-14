import { create } from "apisauce";

import cache from "../utility/cache";

const apiClient = create({
  baseURL: "https://react-practice-3b04d-default-rtdb.firebaseio.com",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
