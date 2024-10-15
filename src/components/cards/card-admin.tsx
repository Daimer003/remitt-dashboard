import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

import img from "@/app/assets/admin-1.webp";

const CardAdmin = () => {
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems='center'
      gap={3}
      justifyContent="center"
      w="100%"
      maxW="300px"
      bg="var(--bg-color-2)"
      borderRadius="20px"
      padding={3}
    >
      <Box>
        <Image src={img} alt="Icono de admin" width={100} height={100} />
      </Box>
      <Box display="flex"  w="100%" flexDir="column" alignItems="center" gap={3}>
        <Text as="span" color="black" fontSize="xl">
          Manager Users
        </Text>
        <Button bg="#AA61F8" w="100%" borderRadius="50px">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CardAdmin;
