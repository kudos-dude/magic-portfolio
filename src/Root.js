import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";

const Root = ({ store }) => (
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line
};

export default Root;