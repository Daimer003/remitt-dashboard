import Boxdashboard from "@/components/box-dashboard";
import { Text, Box, Flex } from "@chakra-ui/react";
import img1 from "@/app/assets/imagen-1.webp";
import img2 from "@/app/assets/imagen-2.webp";
import img3 from "@/app/assets/imagen-3.webp";
import SkeletonLayout from "@/components/skeleton";
import CardBond from "@/components/cards/card-bond";
import CodeQr from "@/components/codeQr";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CardBondInfinite from "@/components/cards/card-bond-infinite";
import CardBondNetwork from "@/components/cards/card-bond-network";

const StakeProfit = () => (
  <SkeletonLayout borderRadius="16px">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w="100%"
      maxW={{ lg: "900px" }}
      bg="gray.100"
      p={{ base: "10px", lg: "20px" }}
      gap={2}
      borderRadius="16px"
      position="relative"
    >
      <Text
        as="h4"
        color="black"
        fontSize={{ base: "lg", lg: "xl" }}
        fontWeight="600"
        mt={5}
      >
        Stake Profit
      </Text>
      <Box w="100%" bg="blue.200" p={2} borderRadius="8px">
        <Text
          as="h4"
          fontSize={{ base: "xl", lg: "2xl" }}
          fontWeight="600"
          textAlign="center"
        >
          $57.24
        </Text>
      </Box>
      <Box
        display="flex"
        w={{ base: "150px", lg: "300px" }}
        position="absolute"
        right={{ base: "-50px", lg: "-100px" }}
        top={{ base: "-25px", lg: "-50px" }}
      >
        <DotLottieReact src="/assets/animation.json" loop autoplay />
      </Box>
    </Box>
  </SkeletonLayout>
);

const Home = () => {
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" mt={14}>
      <Flex
        alignItems="end"
        flexDirection={{ base: "column", lg: "row" }}
        w="100%"
        gap="20px"
      >
        <StakeProfit />
        <Flex w="100%" gap={3}>
          <Boxdashboard
            img={img1}
            description="Global Sales"
            background="gray.300"
          />
          <Boxdashboard
            img={img2}
            description="Global Sales"
            background="gray.400"
          />
          <Boxdashboard
            img={img3}
            description="Global Sales"
            background="gray.500"
          />
        </Flex>
      </Flex>

      <Flex
        w="100%"
        gap={{ base: 4, lg: 10 }}
        mt={4}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <CardBondNetwork typeBond="BONO INDIRECTO" title="Bono" />
        <Flex w='100%' flexDirection={{ base: "column", md: "row" }} gap={3}>
          <CardBondInfinite
            typeBond="BONO INFINITO"
            title="Rango 1"
            nivel={["R1", "R2", "R3", "R4"]}
          />
          <CardBond typeBond="POOL" title="Pool 1" nivel={["P1", "P2", "P3"]} />
        </Flex>
      </Flex>

      <Box position="relative" mb={6} display="flex" justifyContent="center">
        <CodeQr />
      </Box>
    </Box>
  );
};

export default Home;
