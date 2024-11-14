import baseClient from "./baseClient";

const endPoint = "/favourites.json";

const getFavourites = (userId) => baseClient.get(`/${userId}/${endPoint}`);

const postFavourites = (userId, favourite) =>
  baseClient.put(`/${userId}/${endPoint}`, favourite);

export default {
  getFavourites,
  postFavourites,
};
