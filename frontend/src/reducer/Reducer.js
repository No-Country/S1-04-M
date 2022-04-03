import { Types } from "../actions/types"

const initialState = {
  isLoading: false,
  data: [],
};

export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case Types.USER_LOGIN:
            return {
                ...state,
                isLoading: true,
    }

        case Types.CARDS_GET_ALL:
            return {
                ...state,
                isLoading: true,
                data: action.payload,
            }
        default:
            return state
    }
}
