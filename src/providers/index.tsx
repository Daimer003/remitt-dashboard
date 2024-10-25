"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/lib/theme";
import { AuthProvider } from "@/context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

type Prop = {
  children: any;
};

const Providers = ({ children }: Prop) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
