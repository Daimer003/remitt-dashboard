"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/config/config-wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiProvider } from "wagmi";
import theme from "@/lib/theme";
import context from "@/context-global";
import { Provider } from "react-redux";

type Prop = {
  children: any;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Prop) => {
  return (
    <Provider store={context}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
};

export default Providers;
