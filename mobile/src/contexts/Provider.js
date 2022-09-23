import React, { useState, useContext, useEffect } from "react";
import Context from "./Context";

import AsyncStorage from "@react-native-async-storage/async-storage";

export function StoreProvider({ children }) {
  const ctx = useContext(Context);
  const [user, setUser] = useState(ctx.user);
  const [auth, setAuth] = useState(ctx.user);

  async function valueStorage() {
    const response = await AsyncStorage.getItem("user");
    setUser(response ? JSON.parse(response) : {});
  }

  useEffect(() => {
    valueStorage();
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
}
