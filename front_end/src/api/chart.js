// import request from '@/util/request'
import axios from "axios";
export function getChartData(type) {
  return axios.get("/chartData", { type }).then(res => {
    return res.data;
  })
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
export function getStock(sid) {
  return axios.get("/example/stock", { sid }).then(res => {
    return res.data;
  })
}
