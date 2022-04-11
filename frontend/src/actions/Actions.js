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
  const json = post.data.text;
  console.log(json);
  return {
    type: Types.login,
    payload: json,
  };
};

export const createNewCard = (card) => async () => {
    const post = await axios.post("http://localhost:4000/api/cards/createNew", card);
    const json = post.data.text;
    console.log(json);
    return {
        type: Types.createNewCard,
        payload: json,
    };
    }
