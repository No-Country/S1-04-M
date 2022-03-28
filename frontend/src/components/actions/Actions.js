import { Types } from "./types";


export const userLogin = (payload) => {
    return {
        type: Types.USER_LOGIN,
        payload,
    };
}

export const cardsGetAll = (payload) => {
    return {
        type: Types.CARDS_GET_ALL,
        payload,
    };
}
