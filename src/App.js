import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/main";
import FullPage from "./components/fullPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={"/"} component={MainPage} />
        <Route path={"/article/:id"} component={FullPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
