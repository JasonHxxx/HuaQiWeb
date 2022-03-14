// import request from '@/util/request'
import axios from "axios";
import "@/mock/chart.js";

export const getChartData = t => {
  return axios.get('/chartData',{data:t}).then(res => {
    return res.data;
  });
}
//  return axios
//     .post(`${USER_MODULE}/register`, {
//       uname,
//       phone,
//       password,
//       picture,
//       userRole
//     })
//     .then(res => {
//       return res.data;
//     });
export const getStock = sid => {
  return axios.get("/example/stock", { data: sid }).then(res => {
    return res.data;
  })
}
