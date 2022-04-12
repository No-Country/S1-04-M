import { Types } from "../actions/types"

const initialState = {
  isLoading: false,
  data: [],
  user: {},

};

export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case Types.register:
            return {
                ...state,
                isLoading: true,
                data: action.payload
    }
        case Types.login:
            return {
                ...state,
                isLoading: true,
                data: action.payload,
            }
        case Types.createNewCard:
            return {
                ...state,
                isLoading: true,
                data: action.payload,
            }
            case Types.lastCardNumber:
                return {
                    ...state,
                    data: action.payload,
                }
                case Types.getUserId:
                    return {
                        ...state,
                        user: action.payload,
                    }
                
        default:
            return state
    }
}
