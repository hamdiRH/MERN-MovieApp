import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

const Router = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default Router;
