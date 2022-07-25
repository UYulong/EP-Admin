import axios from "axios";

const http = axios.create({
  baseURL: "/api",
  timeout: 5 * 1000,
});

export default http;
