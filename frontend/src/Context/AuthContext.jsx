import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    client.get("/account/user")
      .then(res => setCurrentUser(res.data))
      .catch(() => setCurrentUser(null));
  }, []);

  const register = (email, username, password) => {
    return client.post("/account/register", { email, username, password })
      .then(() => login(email, password));
  };

  const login = (email, password) => {
    return client.post("/account/login", { email, password })
      .then(res => setCurrentUser(res.data));
  };

  const logout = () => {
    return client.post("/account/logout")
      .then(() => setCurrentUser(null));
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
