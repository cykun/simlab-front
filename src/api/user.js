import { axios } from "@/utils/request";

export function getUserDetail() {
  return axios({
    url: "http://49.235.183.95:8085/user/info",
    method: "get"
  });
}

export function getVerificationCode(mobile) {
  return axios({
    url: "http://49.235.183.95:8085/sms/code",
    params: {
      mobile: mobile
    },
    method: "get"
  });
}

export function register({ mobile, password, code, username }) {
  return axios({
    url: "http://49.235.183.95:8085/user/register",
    method: "post",
    data: {
      mobile: mobile,
      password: password,
      code: code,
      username: username
    },
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  });
}
