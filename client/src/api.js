import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_URI || 'http://localhost:5000/api/'
});
