import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api/'
});

export default api;

export async function getContent(content, setContent) {
  const contents = (await api.get(`content/${content}`)).data;
  setContent(contents);
}

export async function getData(endpoint, setData) {
  const data = (await api.get(`${endpoint}`)).data;
  setData(data);
}
<<<<<<< HEAD

export async function getDataThen(endpoint, setData, callback) {
  await getData(endpoint, setData)
  callback();
}
=======
>>>>>>> bf7a9671d023f923e063e786b521ff40bb4e265b
