import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Selection from "./pages/Selection";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Selection />
        </Route>

        <Route path="/world">
          <p>World</p>
        </Route>
      </Switch>
    </>
  );
};

export default App;
