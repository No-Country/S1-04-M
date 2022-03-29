import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Reducer} from "../reducer/Reducer";

export const Store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
