import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RiskSelector from "./pages/RiskSelector";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <RiskSelector />
        </Route>

        <Route path="/world">
          <p>World</p>
        </Route>
      </Switch>
    </>
  );
};

export default App;
