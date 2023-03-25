import request from "./index";

export function getLoginData(account, password, type) {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
      type,
    },
  });
}
