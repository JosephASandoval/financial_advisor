import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <p>Hello</p>
        </Route>

        <Route path="/world">
          <p>World</p>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
