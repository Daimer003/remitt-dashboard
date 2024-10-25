"use client";

import Layout from "@/components/layout";
import { useAuth } from "@/context/authContext";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState, useCallback } from "react";
import { useAccount } from "wagmi";

const Register = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { register } = useAuth();

  const [formValues, setFormValues] = useState({ username: "", sponsor_id: "" });

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleRegister = useCallback(async () => {
    if (!address) return open();

    const { username, sponsor_id } = formValues;
    if (username && sponsor_id) {
      await register({ username, sponsor_id });
    }
  }, [address, formValues, open, register]);



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
          p={6}
        >
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap={4}
            bg="#25253c41"
            p={6}
            borderRadius="20px"
          >
            <Text as="h2" color="white" fontWeight="600" fontSize="xl" textAlign="center">
              Register
            </Text>
            <Text as="p" color="white" fontWeight="300" fontSize="lg" textAlign="center">
              To register, please enter your user code and referred code.
            </Text>

            <FormControl display="flex" flexDir="column" gap={4} w="100%">
              <Input
                name="username"
                placeholder="User code"
                bg="rgba(255, 255, 255, .1)"
                borderRadius="50px"
                textAlign="center"
                value={formValues.username}
                onChange={handleInputChange}
              />
              <Input
                name="sponsor_id"
                placeholder="Referred code"
                bg="rgba(255, 255, 255, .1)"
                borderRadius="50px"
                textAlign="center"
                value={formValues.sponsor_id}
                onChange={handleInputChange}
              />
            </FormControl>

            <Button w="100%" maxW="300px" variant="buttonPrimary" onClick={handleRegister}>
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;