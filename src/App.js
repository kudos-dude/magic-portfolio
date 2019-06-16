import React from "react";

import { Switch, Route, withRouter } from "react-router-dom";

import Browse from "scenes/Browse";

const App = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
);

export default withRouter(App);
