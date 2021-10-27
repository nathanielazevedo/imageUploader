import React from "react";
import Nav from "./NavBar/NavBar";
import { Route, BrowserRouter } from "react-router-dom";
import Upload from './Upload'
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/upload">
          <Upload />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;