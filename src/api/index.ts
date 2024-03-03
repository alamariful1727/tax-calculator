import axios from "axios";

const restAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://0.0.0.0:5001",
});

export default restAPI;
