import React, { createContext, useState } from 'react';
import users from './users'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
     
    );
    
    if (user) {
      setCurrentUser(user);
      setError(null);
    } else {
      setError('Credenciales inválidas');
    
      
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export { AuthContext,AuthProvider};