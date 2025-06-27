"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';


interface User {
  id: string;
  nome: string;
  email: string;
  tipo: 'artesao' | 'cliente';
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  login: (token: string, user: User) => void;

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;

  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        // Se houver erro ao parsear os dados do usuário, limpa o localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }

    if (token) {
      // Aqui você poderia adicionar uma lógica para validar o token com o backend
      setIsAuthenticated(true);

    }
    setIsLoading(false);
  }, []);


  const login = (token: string, userData: User) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    
    // Redireciona baseado no tipo de usuário
    if (userData.tipo === 'artesao') {
      router.push('/artesanato');
    } else {
      router.push('/cliente');
    }

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    router.push('/'); // Redireciona para a home após o login

  };

  const logout = () => {
    localStorage.removeItem('authToken');

    localStorage.removeItem('userData');
    setUser(null);
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout }}>

    setIsAuthenticated(false);
    router.push('/login'); // Redireciona para o login após o logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>

      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;

};


};

