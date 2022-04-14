import { Types } from "./types";
import axios from "axios";

export const register = (usuario) => async () => {
  const post = await axios.post("http://localhost:4000/api/users/signup", usuario)
const json = post.data.messages[0]
const user = json.user;
sessionStorage.setItem("user", user)
console.log(user)
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
const user = json.user;
  const token = json.user_token;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user",user); 
  return {
    type: Types.login,
    payload: json,
  };
};

export const lastCardNumber = () => async () => {
    const post = await axios.post("http://localhost:4000/api/cards/lastCardNumber");
    const json = post.data;
    return {
        type: Types.lastCardNumber,
        payload: json,
    };
    }

    export const getUserId = (id) => async () => {
        const post = await axios.get(`http://localhost:4000/api/users/${id}`);
        const json = post.data;
        sessionStorage.setItem("data",JSON.stringify(json));
        return {
            type: Types.getUserId,
            payload: json,
        };
        }
