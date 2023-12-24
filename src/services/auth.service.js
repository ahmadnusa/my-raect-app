import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (username, password, callback) => {
  return axios
    .post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      callback(true, response.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
}

export function getUsername(token) {
  const decoded = jwtDecode(token);
  return decoded.user;
}