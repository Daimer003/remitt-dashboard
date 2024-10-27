import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";


interface Props {
  description: string;
  background: string;
  img: any
}

const Boxdashboard = ({ description, background, img }: Props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      w="100%"
      maxW="350px"
      maxH="100px"
      bg={background}
      gap="10px"
      padding="10px"
      borderRadius="16px"
    >
      <Box w="100%" maxW="80px">
        <Image
          src={img}
          alt={`Imagen ${description}`}
          width={100}
          height={100}
        />
      </Box>
      <Box>
        <Text as="h3" color="white">
          Global Sales
        </Text>
        <Text as="span" fontSize="xl" fontWeight="600" color="white">
          $57.24
        </Text>
      </Box>
    </Box>
  );
};

export default Boxdashboard;
