import React from "react";

import { Switch, Route, withRouter } from "react-router-dom";

import Browse from "scenes/Browse";
import Decks from "scenes/Decks";

const App = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route exact path="/decks" component={Decks} />
  </Switch>
);

export default withRouter(App);
