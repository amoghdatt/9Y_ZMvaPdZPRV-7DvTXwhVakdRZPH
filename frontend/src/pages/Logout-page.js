import { useEffect } from "react";

export default function LogoutPage({ setUserId, setIsUserLoggedIn }) {
  useEffect(() => {
    setUserId("");
    setIsUserLoggedIn(false);

    window.location.href = "/";
  }, []);
}
