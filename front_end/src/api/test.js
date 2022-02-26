import axios from "axios";
import { TEST_MODULE } from "./_prefix";

// /**
//  * 获取相应课程的题目 GET /test/cid/{courseId}
//  * @returns testList
//  * @param courseId
//  */
// export const getCourseTest = courseId => {
//   return axios.get(`${TEST_MODULE}/cid/${courseId}`).then(res => {
//     return res.data;
//   });
// };

/**
 * 学⽣⽤户可以根据课程id查看所有测试列表
 */

export const getAllTest = payload => {
  const { courseId, uid } = payload;
  return axios.get(`${TEST_MODULE}/all/${courseId}?uid=${uid}`).then(res => {
    return res.data;
  });
};

/**
 * 获取一个测试 GET /test/testINFO/{testId}?
 * @param testId
 * @returns
 */

export const getTestInfoById = testId => {
  return axios.get(`${TEST_MODULE}/testINFO/${testId}`).then(res => {
    return res.data;
  });
};

/**
 * 学生做题前获取一个测试 GET /test/do/{testId}?
 * @param testId
 * @returns
 */

export const getTestDO = testId => {
  return axios.get(`${TEST_MODULE}/do/${testId}`).then(res => {
    return res.data;
  });
};

/**
 * 获取一个测试的相关信息 GET /test/info/{testId}?
 * @param testId
 * @returns
 */

export const getTestSimpleInfo = testId => {
    console.log("info");
    return axios.get(`${TEST_MODULE}/info/${testId}`).then(res => {
        return res.data;
    });
};

/**
 * 学生做题后获取一个测试 GET /test/result/{testId}?
 * @param payload
 * @returns
 */
export const getTestResult = payload => {
  const { testId, uid } = payload;
  return axios.get(`${TEST_MODULE}/result/${testId}?uid=${uid}`).then(res => {
    return res.data;
  });
};

/**
 * 创建一个测试 POST test/test_create
 * @param {*} payload
 * @returns
 */
export const createTest = payload => {
  const {
    test_name,
    course_id,
    start,
    end,
    q1_id,
    q2_id,
    q3_id,
    q4_id,
    q5_id
  } = payload;
  console.log("course_id : " + course_id);
  return axios
    .post(`${TEST_MODULE}/create`, {
      test_name,
      course_id,
      start,
      end,
      q1_id,
      q2_id,
      q3_id,
      q4_id,
      q5_id
    })
    .then(res => {
      return res.data;
    });
};

// /**
//  * 提交一个测试 POST test/doTest
//  * @param {*} payload
//  * @returns
//  */
// export const submitTest = payload => {
//   const { submitList } = payload;
//   return axios
//     .post(`${TEST_MODULE}/submit`, {
//       submitList
//     })
//     .then(res => {
//       return res.data;
//     });
// };
