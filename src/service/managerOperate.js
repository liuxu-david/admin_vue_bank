import request from "./index";

export function getOpenAccount({ account, password, uname, idcard, yue }) {
  return request({
    url: "/createUser",
    method: "POST",
    data: {
      account,
      password,
      uname,
      idcard,
      yue,
    },
  });
}
export function getChangePassword({ idcard, number, newpassword }) {
  return request({
    url: "/changePassword",
    method: "POST",
    data: { idcard, number, newpassword },
  });
}
export function getMoney({ idcard, number }) {
  return request({
    url: "/look",
    method: "POST",
    data: { idcard, number },
  });
}
export function removeMoney({ idcard, number, money }) {
  return request({
    url: "/down",
    method: "POST",
    data: { idcard, number, money },
  });
}
export function giveMoney({ number, idcard, newnumber, money }) {
  return request({
    url: "/zhuan",
    method: "POST",
    data: { idcard, newnumber, number, money },
  });
}
