import { axios } from "@/utils/request";

export function getRecommend() {
  return axios({
    url: "http://127.0.0.1:8085/experiment/list/recommend",
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getExperimentList(type) {
  return axios({
    url: "http://127.0.0.1:8085/experiment/list/" + type,
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getCommentList(expId) {
  return axios({
    url: "http://127.0.0.1:8085/comment/list/" + expId,
    method: "get"
  });
}
