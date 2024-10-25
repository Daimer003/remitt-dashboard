import { Box, Button, Flex } from "@chakra-ui/react";
import Connect from "./connect";
import Image from "next/image";
import logo from "../../app/assets/logo.webp";


const AuthMenu = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      maxW="1600"
      padding="10px"
      gap="10px"
      position="relative"
      zIndex={20}
    >
      <Box>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
        />
      </Box>
      <Flex gap="10px">
        <Button h="30px" variant="buttonSecondary">
          Productos
        </Button>
        <Box display={{base: 'none', md: 'flex'}}>
          <Connect />
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthMenu;
