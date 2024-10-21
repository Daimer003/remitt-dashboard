"use client";

import { Button } from "@chakra-ui/react";
import { useDisconnect, useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const Connect = () => {
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const {isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <Button h="30px" variant="buttonSecondary" onClick={() => disconnect()}>
         Desconectar
        </Button>
      ) : (
        <Button h="30px" variant="buttonPrimary" onClick={() => open()}>
          Conectar wallet
        </Button>
      )}
    </>
  );
};

export default Connect;
