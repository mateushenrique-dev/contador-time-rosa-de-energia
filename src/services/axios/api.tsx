import axios from 'axios';

export const api = axios.create({
  baseURL: "http://3.21.103.241:3333/",
});