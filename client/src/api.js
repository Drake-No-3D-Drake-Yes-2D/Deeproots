import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api/'
});

export default api;

export async function getContent(content, setContent) {
  const contents = (await api.get(`content/${content}`)).data;
  setContent(contents);
}