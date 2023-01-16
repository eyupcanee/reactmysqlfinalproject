import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
//Authorize
export const AuthContexProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(() => {
    let userProfile = sessionStorage.getItem("user");
    if (userProfile) {
      return JSON.parse(userProfile);
    }
    return null;
  });

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    setCurrentUser(null);
    await axios.post("/auth/logout").then((res) => {
      navigate("/login");
    });
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
