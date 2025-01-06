//发起网络请求的函数在这里管理

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost/api', //告诉axiosInstance,每次发起网络请求时,向哪一个url发请求
});

export const fetchProfile = async () => {
  const result = await axiosInstance.get('/profile');
  return result.data.data.profile;
};

//步骤4
export const fetchCards = async () => {
  const result = await axiosInstance.get('/cards');
  console.log(result);

  return result.data.data;
};
