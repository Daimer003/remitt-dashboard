import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import img1 from "@/app/assets/imagen-1.webp";

interface Props {
  description: string;
}

const Boxdashboard = ({ description }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      w="100%"
      maxW="300px"
      maxH="100px"
      bg="var(--bg-color-2)"
      gap="10px"
      padding="10px"
      borderRadius="16px"
    >
      <Box w="100%" maxW="80px">
        <Image
          src={img1}
          alt={`Imagen ${description}`}
          width={100}
          height={100}
        />
      </Box>
      <Box>
        <Text as="h3" color="black">
          Global Sales
        </Text>
        <Text as="span" fontSize="4xl" fontWeight="600" color="black">
          $57.24
        </Text>
      </Box>
    </Box>
  );
};

export default Boxdashboard;
