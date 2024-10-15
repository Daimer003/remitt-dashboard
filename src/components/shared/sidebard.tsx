"use client";
import { Box, List, VStack } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../app/assets/logo-dashboard.webp";
import { useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";

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
import { useState } from "react";

interface RuteProps {
  rute: (ruta: string) => void;
}

const links = [
  {
    id: 1,
    path: "Home",
    icon: IconHome,
  },
  {
    id: 2,
    path: "Staking",
    icon: IconSlider,
  },
  {
    id: 3,
    path: "Referrals",
    icon: IconUser,
  },
  {
    id: 4,
    path: "Swap",
    icon: IconCurrency,
  },
  {
    id: 5,
    path: "Tutorial",
    icon: IconPlay,
  },
  {
    id: 6,
    path: "Tutorials",
    icon: IconGraph,
  },
  {
    id: 7,
    path: "Administrations",
    icon: IconDataBase,
  },
];

const Sidebard = ({ rute }: RuteProps) => {
  const router = useRouter();
  const [active, setActive] = useState<string>("Home");
  const { disconnect } = useDisconnect();

  const disconnectWallet = () => {
    router.push("/");
    disconnect();
  };

  const activePath = (path: string) => {
    setActive(path);
    rute(path);
  };

  return (
    <Box
      display="flex"
      as="nav"
      justifyContent="center"
      w="10rem"
      h="auto"
      color="white"
      p={4}
      position="fixed"
      padding="20px"
    >
      <VStack
        display="flex"
        justifyContent="center"
        w="100%"
        maxW="100px"
        spacing={4}
        bg="var(--bg-gradient-sidebard)"
        padding="10px"
        borderRadius="16px"
      >
        <Box w="60px" h="auto" marginTop="0px">
          <Image
            src={logo}
            alt="logo dashboard"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </Box>

        <List display="flex" flexDir="column" w="100%" gap="30px" marginTop={2}>
          {links.map((link, key) => (
            <Box
              key={key}
              as="li"
              display="flex"
              justifyContent="center"
              bg={link.path == active ? "#fff" : "#ffffff18"}
              w="100%"
              h="auto"
              padding="10px"
              borderRadius="8px"
              cursor="pointer"
              onClick={() => activePath(link.path)}
            >
              <link.icon
                size="30"
                color={link.path == active ? "#101010" : "#ffffff"}
              />
            </Box>
          ))}

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid #fff"
            w="100%"
            padding="10px"
            borderRadius="8px"
            onClick={() => disconnectWallet()}
          >
            <IconExit size="30" color="#ffffff" />
          </Box>
        </List>
      </VStack>
    </Box>
  );
};

export default Sidebard;
