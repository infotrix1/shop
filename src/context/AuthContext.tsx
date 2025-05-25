import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

const initialUser: User | null = null;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is a mock implementation - in a real app you would connect to a backend
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(initialUser);
  
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock login - replace with actual API call
      if (email && password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setUser({
          id: 'user1',
          name: email.split('@')[0],
          email,
          isLoggedIn: true
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Mock registration - replace with actual API call
      if (name && email && password) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setUser({
          id: 'user' + Math.floor(Math.random() * 1000),
          name,
          email,
          isLoggedIn: true
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};