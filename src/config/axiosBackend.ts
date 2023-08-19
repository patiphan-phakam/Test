import axios from "axios";

export const axiosBackend = axios.create({
  baseURL: process.env.urlBacked || "http://localhost:3002/api",
});
