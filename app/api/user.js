import baseClient from "./baseClient";

const initializeUserdb = (userId) =>
  baseClient.put(`/${userId}.json`, {
    initializaDB: userId,
  });

export default initializeUserdb;
