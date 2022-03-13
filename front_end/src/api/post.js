import axios from "axios";
import { POST_MODULE } from "@/api/_prefix";

/**
 * 获取该帖子的回复
 */
export const getComments = postId => {
  return axios.get(`${POST_MODULE}/comments/${postId}`).then(res => {
    return res.data;
  });
};

export const getPostsByCourseOrderByPostTime = (page, courseId) => {

  return axios
    .get(`${POST_MODULE}/posts/postTime/${page}?courseId=${courseId}`)
    .then(res => {
      return res.data;
    });
};

export const getPostsByCourseOrderByReplyTime = (page, courseId) => {
  return axios
      .get(`${POST_MODULE}/posts/replyTime/${page}?courseId=${courseId}`)
      .then(res => {
        return res.data;
      });

};

export const getPostById = postId => {

  return axios.get(`${POST_MODULE}/postId/${postId}`).then(res => {
    return res.data;
  });
};

export const addComment = info => {
  return axios.post(`${POST_MODULE}/addComment`, info).then(res => {
    return res.data;
  });
};

export const addPosts = info => {
  return axios.post(`${POST_MODULE}/addPosts`, info).then(res => {
    return res.data;
  });
};
export const addText=info=>{
  return axios.post(`${POST_MODULE}/addPost_text`, info).then(res => {
    return res.data;
  });
}
