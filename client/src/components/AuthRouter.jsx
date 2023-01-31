import React from "react";
import { useNavigate } from "react-router-dom";

function AuthRouter({ children }) {
  const navigate = useNavigate();
  if (!localStorage.getItem("accessToken")) {
    navigate("/login");
    return;
  }
  return <div>{children}</div>;
}

export default AuthRouter;
