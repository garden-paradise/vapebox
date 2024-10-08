import axios from 'axios';

export let instance = axios.create({
  baseURL: 'https://smoky-island.oa.r.appspot.com/api',
});
