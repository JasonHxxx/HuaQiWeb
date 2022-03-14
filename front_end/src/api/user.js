import axios from "axios";
import { USER_MODULE } from "./_prefix";

/**
 * 用户注册 POST /user/register
 * @param {*} payload
 * @returns
 */
export const register = payload => {
  console.log(payload);
  const { uname, phone, password, picture, userRole = "STUDENT" } = payload;
  return axios
    .post(`${USER_MODULE}/register`, {
      uname,
      phone,
      password,
      picture,
      userRole
    })
    .then(res => {
      return res.data;
    });

};

/**
 *  用户登录 POST /user/login
 * @param {*} payload
 * @returns
 */
export const login = payload => {
  console.log(payload);
  const { phone, password } = payload;
  return axios.post(`${USER_MODULE}/login`, { phone, password }).then(res => {
    return res.data;
  });

};

/**
 *  获取用户 GET /user/{uid}
 * @param {*} uid
 * @returns
 */
export const getUser = uid => {
  console.log(uid);
  return axios.get(`${USER_MODULE}/${uid}`).then(res => {
    return res.data;
  });
};
