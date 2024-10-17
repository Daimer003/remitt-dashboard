"use client";

import { Button } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";
import { login } from "@/features/authSlice";
import { useRouter } from "next/navigation";
import { ServiceAuth } from "@/services/auth.service";
import { useEffect, useCallback } from "react";
import { saveCookie } from "@/utils/cookie";

const Connect = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const dispatch = useDispatch();
  const router = useRouter();

  // Función para manejar la conexión y autenticación
  const handleConnect = useCallback(async () => {
    try {
      await open();

      if (!isConnected || !address) {
        console.error("Conexión fallida. No hay una dirección de wallet conectada.");
        return;
      }

      const response = await ServiceAuth.getAuth(address);

      // Guardar el token en la cookie
       saveCookie(response.data.token);

      const userData = {
        user: { id: 1, name: "Daymer", wallet: address },
        token: response.data.token,
      };

      // Guardar el estado de usuario en Redux
      dispatch(login(userData));

      // Redireccionar al dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Error al conectar la billetera:", error);
    }
  }, [isConnected, address, open, dispatch, router]);

  // Manejo del efecto cuando el usuario se conecta
  useEffect(() => {
    if (isConnected && address) {
      handleConnect();
    }
  }, [isConnected, address, handleConnect]);

  return (
    <Button h="30px" variant="buttonPrimary" onClick={handleConnect}>
      Conectar wallet
    </Button>
  );
};

export default Connect;