import React, { createContext, useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    const decoded = jwtDecode(token);
    setUser({ id: decoded.id, role: decoded.role });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ id: decoded.id, role: decoded.role });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
