import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_LOCAL_URL,
  withCredentials: true,
});

export default api;
