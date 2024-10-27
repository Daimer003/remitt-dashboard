"use client";
import { Box, List, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../app/assets/logo-dashboard.webp";
import {
  IconHome,
  IconSlider,
  IconUser,
  IconCurrency,
  IconPlay,
  IconDataBase,
  IconExit,
  IconGraph,
} from "@/utils/icons";
import React, { useState } from "react";
import { useAuth } from "@/context/authContext";
import { useDisconnect } from "wagmi";


// Definición clara de las interfaces y tipos
interface ILink {
  id: number;
  path: string;
  icon: React.ElementType; // Tipo para componentes como iconos
}

interface SidebardProps {
  /**
   * Función que se ejecuta cuando se selecciona una ruta
   * @param ruta - La ruta seleccionada por el usuario
   */
  rute: (ruta: string) => void;
}

const links: readonly ILink[] = [
  { id: 1, path: "Home", icon: IconHome },
  { id: 2, path: "Staking", icon: IconSlider },
  { id: 3, path: "Referrals", icon: IconUser },
  { id: 4, path: "Swap", icon: IconCurrency },
  { id: 5, path: "Tutorial", icon: IconPlay },
  { id: 6, path: "Admin", icon: IconGraph },
  { id: 7, path: "Administrations", icon: IconDataBase },
];

const Sidebard = ({ rute }: SidebardProps) => {
  const [active, setActive] = useState<string>("Home");
  const { logout, token } = useAuth();
  const { disconnect } = useDisconnect();

 const initDisconnect = () =>{
  disconnect()
  if(token) logout(token)
 }

  const handleActivePath = (path: string) => {
    setActive(path);
    rute(path);
  };

  return (
    <Box
      as="nav"
      display={{base: 'none', xl: "flex"}}
      justifyContent="center"
      w="8rem"
      color="white"
      p={4}
      position="fixed"
      zIndex={999}
    >
      <VStack
        justifyContent="center"
        w="100%"
        maxW="100px"
        spacing={4}
        bg="var(--bg-gradient-sidebard)"
        p="10px"
        borderRadius="16px"
      >
        <Box w="60px" h="auto" mt="20px">
          <Image
            src={logo}
            alt="Logo Dashboard"
            width={100}
            height={100}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Box>

        <List display="flex" flexDir="column" w="100%" gap="10px" mt={2}>
          {links.map((link) => (
            <Box
              as="li"
              key={link.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg={link.path === active ? "#fff" : "#ffffff18"}
              boxShadow={
                link.path === active ? "inset 0px 3px 6px #00000033" : ""
              }
              w="100%"
              maxW="100px"
              h="80px"
              p="10px"
              borderRadius="20px"
              cursor="pointer"
              aria-label={`Navigate to ${link.path}`}
              onClick={() => handleActivePath(link.path)}
            >
              <link.icon
                size="35"
                color={link.path === active ? "#101010" : "#ffffff"}
              />
            </Box>
          ))}

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid #fff"
            w="100%"
            p="10px"
            borderRadius="8px"
            cursor="pointer"
            aria-label="Disconnect wallet"
            onClick={initDisconnect}
          >
            <IconExit size="35" color="#ffffff" />
          </Box>
        </List>
      </VStack>
    </Box>
  );
};

export default React.memo(Sidebard);
