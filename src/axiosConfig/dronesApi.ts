import axios from 'axios';

export const dronesApi = axios.create({
  baseURL: 'https://aerobay.onrender.com/api',
});
