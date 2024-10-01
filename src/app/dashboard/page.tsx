import Boxdashboard from "@/components/box-dashboard";
import DashboardMenu from "@/components/shared/dashboard-menu";
import Sidebard from "@/components/shared/sidebard";
import { Text, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box display="flex" w="100%" height="100vh">
      {/* Menú lateral fijo */}
      <Sidebard />

      {/* Contenido principal */}
      <Box w="100%" p={4} overflowY="auto" marginLeft="10rem">
        <DashboardMenu />

        <Box w="100%" marginTop={8}>
          <Box display="flex" alignItems='center' flexDir="row" w="100%" gap='20px'>
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

            <Boxdashboard description="Global Sales" />
            <Boxdashboard description="Global Sales" />
            <Boxdashboard description="Global Sales" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
