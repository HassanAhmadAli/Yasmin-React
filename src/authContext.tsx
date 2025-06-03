import React, { createContext, ReactNode, useState } from "react";

interface AuthInterface {
  jwt: string;
  setJwt: (newJwt: string) => void;
}
export const AuthContext = createContext<AuthInterface>({
  jwt: "",
  setJwt: () => {},
});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState("---");
  return (
    <AuthContext.Provider value={{ jwt: auth, setJwt: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
