import React, { createContext, useEffect, useState } from "react";

import { onIdTokenChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const auth = getAuth();

  // const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const authState = onIdTokenChanged(auth, (user) => {
      console.log("user", user);
      if (user?.uid) {
        setUser(user);
        localStorage.setItem("accessToken", user.accessToken);
      } else {
        //reset user
        setUser({});
        localStorage.clear();
      }
    });

    //unmount
    return () => {
      authState();
    };
  }, [auth]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
