import AuthMenu from "@/components/shared/auth-menu";
import Connect from "@/components/shared/connect";
import { Flex, Box, AspectRatio, Text } from "@chakra-ui/react";

//Video
const video =
  "https://firebasestorage.googleapis.com/v0/b/remitt-5fd4c.appspot.com/o/VIDEOS%2FRemitt%20%20Esp%20FHD%20Final.mp4?alt=media&token=f47817ef-d97d-47d1-a164-9a008d13038f";

const Auth = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <AuthMenu />

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        w="100%"
        gap="30px"
        marginTop="50px"
        p={3}
      >
        <Flex flexDir='column' gap='10px' >
          <Text as="h3" color="black" fontSize="4xl" fontWeight="800">
            Bienvenido a Remitt
          </Text>
          <Text as="p" color="black" textAlign="center">
            Conecte su billetera para comenzar
          </Text>

          <Box display={{ base: "flex", md: "none" }} margin='auto'>
            <Connect />
          </Box>
        </Flex>

        <Box maxW="960px" width="100%">
          <AspectRatio maxW="960px" ratio={2}>
            <Box
              as="video"
              controls
              autoPlay
              borderRadius="20px"
              border="2px solid  var(--border-color-1)" // Agregamos el borde de color rojo
              src={video}
            >
              <source type="video/mp4" src={video} />
            </Box>
          </AspectRatio>
        </Box>
      </Box>
    </Flex>
  );
};

export default Auth;
