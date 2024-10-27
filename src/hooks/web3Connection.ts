
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";


export const useWeb3Connection = () => {
    const { isConnected, address } = useAccount();
    const { open } = useWeb3Modal();
    const router = useRouter();
    const { disconnect } = useDisconnect();


    // Función para manejar la conexión y autenticación
    const handleConnect = useCallback(async () => {
        try {
            !isConnected && await open();

            if (!isConnected || !address) {
                console.error(
                    "Conexión fallida. No hay una dirección de wallet conectada."
                );
                return;
            }

   

        } catch (error) {
            disconnect()
            console.error("Error al conectar la billetera:", error);
            router.push("/register");
        }
    }, [isConnected, address, open, router]);




    return {
        handleConnect,
        isConnected,
        disconnect,
        address
    }
}