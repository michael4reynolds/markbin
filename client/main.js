import React from "react";
import ReactDOM from "react-dom";
import {Switch, BrowserRouter, Route} from "react-router-dom";

import App from "./components/app";
import {Bins} from "../imports/collections/bins";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App}/>
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector(".render-target"));
});
