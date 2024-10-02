import Boxdashboard from "@/components/box-dashboard";
import DashboardMenu from "@/components/shared/dashboard-menu";
import Sidebard from "@/components/shared/sidebard";
import { Text, Box } from "@chakra-ui/react";

import img1 from "@/app/assets/imagen-1.webp";
import img2 from "@/app/assets/imagen-2.webp";
import img3 from "@/app/assets/imagen-3.webp";
import Swap from "@/components/swap";
import TableData from "@/components/table";
import CardProduct from "@/components/cards/card-product";
import CardReferreals from "@/components/cards/card-referreals";

const Dashboard = () => {
  return (
    <Box display="flex" w="100%" height="100vh">
      {/* Menú lateral fijo */}
      <Sidebard />

      {/* Contenido principal */}
      <Box w="100%" p={4} overflowY="auto" marginLeft="10rem">
        <DashboardMenu />

        <Box display="flex" flexDir="column" gap="20px" w="100%" marginTop={8}>
          <Box
            display="flex"
            alignItems="center"
            flexDir="row"
            w="100%"
            gap="20px"
          >
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
                <Text
                  as="h4"
                  fontSize="4xl"
                  fontWeight="600"
                  textAlign="center"
                >
                  $57.24
                </Text>
              </Box>
            </Box>

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

          <Box display='flex' w='100%' gap='20px'>
            <Swap />
            <CardProduct />
            <CardReferreals />
          </Box>

          <Box display="flex" position="relative">
            <TableData
              headers={[
                "MITT",
                "Wallet",
                "Amount",
                "Currency",
                "Fecha",
                "Enlace",
              ]}
              values={[
                "id_status_purchase",
                "created_at",
                "amount",
                "activate_at",
              ]}
              dataBody={["id", "prueba"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
