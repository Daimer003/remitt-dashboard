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
        
        <Text fontSize="3xl" mb={4}>
          Contenido principal
        </Text>
        {/* Simulación de mucho contenido para el scroll */}
        {Array.from({ length: 100 }).map((_, i) => (
          <Text key={i} mb={2}>
            Esta es una línea de contenido {i + 1}.
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
