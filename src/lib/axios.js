import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // 'Authorization': `Bearer {{BearerToken}}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //this sends the httpOnly cookies to the server
  // withCredentials: true,
  withXSRFToken: true,
});

export default axios;
