import Boxdashboard from "@/components/box-dashboard";
import { Text, Box } from "@chakra-ui/react";

import img1 from "@/app/assets/imagen-1.webp";
import img2 from "@/app/assets/imagen-2.webp";
import img3 from "@/app/assets/imagen-3.webp";
import Swap from "@/components/swap";
import TableData from "@/components/table";
import CardProduct from "@/components/cards/card-product";
import CardReferreals from "@/components/cards/card-referreals";
import SkeletonLayout from "@/components/skeleton";
import { useAccount, useDisconnect } from "wagmi";



const Home = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  console.log(isConnected)
  return (
    <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
      <Box display="flex" alignItems="center" flexDir="row" w="100%" gap="20px">
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
          >
            <Text as="h4" color="black" minH="30px">
              Stake Profit
            </Text>
            <Box
              w="100%"
              bg="var(--bg-gradient-box-1)"
              p={2}
              borderRadius="8px"
            >
              <Text as="h4" fontSize="4xl" fontWeight="600" textAlign="center">
                $57.24
              </Text>
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

      <Box display="flex" w="100%" gap="20px">
        <Swap />
        <CardProduct />
        <CardReferreals />
      </Box>

      <Box display="flex" position="relative">
        <TableData
          headers={["MITT", "Wallet", "Amount", "Currency", "Fecha", "Enlace"]}
          values={["id_status_purchase", "created_at", "amount", "activate_at"]}
          dataBody={["id", "prueba"]}
        />
      </Box>
    </Box>
  );
};

export default Home;
