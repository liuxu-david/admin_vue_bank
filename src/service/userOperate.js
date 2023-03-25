import request from "./index";

export function getProfile() {
  return request({
    url: "/person",
    method: "POST",
  });
}
