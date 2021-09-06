import React from "react";
import { Switch, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import RiskSelector from "./pages/RiskSelector";
import RiskCalculator from "./pages/RiskCalculator";

const App = () => {
  return (
    <>
      <MainHeader />

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
