import { Box, Text, VStack, HStack, Progress, Circle } from "@chakra-ui/react";
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

const CardBond = ({ nivel, title, typeBond }: Props) => {
  return (
    <Box display="flex" gap="20px" w="100%" >
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
        maxW={{base: '900px', md: "600px"}}
        bg="gray.50"
        borderRadius={cardBorderRadiusLg}
        boxShadow="md"
        p={4}
        color="gray.800"
      >
        {/* Header */}
        <Box
          bg="blue.600"
          borderRadius="3xl"
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
            <Text fontSize="2xl" color="blue.600">
              👤
            </Text>
          </Box>
          <Text fontWeight="bold">BONO POOL</Text>
        </Box>

        <VStack spacing={4} mt={4} align="stretch">
          {/* Volumen Total de Red */}
          <Box bg="gray.100" borderRadius={cardBorderRadiusMd} p={4}>
            <Text fontSize="sm" color="gray.600">
              Volumen total de red
            </Text>
            <HStack justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="bold">
                1.000.000 USD
              </Text>
              <Text fontSize="sm" color="gray.500">
                100%
              </Text>
            </HStack>
            <Progress
              value={100}
              colorScheme="green"
              mt={2}
              borderRadius={cardBorderRadiusMd}
            />
          </Box>

          {/* Máximo 50% del volumen de un directo */}
          <Box bg="gray.100" borderRadius={cardBorderRadiusMd} p={4}>
            <Text fontSize="sm" color="gray.600">
              Máximo 50% del volumen de un directo
            </Text>
            <HStack justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="bold">
                3.000.000 USD
              </Text>
              <Text fontSize="sm" color="gray.500">
                50%
              </Text>
            </HStack>
            <Progress value={50} colorScheme="blue" mt={2} borderRadius={cardBorderRadiusMd} />
          </Box>
        </VStack>

        {/* Comisionamiento */}
        <Box textAlign="center" mt={4}>
          <Text fontSize="sm" color="gray.500">
            Comisionamiento 3%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardBond;
