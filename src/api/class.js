import { axios } from "@/utils/request";

export function getClassListMine() {
  return axios({
    url: "http://127.0.0.1:8085/class/mine",
    method: "get"
  });
}

export function getClassListjoined() {
  return axios({
    url: "http://127.0.0.1:8085/class/joined",
    method: "get"
  });
}

export function createClass(name) {
  return axios({
    url: "http://127.0.0.1:8085/class/create?name=" + name,
    method: "post"
  });
}

export function joinClass({ classId, name, sno }) {
  return axios({
    url: "http://127.0.0.1:8085/class/join",
    method: "post",
    data: {
      classId: classId,
      name: name,
      sno: sno
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getMemberList(classId) {
  return axios({
    url: "http://127.0.0.1:8085/class/member?classId=" + classId,
    method: "get"
  });
}

export function getTaskList(classId) {
  return axios({
    url: "http://127.0.0.1:8085/class/task?classId=" + classId,
    method: "get"
  });
}

export function createTask({ classId, content, experimentId, endTime }) {
  return axios({
    url: "http://127.0.0.1:8085/class/task",
    method: "post",
    data: {
      classId: classId,
      content: content,
      experimentId: experimentId,
      endTime: endTime
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}

export function getTaskResultList(taskId) {
  return axios({
    url: "http://127.0.0.1:8085/class/task/result?taskId=" + taskId,
    method: "get"
  });
}
