import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

import { store } from "./redux/store";
import App from "./app";

import "./style.scss";

import "bootstrap/dist/css/bootstrap.css";
render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </Provider>,
  document.querySelector("#root")
);
