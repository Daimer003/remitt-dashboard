'use client'
import DashboardMenu from "@/components/shared/dashboard-menu";
import Sidebard from "@/components/shared/sidebard";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Home from "./home";
import Referreals from "./referreals";

const Dashboard = () => {
  const [page, setPage] = useState<string>("referrels");
  const [routing, _] = useState<any>({
    home: <Home />,
    referrels: <Referreals />
  });

  return (
    <Box display="flex" w="100%" height="100vh">
      {/* Menú lateral fijo */}
      <Sidebard />

      {/* Contenido principal */}
      <Box w="100%" p={4} overflowY="auto" marginLeft="10rem">
        <DashboardMenu />

        {routing[page as string]}
      </Box>
    </Box>
  );
};

export default Dashboard;
