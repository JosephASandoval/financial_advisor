import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RiskSelector from "./pages/RiskSelector";
import RiskCalculator from "./pages/RiskCalculator";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <RiskSelector />
        </Route>

        <Route path="/calculator">
          <RiskCalculator />
        </Route>
      </Switch>
    </>
  );
};

export default App;
