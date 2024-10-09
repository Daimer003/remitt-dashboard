"use client";

import { Button } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import { useDispatch } from 'react-redux';
import { login } from '@/features/authSlice';


const Connect = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();

  const handleLogin = () => {

    open()

    const userData = {
      user: { id: 1, name: 'Daymer', wallet: '' },
      token: 'abc123',
    };
    dispatch(login(userData));
  
  };


  return (
    <Button
      h="30px"
      variant="buttonPrimary"
      onClick={handleLogin}
    >
      Conectar wallet
    </Button>
  );
};

export default Connect;
