import baseClient from "./baseClient";

const endPoint = "/recent.json";

const getRecent = (userId) => baseClient.get(`/${userId}/${endPoint}`);

const postRecent = (userId, recent) =>
  baseClient.put(`/${userId}/${endPoint}`, recent);

export default {
  getRecent,
  postRecent,
};
