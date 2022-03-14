import axios from "axios";
import "@/mock/table.js"

export const getList = () => {
  return axios.get(
    '/table/list').then(res => {
    return res.data;
  });
}
