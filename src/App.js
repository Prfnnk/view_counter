import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/main";
import FullPage from "./components/fullPage";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path={"/"} component={MainPage} />
        <Route path={"/article/:id"} component={FullPage} />
      </HashRouter>
    </div>
  );
}

export default App;
