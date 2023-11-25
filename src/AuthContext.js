import React, { createContext, useContext, useState,useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; 
import Cookies from 'js-cookie'; 


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const res = await Axios.post("http://localhost:4000/patientLoginRoute", {
        username,
        password
      });

      if (res.data.token) {
        console.log("Inside login");
        const decodedUser = jwtDecode(res.data.token);
        setUser(decodedUser);
        Cookies.set('authToken', res.data.token);
        
      } else {
        alert("Not logged in");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    // Remove the user state
    
    setUser(null);
    Cookies.remove('authToken');
    console.log("Logged out");
    navigate("/PatientLogin");
  };
  const checkAuth = () => {
    const token = Cookies.get('authToken');

    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
