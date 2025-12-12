import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./auth-context-def";
import { login as apiLogin, verifyToken } from "../lib/auth-api";

const TOKEN_STORAGE_KEY = "bp-auth-token";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const token = await apiLogin(password);
      if (token) {
        // Store token in sessionStorage
        sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
        setIsAuthenticated(true);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error("Login failed:", error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  };

  // Check if user is already authenticated on mount
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = sessionStorage.getItem(TOKEN_STORAGE_KEY);
      if (storedToken) {
        // Verify the token is still valid
        const isValid = await verifyToken(storedToken);
        if (isValid) {
          setIsAuthenticated(true);
        } else {
          // Token is invalid, remove it
          sessionStorage.removeItem(TOKEN_STORAGE_KEY);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
