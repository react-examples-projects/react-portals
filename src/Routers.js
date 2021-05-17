import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./Pages/App";
import Planets from "./Pages/Planets";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/planets" component={Planets} />
      </Switch>
    </Router>
  );
}
