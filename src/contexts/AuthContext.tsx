"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Aqui você poderia adicionar uma lógica para validar o token com o backend
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    router.push('/'); // Redireciona para a home após o login
  };

  const logout = () => {
    localStorage.removeItem('authToken');
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