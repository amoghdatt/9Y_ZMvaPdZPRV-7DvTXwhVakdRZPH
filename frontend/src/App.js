import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/navbar-component";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
