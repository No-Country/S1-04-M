import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store/store";
import { Pages } from "./pages/pages";
import "./css/inputs-labels.css";
import "./css/buttons.css";
import "./css/forms.css";
import "./css/sections.css";

export const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>
  );
};
