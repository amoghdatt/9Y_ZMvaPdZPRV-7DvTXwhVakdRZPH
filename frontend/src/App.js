import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/navbar-component";
import LoginPage from "./pages/Login-page";
import SignInPage from "./pages/Signup-page";
import UserUploadPage from "./pages/User-uploads-page";
import { useState } from "react";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarComponent isUserLoggedIn={isUserLoggedIn} />
        <Routes>
          <Route
            path="login"
            element={
              <LoginPage
                setIsUserLoggedIn={setIsUserLoggedIn}
                isUserLoggedIn={isUserLoggedIn}
                setUserId={setUserId}
              />
            }
          />
          <Route path="signin" element={<SignInPage />} />
          <Route path="uploads" element={<UserUploadPage userId={userId} />} />
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
