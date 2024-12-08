import axios from "axios";

// membuat instance axios dengan base url dari env
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type" : "application/json",
  }
})

export default api