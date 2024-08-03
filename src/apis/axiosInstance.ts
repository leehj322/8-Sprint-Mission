import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 5000,
  headers: {
    accept: "application/json",
  },
});

export default axiosInstance;
