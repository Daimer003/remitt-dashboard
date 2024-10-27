import { config } from "@/config/config";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useBalance, useAccount } from "wagmi";

interface PropsBalance {
  balanceBnb?: boolean;
  balanceUsdt?: boolean;
}

const BalanceWallet = ({ balanceBnb, balanceUsdt }: PropsBalance) => {
  const [bnb, setBnb] = useState<string>("0");
  const [usdt, setUstd] = useState<string>("0");
  const { address } = useAccount();

  // Función para asegurar que las direcciones tienen el prefijo '0x'
  const validateAddress = (address: string): `0x${string}` => {
    if (!address.startsWith("0x")) {
      throw new Error(
        `La dirección ${address} no es válida, debe comenzar con '0x'`
      );
    }
    return address as `0x${string}`;
  };

  const resultBnb = useBalance({
    address: address,
    config,
  });

  const resultUsdt = useBalance({
    address: address,
    token: validateAddress(
      process.env.NEXT_PUBLIC_REMITT_TOKEN_DCORP as string
    ),
    config,
  });

  useEffect(() => {
    if (resultBnb.data) setBnb(parseFloat(resultBnb.data.formatted).toFixed(1));
    if (resultUsdt.data)
      setUstd(parseFloat(resultUsdt.data.formatted).toFixed(1));
  }, [resultBnb]);

  if (balanceBnb) {
    return (
      <Box w='100%'>
        <Text as="span" color="black">
          {bnb}
        </Text>
      </Box>
    );
  }

  if (balanceUsdt) {
    return (
      <Box w='100%'>
        <Text as="span" color="black">
          {usdt}
        </Text>
      </Box>
    );
  }
};

export default BalanceWallet;
