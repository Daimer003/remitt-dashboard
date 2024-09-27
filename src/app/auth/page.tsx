import AuthMenu from "@/components/shared/auth-menu";
import { Box, Text } from "@chakra-ui/react";

const Auth = () => {
  return (
    <Box w='100%'>
      <AuthMenu />
      <Text>Auth</Text>
    </Box>
  );
};

export default Auth;
