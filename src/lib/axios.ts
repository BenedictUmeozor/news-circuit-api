import axios from 'axios';

export const api = axios.create({
  baseURL: `http://api.mediastack.com/v1`,
});
