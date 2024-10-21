"use client";
// context/AuthContext.ts

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { ServiceAuth } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useAccount, useAccountEffect } from "wagmi";

interface UserData {
  id: string; // ID del usuario
  name: string; // Nombre del usuario
  email: string; // Correo del usuario
  // Agrega más campos según lo necesites
}

interface AuthContextType {
  userData: UserData | null;
  token: string | null;
  login: (wallet: string) => void;
  logout: (tokenUser: string) => void;
  register: (data: any) => void;
  getCookie: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigation = useRouter();
  const { isConnected } = useAccount();

  const login = async (wallet: any) => {
    try {
      const response = await ServiceAuth.getAuth(wallet);

      setToken(response.data.token);
      setUserData(userData);
      Cookie.set("authToken", response.data.token, { expires: 7 });
      Cookie.set("userData", JSON.stringify(userData), { expires: 7 });

      navigation.push("/dashboard");
    } catch (error) {
      console.log("No se lograr hacer login, ( AUTHCONTEXT )", error);
      navigation.push("/register");
    }
  };

  const logout = async (tokenUser: string) => {
    setToken(null);
    setUserData(null);
    Cookie.remove("authToken");
    Cookie.remove("userData");

    //Elimina la autenticación en el backend
    await ServiceAuth.logaut(tokenUser); 
    localStorage.clear();
    navigation.push("/");
  };

  const register = async (data: any) => {
    const response = await ServiceAuth.registerUser(data);
    console.log(response);
  };

  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);
      login(data.address);
    },
    onDisconnect() {
      console.log("Disconnected!");
    },
  });

  const getCookie = () => {
    const storedToken = Cookie.get("authToken");
    const storedUserData = Cookie.get("userData");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData) as UserData);
    }
  };

  useEffect(() => {
    getCookie();
  }, [isConnected]);

  return (
    <AuthContext.Provider
      value={{ userData, token, login, logout, register, getCookie }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
