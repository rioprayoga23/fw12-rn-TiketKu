import axios from 'axios';
// import {API_URL} from '@env';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = 'Bearer ' + token;
  }
  const instance = axios.create({
    baseURL: 'https://fw12-backend-orcin.vercel.app',
    headers,
  });
  return instance;
};

export default http;
