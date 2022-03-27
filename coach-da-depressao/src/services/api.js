import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://backend-coach-depressao.herokuapp.com'
  : 'http://localhost:3001';
const api = axios.create({
  baseURL
});

export default api;
