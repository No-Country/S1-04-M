import { Types } from "../actions/types";

const initialState = {
  isLoading: false,
  data: [],
  users: {},
  card: [],
  destinationCard: [],
  transactions: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.register:
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case Types.login:
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case Types.createNewCard:
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case Types.lastCardNumber:
      return {
        ...state,
        data: action.payload,
      };
    case Types.getUserId:
      return {
        ...state,
        users: action.payload,
      };
    case Types.getCardByIdUser:
      return {
        ...state,
        card: action.payload,
      };
    case Types.postDestinationCard:
      return {
        ...state,
        destinationCard: action.payload,
      };
    case Types.getDestinationCardById:
      return {
        ...state,
        destinationCard: action.payload,
      };
    case Types.postTransactions:
      return {
        ...state,
        transactions: action.payload,
        card: action.newBalance,
      };
    case Types.resetState:
      return initialState;
    default:
      return state;
  }
};
