import { Types } from "./types";
import axios from "axios";

export const register = (usuario) => async () => {
  const post = await axios.post("http://localhost:4000/api/users/signup", usuario)
const json = post.data.text
console.log(json)
return{
    type: Types.register,
    payload: json
}

};

export const login = (usuario) => async () => {
  const post = await axios.post(
    "http://localhost:4000/api/users/login",
    usuario
  );
  const json = post.data;
   const token = json._id;
   sessionStorage.setItem("token", token);
  return {
    type: Types.login,
    payload: json,
  };
};

export const lastCardNumber = () => async () => {
    const post = await axios.post("http://localhost:4000/api/cards/lastCardNumber");
    const json = post.data;
    sessionStorage.setItem("CardNumber", json);
    return {
        type: Types.lastCardNumber,
        payload: json,
    };
    }

    export const getUserId = (id) => async () => {
        const post = await axios.get(`http://localhost/api/users/+${id}`);
        const json = post.data;
        sessionStorage.setItem("data", json);
        return {
            type: Types.getUserId,
            payload: json,
        };
        }
