import {
  Box,
  Button,
  Text,
  Radio,
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

const CardBondInfinite = ({ nivel, title, typeBond }: Props) => {
  return (
    <Box display="flex" gap="20px" w="100%"  maxW={{base: '900px', md: "600px"}}>
      <Box
        w="60px"
        bg="gray.50"
        borderRadius={cardBorderRadiusLg}
        boxShadow="md"
        p={2}
        color="gray.800"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Title */}
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          sx={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
          transform="rotate(180deg)"
          mb={4}
        >
          RANGO
        </Text>

        {/* Rank Levels */}
        <VStack spacing={4}>
          {[1, 2, 3, 4].map((rank, index) => (
            <Circle
              key={rank}
              size="40px"
              bg={index < 2 ? "purple.500" : "transparent"}
              border="2px solid"
              borderColor="purple.500"
              color={index < 2 ? "white" : "purple.500"}
              fontWeight="bold"
            >
              {rank}
            </Circle>
          ))}
        </VStack>
      </Box>

      <Box
        w="100%"
        maxW={{base: '900px', md: "500px"}}
        bg="gray.50"
        borderRadius={cardBorderRadiusLg}
        boxShadow="md"
        p={4}
        color="gray.800"
      >
        {/* Header */}
        <Box
          bg="teal.400"
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
            <Text fontSize="2xl" color="teal.400">
              ∞
            </Text>
          </Box>
          <Text fontWeight="bold">BONO INFINITO</Text>
        </Box>

        <VStack spacing={4} mt={4} align="stretch">
          {/* Swap Personal */}
          <Box bg="gray.100" borderRadius={cardBorderRadiusMd} p={4}>
            <HStack justifyContent="space-between">
              <Text fontSize="sm" color="gray.600">
                Swap personal
              </Text>
              <Text fontSize="sm" color="teal.500">
                300USD / 1,000USD
              </Text>
            </HStack>
            <Progress
              value={30}
              colorScheme="green"
              mt={2}
              borderRadius={cardBorderRadiusMd}
            />
          </Box>

          {/* Swap de Nivel 1 */}
          <Box bg="gray.100" borderRadius={cardBorderRadiusMd} p={4}>
            <HStack justifyContent="space-between">
              <Text fontSize="sm" color="gray.600">
                Swap de <b>nivel 1</b>
              </Text>
              <Text fontSize="sm" color="teal.500">
                1000USD / 3,000USD
              </Text>
            </HStack>
            <Progress
              value={33.3}
              colorScheme="teal"
              mt={2}
              borderRadius="md"
            />
          </Box>

          {/* Volumen de Red */}
          <Box bg="gray.100" borderRadius={cardBorderRadiusMd} p={4}>
            <HStack justifyContent="space-between">
              <Text fontSize="sm" color="gray.600">
                Volumen de red
              </Text>
              <Text fontSize="sm" color="teal.500">
                1000USD / 50,000USD
              </Text>
            </HStack>
            <Progress value={2} colorScheme="gray" mt={2} borderRadius={cardBorderRadiusMd} />
          </Box>
        </VStack>

        {/* Referidos Directos */}
        <Box textAlign="center" mt={4}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Referidos directos
          </Text>
          <Wrap justify="center" spacing={2}>
            {[...Array(10)].map((_, i) => (
              <Circle
                key={i}
                size="10px"
                bg={i < 3 ? "green.400" : "gray.300"}
              />
            ))}
          </Wrap>
        </Box>

        {/* Comisionamiento */}
        <Box textAlign="center" mt={4}>
          <Text fontSize="sm" color="gray.500">
            Comisionamiento 2%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardBondInfinite;
