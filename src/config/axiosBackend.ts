import axios from "axios";

export const axiosBackend = axios.create({
  baseURL: process.env.urlBacked || "http://buy-sri.com/service/api",
  headers: {
    "Content-Type": "application/json",
  },
});
