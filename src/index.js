import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader"; // eslint-disable-line

import Root from "./Root";

import configureStore, { history } from "./store/configureStore";

require("./favicon.ico");

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./Root", () => {
    const NewRoot = Root.default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
