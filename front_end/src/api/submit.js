import axios from "axios";
import { SUBMIT_MODULE } from "./_prefix";

/**
 * 提交一道题目 POST submit/upload
 * @param {*} payload
 * @returns
 */
export const submit = payload => {
  const { uid, tid, qid, ans } = payload;
  return axios
    .post(`${SUBMIT_MODULE}/upload`, {
      uid,
      tid,
      qid,
      ans
    })
    .then(res => {
      return res.data;
    });
};
