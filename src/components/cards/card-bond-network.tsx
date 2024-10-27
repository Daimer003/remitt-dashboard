import {
  Box,
  Text,
  VStack,
  HStack,
  Progress,
  Wrap,
  Circle,
} from "@chakra-ui/react";
import Image from "next/image";
import imgNivel from "@/app/assets/mask-nivel.webp";
import {
  cardBorderRadiusLg,
  cardBorderRadiusMd,
} from "@/constants/resolutions";

interface Props {
  nivel?: any;
  title?: string;
  typeBond: string;
}

const CardBondNetwork = ({ nivel, title, typeBond }: Props) => {
  return (
    <Box
      w="100%"
      maxW={{base: '1200px', lg: "500px"}}
      bg="gray.50"
      borderRadius={cardBorderRadiusLg}
      boxShadow="md"
      p={4}
      color="gray.800"
    >
      {/* Header */}
      <Box
        bgGradient="linear(to-r, purple.500, purple.700)"
        borderRadius={cardBorderRadiusLg}
        py={4}
        color="white"
        textAlign="center"
      >
        <Box
          bg="white"
          borderRadius="full"
          boxSize="60px"
          mx="auto"
          mb={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Icon Placeholder */}
          <Text fontSize="2xl" color="purple.500">
            🔗
          </Text>
        </Box>
        <Text fontWeight="bold">BONO DE RED</Text>
      </Box>

      <VStack spacing={4} mt={4} align="stretch">
        {/* Bono Directo */}
        <Box bg="purple.100" borderRadius={cardBorderRadiusMd} p={4}>
          <Text fontSize="sm" color="purple.700" fontWeight="bold">
            Bono directo
          </Text>
          <HStack justifyContent="space-between" mt={2}>
            <Text fontSize="sm" color="gray.600">
              Swap personal
            </Text>
            <Text fontSize="sm" color="purple.600">
              300 USD
            </Text>
          </HStack>
          <Progress value={100} colorScheme="green" mt={2} borderRadius={cardBorderRadiusMd} />
          <Text fontSize="sm" color="gray.500" mt={2}>
            Comisionamiento <b>Nivel 1</b>
          </Text>
        </Box>

        {/* Bono Indirecto */}
        <Box bg="purple.100" borderRadius={cardBorderRadiusMd} p={4}>
          <Text fontSize="sm" color="purple.700" fontWeight="bold">
            Bono Indirecto
          </Text>
          <HStack justifyContent="space-between" mt={2}>
            <Text fontSize="sm" color="gray.600">
              5 referidos directos
            </Text>
            <Wrap>
              {[...Array(5)].map((_, i) => (
                <Circle
                  key={i}
                  size="10px"
                  bg={i < 3 ? "green.400" : "gray.300"}
                />
              ))}
            </Wrap>
          </HStack>
          <HStack justifyContent="space-between" mt={2}>
            <Text fontSize="sm" color="gray.600">
              Swap personal
            </Text>
            <Text fontSize="sm" color="purple.600">
              1,000 USD
            </Text>
          </HStack>
          <Progress value={100} colorScheme="green" mt={2} borderRadius={cardBorderRadiusMd} />
        </Box>
      </VStack>

      {/* Comisionamiento */}
      <Box textAlign="center" mt={4}>
        <Text fontSize="sm" color="gray.500">
          Comisionamiento <b>nivel 2-6</b>
        </Text>
      </Box>
    </Box>
  );
};

export default CardBondNetwork;
