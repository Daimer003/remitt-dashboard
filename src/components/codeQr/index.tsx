import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import qr from "@/app/assets/qr.webp";

const CodeQr = () => {
  return (
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
        <Image
          src={qr}
          alt="Imagen del código"
          width={200}
          height={200}
          style={{
            borderRadius: "16px",
          }}
        />
      </Box>
      <Box display='flex' gap={4} flexDir='column' w='100%' justifyContent='center' alignItems='center'>
        <Text as="p" color="black" maxW='900px' textAlign='center' fontSize='xl'>
          Para invitar a tus amigos a través de Remitt, simplemente escanea el
          código QR que te proporcionaron. ¡Es súper fácil y rápido! 📲
        </Text>
        <Button w='100%' maxW='300px' variant="buttonSecondary">Invitación Link</Button>
      </Box>
    </Box>
  );
};

export default CodeQr;
