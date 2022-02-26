import axios from "axios";
import { QUESTION_MODULE } from "./_prefix";

/** 分页获取题目列表 GET question/{page}?uid={uid}
 * @param {*} payload
 * @returns
 */
export const getTeacherQuestions = payload => {
  const { uid, page } = payload;
  return axios.get(`${QUESTION_MODULE}/${page}?uid=${uid}`).then(res => {
    return res.data;
  });
};

/** 分页获取题目列表 GET question/getAll
 * @returns
 */
export const getAllQuestion = () => {
  return axios.get(`${QUESTION_MODULE}/getAll`).then(res => {
    return res.data;
  });
};

/**
 * 获取一个题目 GET /question/{qid}
 * @param qid 题目id
 * @returns questionInfo
 */
export const getQuestionById = qid => {
  return axios.get(`${QUESTION_MODULE}/qid/${qid}`).then(res => {
    return res.data;
  });
};

/**
 * 获取相应课程的题目 GET /question/cid/{courseId}
 * @returns questionList
 * @param courseId
 */

export const getCourseQuestion = courseId => {
  return axios.get(`${QUESTION_MODULE}/cid/${courseId}`).then(res => {
    return res.data;
  });
};

/**
 * 创建一个题目 POST /question_create
 * @param {*} payload
 * @returns
 */
export const createQuestion = payload => {
  const {
    courseId,
    detail,
    optionA,
    optionB,
    optionC,
    optionD,
    answer,
    resolution
  } = payload;
  return axios
      .post(`${QUESTION_MODULE}/create`, {
        courseId,
        detail,
        optionA,
        optionB,
        optionC,
        optionD,
        answer,
        resolution
      })
      .then(res => {
        return res.data;
      });
};
