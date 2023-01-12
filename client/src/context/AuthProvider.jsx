import React, { createContext, useEffect, useState } from "react";

import { onIdTokenChanged, getAuth } from "firebase/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const auth = getAuth();

  const [user, setUser] = useState({});

  useEffect(() => {
    const authState = auth.onIdTokenChanged((user) => {
      console.log(user);
      if (user?.uid) {
        setUser(user);
        localStorage.setItem("accessToken", user.accessToken);
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
