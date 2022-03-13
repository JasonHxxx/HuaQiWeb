import Cookies from 'js-cookie'
export const judgeLogin = () => {
  return !!window.localStorage.getItem("userId");
};

export const judgeStudent = () => {
  return judgeLogin() && window.localStorage.getItem("userRole") === "STUDENT";
};

export const judgeTeacher = () => {
  return judgeLogin() && window.localStorage.getItem("userRole") === "TEACHER";
};


const TokenKey = 'esg_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
