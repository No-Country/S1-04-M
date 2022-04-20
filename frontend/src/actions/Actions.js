import { Types } from "./types";
import axios from "axios";

export const register = (usuario) => async (dispatch) => {
  const post = await axios.post("https://bankforyouback.herokuapp.com/api/users/signup", usuario)
const json = post.data.messages[0];
const user = json.user;
const token = json.user_token;
sessionStorage.setItem("token", token);
sessionStorage.setItem("user", user)
return dispatch({
    type: Types.register,
    payload: user
})

};

export const login = (usuario) => async (dispatch) => {
  const post = await axios.post(
    "https://bankforyouback.herokuapp.com/api/users/login",
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
    const post = await axios.post("https://bankforyouback.herokuapp.com/api/cards/lastCardNumber");
    const json = post.data;
    return dispatch({
        type: Types.lastCardNumber,
        payload: json,
    })
    }

    export const getUserId = (id) => async (dispatch) => {
        const post = await axios.get(`https://bankforyouback.herokuapp.com/api/users/${id}`);
        const json = post.data;
        sessionStorage.setItem("data",JSON.stringify(json));
        return dispatch({
            type: Types.getUserId,
            payload: json,
        })
        }


  export const getCardByIdUser = (id) => async (dispatch) => {
    const get = await axios.get(`https://bankforyouback.herokuapp.com/api/cards/byUser/${id}`,
  );
    const json = get.data;
    return dispatch({
      type: Types.getCardByIdUser,
      payload: json,
    })
  }

  export const postDestinationCard = (card) => async (dispatch) => {
    const post = await axios.post(
      "https://bankforyouback.herokuapp.com/api/cards/destinationCards",
      card
    );
    const json = post.data;
    return dispatch({
      type: Types.postDestinationCard,
      payload: json,
    })
  }

  export const getDestinationCardById = (id) => async (dispatch) => {
    const get = await axios.get(
      `https://bankforyouback.herokuapp.com/api/cards/destinationCards/byUser/${id}`
    );
    const json = get.data;
    return dispatch({
      type: Types.getDestinationCardById,
      payload: json,
    })
  }

  export const postTransactions = (transaction) => async (dispatch) => {
    console.log(transaction)
    const post = await axios.post(
      "https://bankforyouback.herokuapp.com/api/transactions",
      transaction
    );
    const json = post.data;
    console.log(json)
    const newBalance = json.newBalance.map((item) => {
      return {
        ...item
      };
    });
    return dispatch({
      type: Types.postTransactions,
      payload: json,
      newBalance: newBalance,
    })
  }
