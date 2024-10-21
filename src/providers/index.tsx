"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/config/config-wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiProvider } from "wagmi";
import theme from "@/lib/theme";


type Prop = {
  children: any;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Prop) => {
  return (

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </QueryClientProvider>
      </WagmiProvider>

  );
};

export default Providers;
