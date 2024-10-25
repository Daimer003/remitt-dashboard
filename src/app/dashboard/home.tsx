import Boxdashboard from "@/components/box-dashboard";
import { Text, Box } from "@chakra-ui/react";

import img1 from "@/app/assets/imagen-1.webp";
import img2 from "@/app/assets/imagen-2.webp";
import img3 from "@/app/assets/imagen-3.webp";
import SkeletonLayout from "@/components/skeleton";
import CardBond from "@/components/cards/card-bond";
import CodeQr from "@/components/codeQr";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {


  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={14}>
      <Box display="flex" alignItems="end" flexDir="row" w="100%" gap="20px">
        <SkeletonLayout borderRadius="16px">
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            w="100%"
            maxW="900px"
            bg="var(--bg-color-2)"
            p="10px"
            gap={2}
            borderRadius="16px"
            position="relative"
          >
            <Text
              as="h4"
              color="black"
              fontSize="xl"
              fontWeight="600"
              minH="30px"
              margin="20px 0 0 0"
            >
              Stake Profit
            </Text>
            <Box
              w="100%"
              bg="var(--bg-gradient-box-1)"
              p={2}
              borderRadius="8px"
            >
              <Text as="h4" fontSize="2xl" fontWeight="600" textAlign="center">
                $57.24
              </Text>
            </Box>

            <Box
              display="flex"
              w="300px"
              position="absolute"
              right="-100px"
              top="-50px"
            >
              <DotLottieReact src="/assets/animation.json" loop autoplay />
            </Box>
          </Box>
        </SkeletonLayout>

        <Boxdashboard
          img={img1}
          description="Global Sales"
          background="var(--bg-gradient-box-2)"
        />
        <Boxdashboard
          img={img2}
          description="Global Sales"
          background="var(--bg-gradient-box-3)"
        />
        <Boxdashboard
          img={img3}
          description="Global Sales"
          background="var(--bg-gradient-box-4)"
        />
      </Box>

      <Box display="flex" w="100%" gap={10} marginTop={4}>
        <CardBond typeBond="BONO INDIRECTO" title="Bono" />
        <CardBond
          typeBond="BONO INFINITO"
          title="Rango 1"
          nivel={["R1", "R2", "R3", "R4"]}
        />
        <CardBond typeBond="POOL" title="Pool 1" nivel={["P1", "P2", "P3"]} />
      </Box>

      <Box display="flex" position="relative" marginBottom={6}>
        <CodeQr />
      </Box>
    </Box>
  );
};

export default Home;
