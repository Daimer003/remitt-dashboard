"use client";
// context/AuthContext.ts

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Cookie from "js-cookie";
import { ServiceAuth } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

interface UserData {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  userData: UserData | null;
  token: string | null;
  login: (wallet: string) => Promise<void>;
  logout: (tokenUser: string) => Promise<void>;
  register: (data: any) => Promise<void>;
  getCookie: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const { isConnected, address } = useAccount();

  const getCookie = () => {
    const storedToken = Cookie.get("authToken");
    const storedUserData = Cookie.get("userData");
  
    if (storedToken) {
      setToken(storedToken);
    }
  
    // Solo intenta hacer JSON.parse si storedUserData tiene contenido
    if (storedUserData) {
      try {
        setUserData(JSON.parse(storedUserData) as UserData);
      } catch (error) {
        console.error("Error parsing userData from cookies:", error);
        Cookie.remove("userData"); // Limpia la cookie si hay error de formato
      }
    }
  };

  const login = async (wallet: string) => {
    try {
      const { data } = await ServiceAuth.getAuth(wallet);
      setToken(data.token);
      setUserData(data.userData);
      Cookie.set("authToken", data.token, { expires: 7 });
      Cookie.set("userData", JSON.stringify(data.userData), { expires: 7 });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed (AuthContext)", error);
      router.push("/register");
    }
  };

  const logout = async (tokenUser: string) => {
    try {
      await ServiceAuth.logaut(tokenUser);
    } catch (error) {
      console.error("Logout failed (AuthContext)", error);
    } finally {
      setToken(null);
      setUserData(null);
      Cookie.remove("authToken");
      Cookie.remove("userData");
      router.push("/");
    }
  };

  const register = async (data: any) => {
    try {
      const response = await ServiceAuth.registerUser(data, address!);
      console.log("User registered successfully:", response);
      await login(address!);
    } catch (error) {
      console.error("Registration failed (AuthContext)", error);
    }
  };

  useEffect(() => {
    getCookie();
  }, []);

  // Detecta la conexión de la wallet y realiza login o logout en consecuencia
  useEffect(() => {
    if (isConnected && address) {
      login(address); // Inicia sesión al conectar la wallet si no hay token
    } else if (!isConnected) {
      logout(token!); // Cierra sesión si se desconecta la wallet
    }
  }, [isConnected, address]);

  return (
    <AuthContext.Provider value={{ userData, token, login, logout, register, getCookie }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};