import { Box } from "@chakra-ui/react";
import Connect from "./connect";
import Image from "next/image";
import logo from "../../app/assets/logo.webp";

const AuthMenu = () => {
  return (
    <Box display="flex" alignItems='center' justifyContent="space-between" w="100%" padding="20px" gap='10px'>
      <Box>
        <Image src={logo} alt="logo" width={150} height={150} style={{
            width: '100%',
            height: 'auto'
        }}
        priority 
        />
      </Box>
      <Connect />
    </Box>
  );
};

export default AuthMenu;
