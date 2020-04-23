import { axios } from "@/utils/request";

export function getRecommend() {
  return axios({
    url: "http://49.235.183.95:8085/experiment/list/recommend",
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getExperimentList(type) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/list/" + type,
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getExperimentDetail(id) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/detail/" + id,
    method: "get"
  });
}

export function uploadExperiment(formData) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/add",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

export function getCommentList(expId) {
  return axios({
    url: "http://49.235.183.95:8085/comment/list/" + expId,
    method: "get"
  });
}

export function addComment({ expId, content }) {
  return axios({
    url: "http://49.235.183.95:8085/comment",
    method: "post",
    data: {
      expId: expId,
      content: content
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function checkExperimentCollect(experimentId) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/collect/check",
    method: "get",
    params: {
      experimentId: experimentId
    }
  });
}

export function collectExperiment(experimentId) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/collect",
    method: "post",
    data: {
      experimentId: experimentId
    },
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

export function cancelCollectExperiment(experimentId) {
  return axios({
    url:
      "http://49.235.183.95:8085/experiment/collect?experimentId=" +
      experimentId,
    method: "delete"
  });
}

export function getExperimentsInCollected() {
  return axios({
    url: "http://49.235.183.95:8085/experiment/list/collect",
    method: "get"
  });
}

export function uploadRecord({ score, period, experimentId }) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/record",
    method: "post",
    data: {
      score: score,
      period: period,
      experimentId: experimentId
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getRecordList(expId) {
  return axios({
    url: "http://49.235.183.95:8085/experiment/records",
    method: "get",
    params: {
      experimentId: expId
    }
  });
}

export function getAllRecordList() {
  return axios({
    url: "http://49.235.183.95:8085/experiment/records/all",
    method: "get"
  });
}
