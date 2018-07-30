import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePick from "./StorePick";
import App from "./App";
import NotFound from "./NotFound";
import PropTypes from "prop-types";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePick} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
