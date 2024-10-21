"use client";

import Layout from "@/components/layout";
import { useAuth } from "@/context/authContext";
import { ServiceAuth } from "@/services/auth.service";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAccount } from "wagmi";

const Register = () => {
  const { isConnected, address } = useAccount();
const { register } = useAuth()
  const [dataRegister, setDataRegister] = useState<any>({
    username: "",
    wallet: "",
    sponsor_id: null,
  });

  const sendRegister = async () => {
   register(dataRegister)
   console.log('Es hora del registro', address)
    //const response = await ServiceAuth.registerUser(dataRegister);
  };

  const handleFormSubmit = (event: any) => {
    const { name, value } = event.target;

    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };

  return (
    <Layout>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="100%"
        bg="#25253D"
        gap={6}
      >
        <Box
          display="flex"
          w="100%"
          maxW="600px"
          bg="rgba(255, 255, 255, 0.61)"
          borderRadius="20px"
        >
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap={6}
            p={4}
            margin="20px 0"
            bg="#25253c41"
          >
            <Box>
              <Text
                as="h2"
                color="white"
                fontWeight="600"
                fontSize="xl"
                textAlign="center"
              >
                Register
              </Text>
              <Text
                as="p"
                color="white"
                fontWeight="300"
                fontSize="lg"
                textAlign="center"
              >
                To register you must enter what will be your user code.
              </Text>
            </Box>

            <Box w="100%">
              <FormControl display="flex" flexDir="column" gap={3}>
                <Input
                  onChange={handleFormSubmit}
                  name="username"
                  placeholder="User code"
                  bg="rgba(255, 255, 255, .1)"
                  borderRadius="50px"
                  textAlign="center"
                />
                <Input
                  onChange={handleFormSubmit}
                  name="sponsor_id"
                  placeholder="Referred code"
                  bg="rgba(255, 255, 255, .1)"
                  borderRadius="50px"
                  textAlign="center"
                />
              </FormControl>
            </Box>

            <Box w="100%" maxW="300px">
              <Button w="100%" variant="buttonPrimary" onClick={sendRegister}>
                Regiser
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
