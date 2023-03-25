import request from "./index";

export function getRegister({ username, idCard, password }) {
  return request({
    url: "",
    method: "POST",
    data: {
      username,
      idCard,
      password,
    },
  });
}
