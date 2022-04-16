import { Types } from "./types";
import axios from "axios";

export const register = (usuario) => async (dispatch) => {
  const post = await axios.post("http://localhost:4000/api/users/signup", usuario)
const json = post.data.messages[0];
const user = json.user;
sessionStorage.setItem("user", user)
console.log(user)
return dispatch({
    type: Types.register,
    payload: user
})

};

export const login = (usuario) => async (dispatch) => {
  const post = await axios.post(
    "http://localhost:4000/api/users/login",
    usuario
  );
  const json = post.data;
const user = json.user;
  const token = json.user_token;
  sessionStorage.setItem("token", token);
  return dispatch({
    type: Types.login,
    payload: json,
  })
};

export const lastCardNumber = () => async (dispatch) => {
    const post = await axios.post("http://localhost:4000/api/cards/lastCardNumber");
    const json = post.data;
    return dispatch({
        type: Types.lastCardNumber,
        payload: json,
    })
    }

    export const getUserId = (id) => async (dispatch) => {
        const post = await axios.get(`http://localhost:4000/api/users/${id}`);
        const json = post.data;
        sessionStorage.setItem("data",JSON.stringify(json));
        return dispatch({
            type: Types.getUserId,
            payload: json,
        })
        }


  export const getCardByIdUser = (id) => async (dispatch) => {
    const get = await axios.get(`http://localhost:4000/api/cards/byUser/${id}`,
  );
    const json = get.data[0];
    return dispatch({
      type: Types.getCardByIdUser,
      payload: json,
    })
  }