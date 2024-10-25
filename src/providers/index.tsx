"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/lib/theme";
import { AuthProvider } from "@/context/authContext";

type Prop = {
  children: any;
};

const Providers = ({ children }: Prop) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  );
};

export default Providers;
