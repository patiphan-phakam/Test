import axios from "axios";
import { config } from "./index";

export const axiosBackend = axios.create({
  baseURL: config.backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
