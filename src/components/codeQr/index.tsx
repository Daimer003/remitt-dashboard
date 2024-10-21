import { Box, Button, Text } from "@chakra-ui/react";
import GenerateQr from "../qr";
import { useEffect, useState } from "react";
import { ServicesHome } from "@/services/home.service";
import SkeletonLayout from "../skeleton";
import { useAuth } from "@/context/authContext";

const CodeQr = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { token, getCookie } = useAuth();
  const [link, setLink] = useState<string>('')

  useEffect(() => {

    (async () => {
      try {
        getCookie()
        if (token != null) {
          const response = await ServicesHome.LinkReferred(token);
          setLink(response.data)
          setIsloading(true);
        }
      } catch (error) {
        console.log("En el componente nno se obtuvo el link del referido");
      }
    })();
  }, [token]);

  return (
    <SkeletonLayout borderRadius="16px" isLoading={isLoading}>
      <Box
        display="flex"
        w="100%"
        marginTop={8}
        bg="var(--bg-color-2)"
        p="10px"
        gap={6}
        borderRadius="16px"
      >
        <Box>
          <GenerateQr value={link} image="" />
        </Box>
        <Box
          display="flex"
          gap={4}
          flexDir="column"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            as="p"
            color="black"
            maxW="900px"
            textAlign="center"
            fontSize="xl"
          >
            Para invitar a tus amigos a través de Remitt, simplemente escanea el
            código QR que te proporcionaron. ¡Es súper fácil y rápido! 📲
          </Text>
          <Button w="100%" maxW="300px" variant="buttonSecondary">
            Invitación Link
          </Button>
        </Box>
      </Box>
    </SkeletonLayout>
  );
};

export default CodeQr;
