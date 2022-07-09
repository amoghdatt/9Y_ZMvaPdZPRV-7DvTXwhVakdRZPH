import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/navbar-component";
import LoginPage from "./pages/Login-page";
import SignInPage from "./pages/Signup-page";
import UserUploadPage from "./pages/User-uploads-page";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="uploads" element={<UserUploadPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
